import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const EASE = 'expo.out';

/* ---------- header: ẩn khi cuộn xuống, hiện khi cuộn lên ---------- */
function header() {
  const h = document.querySelector('[data-header]');
  if (!h) return;
  let last = 0;
  const onScroll = (y) => {
    h.classList.toggle('is-scrolled', y > 24);
    if (!document.documentElement.classList.contains('menu-open')) {
      h.classList.toggle('is-hidden', y > 320 && y > last);
    }
    last = y;
  };
  onScroll(window.scrollY);
  return onScroll;
}

/* ---------- menu mobile ---------- */
function menu() {
  const btn = document.querySelector('[data-menu-btn]');
  const panel = document.querySelector('[data-menu]');
  if (!btn || !panel) return;
  const set = (open) => {
    document.documentElement.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
    panel.toggleAttribute('inert', !open);
    if (!reduce && open) {
      gsap.fromTo($$('[data-menu] li'), { yPercent: 110 }, { yPercent: 0, duration: 0.9, stagger: 0.05, ease: EASE });
    }
  };
  panel.setAttribute('inert', '');
  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && set(false));
}

/* ---------- tách dòng cho tiêu đề ---------- */
function splitLines(el) {
  const text = el.textContent.trim().replace(/\s+/g, ' ');
  el.setAttribute('aria-label', text);
  el.innerHTML = text.split(' ').map((w) => `<span class="w" aria-hidden="true">${w}</span>`).join(' ');
  const words = $$('.w', el);
  const lines = [];
  let top = null;
  words.forEach((w) => {
    if (w.offsetTop !== top) { lines.push([]); top = w.offsetTop; }
    lines[lines.length - 1].push(w.textContent);
  });
  el.innerHTML = lines.map((l) => `<span class="split-line" aria-hidden="true"><span>${l.join(' ')}</span></span>`).join('');
  return $$('.split-line > span', el);
}

/* ---------- lightbox album ---------- */
function lightbox() {
  const box = document.querySelector('[data-lightbox]');
  if (!box) return;
  const img = box.querySelector('img');
  const items = $$('[data-lb]');
  let i = 0;
  const show = (n) => {
    i = (n + items.length) % items.length;
    const el = items[i].querySelector('img');
    img.src = items[i].dataset.full || el.currentSrc || el.src;
    img.alt = el.alt;
  };
  const open = (n) => { show(n); box.showModal(); if (!reduce) gsap.fromTo(img, { scale: 0.96, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: EASE }); };
  items.forEach((el, n) => el.addEventListener('click', () => open(n)));
  box.querySelector('[data-prev]').addEventListener('click', () => show(i - 1));
  box.querySelector('[data-next]').addEventListener('click', () => show(i + 1));
  box.querySelector('[data-close]').addEventListener('click', () => box.close());
  box.addEventListener('click', (e) => e.target === box && box.close());
  box.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft') show(i - 1); if (e.key === 'ArrowRight') show(i + 1); });
}

/* ---------- form liên hệ: soạn tin, chép, mở Zalo ---------- */
function contactForm() {
  const f = document.querySelector('[data-zalo-form]');
  if (!f) return;
  const out = f.querySelector('[data-form-msg]');
  f.addEventListener('submit', async (e) => {
    e.preventDefault();
    const d = new FormData(f);
    if (!d.get('name') || !d.get('phone')) { out.textContent = 'Điền giúp tên và số điện thoại để Nuseva gọi lại nhé.'; return; }
    const msg = [
      'Chào Nuseva, mình muốn đặt buổi tập thử.',
      `Tên: ${d.get('name')}`,
      `SĐT: ${d.get('phone')}`,
      d.get('studio') && `Studio: ${d.get('studio')}`,
      d.get('class') && `Lớp quan tâm: ${d.get('class')}`,
      d.get('time') && `Khung giờ rảnh: ${d.get('time')}`,
      d.get('note') && `Ghi chú: ${d.get('note')}`,
    ].filter(Boolean).join('\n');
    try { await navigator.clipboard.writeText(msg); out.textContent = 'Đã chép nội dung. Zalo đang mở, bạn dán vào khung chat rồi gửi là xong.'; }
    catch { out.textContent = 'Zalo đang mở. Bạn nhắn tên và số điện thoại cho Nuseva là được.'; }
    window.gtag?.('event', 'generate_lead', { method: 'zalo_form' });
    window.fbq?.('track', 'Lead');
    window.open(f.dataset.zaloForm, '_blank', 'noopener');
  });
}

/* ---------- đo click Zalo / Gọi ---------- */
function trackClicks() {
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="tel:"], a[href*="zalo.me"], a[href*="m.me"]');
    if (!a) return;
    const kind = a.href.startsWith('tel:') ? 'call' : a.href.includes('zalo') ? 'zalo' : 'messenger';
    window.gtag?.('event', 'contact', { method: kind });
    window.fbq?.('track', 'Contact', { method: kind });
  });
}

/* ================= MOTION ================= */
function motion(onScroll) {
  const lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4), smoothWheel: true });
  lenis.on('scroll', (e) => { ScrollTrigger.update(); onScroll?.(e.scroll); });
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  $$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); lenis.scrollTo(t, { offset: -80 }); }
  }));

  /* 1. Mở trang: logo hiện như được viết ra, mèo bước vào */
  const mast = document.querySelector('[data-mast]');
  if (mast) {
    const tl = gsap.timeline({ defaults: { ease: EASE } });
    tl.fromTo('[data-mast-logo]', { opacity: 0, filter: 'blur(22px)', scale: 1.04 }, { opacity: 1, filter: 'blur(0px)', scale: 1, duration: 2.2, ease: 'power2.out', clearProps: 'filter' })
      .fromTo('[data-mast-cat]', { x: 120, opacity: 0 }, { x: 0, opacity: 1, duration: 1.6 }, 1.0)
      .fromTo('[data-mast-sub] > *', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, stagger: 0.08 }, 1.0);
    gsap.to('[data-mast-logo]', { yPercent: -18, opacity: 0.35, ease: 'none', scrollTrigger: { trigger: mast, start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to('[data-mast-cat]', { x: -160, ease: 'none', scrollTrigger: { trigger: mast, start: 'top top', end: 'bottom top', scrub: true } });
  }

  /* 2. Ảnh lớn: từ khung bo góc mở ra tràn màn hình khi cuộn tới */
  $$('[data-expand]').forEach((el) => {
    const img = el.querySelector('img');
    const mm = gsap.matchMedia();
    mm.add('(min-width: 761px)', () => {
      gsap.fromTo(el, { clipPath: 'inset(0% 7% 0% 7% round 22px)' }, {
        clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none',
        scrollTrigger: { trigger: el, start: 'top 85%', end: 'top 10%', scrub: true },
      });
    });
    if (img) gsap.fromTo(img, { scale: 1.18 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  /* 3. Đoạn văn lớn: chữ sáng dần theo cuộn */
  $$('[data-fill]').forEach((el) => {
    const text = el.textContent.trim().replace(/\s+/g, ' ');
    el.setAttribute('aria-label', text);
    el.innerHTML = text.split(' ').map((w) => `<span aria-hidden="true" style="opacity:.16">${w}</span>`).join(' ');
    gsap.to(el.children, { opacity: 1, stagger: 0.12, ease: 'none', scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true } });
  });

  /* 4. Tiêu đề hiện theo dòng */
  $$('[data-split]').forEach((el) => {
    const lines = splitLines(el);
    gsap.set(lines, { yPercent: 105, y: 0 });
    gsap.to(lines, { yPercent: 0, duration: 1.3, stagger: 0.09, ease: EASE, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
  });

  /* 5. Hiện dần (dùng tiết chế) */
  $$('[data-reveal]').forEach((el) => {
    gsap.to(el, { opacity: 1, y: 0, duration: 1.2, delay: +(el.dataset.delay || 0), ease: EASE, scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
  });
  $$('[data-stagger]').forEach((g) => {
    const kids = [...g.children];
    gsap.set(kids, { opacity: 0, y: 36 });
    gsap.to(kids, { opacity: 1, y: 0, duration: 1.2, stagger: 0.09, ease: EASE, scrollTrigger: { trigger: g, start: 'top 88%', once: true } });
  });

  /* 6. Ảnh trôi nhẹ trong khung */
  $$('[data-parallax]').forEach((el) => {
    const img = el.querySelector('img');
    if (!img) return;
    gsap.set(img, { scale: 1.14 });
    gsap.fromTo(img, { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  /* 7. Dải chữ chạy, tăng tốc theo tốc độ cuộn */
  $$('[data-marquee]').forEach((el) => {
    const track = el.firstElementChild;
    track.innerHTML += track.innerHTML;
    const loop = gsap.to(track, { xPercent: -50, duration: 38, ease: 'none', repeat: -1 });
    let boost = gsap.quickTo(loop, 'timeScale', { duration: 0.6, ease: 'power3' });
    lenis.on('scroll', (e) => { boost(1 + Math.min(Math.abs(e.velocity) / 8, 4)); clearTimeout(el._t); el._t = setTimeout(() => boost(1), 120); });
  });

  /* 8. Ba bước buổi đầu: ghim lại, cuộn tới đâu bước sáng tới đó */
  $$('[data-steps]').forEach((sec) => {
    const steps = $$('[data-step]', sec);
    const pics = $$('[data-step-pic]', sec);
    const bar = sec.querySelector('[data-step-bar]');
    const activate = (n) => {
      steps.forEach((s, i) => s.classList.toggle('is-on', i === n));
      pics.forEach((p, i) => gsap.to(p, { opacity: i === n ? 1 : 0, scale: i === n ? 1 : 1.06, duration: 1, ease: EASE, overwrite: true }));
    };
    activate(0);
    const mm = gsap.matchMedia();
    mm.add('(min-width: 900px)', () => {
      ScrollTrigger.create({
        trigger: sec, start: 'top top', end: () => '+=' + window.innerHeight * 1.8, pin: true, scrub: true,
        onUpdate: (st) => {
          const n = Math.min(steps.length - 1, Math.floor(st.progress * steps.length * 0.999));
          if (sec._n !== n) { sec._n = n; activate(n); }
          if (bar) bar.style.transform = `scaleX(${st.progress})`;
        },
      });
    });
    mm.add('(max-width: 899px)', () => { steps.forEach((s) => s.classList.add('is-on')); });
  });

  /* 9. Thư viện ảnh trượt ngang khi cuộn (desktop) */
  $$('[data-hscroll]').forEach((sec) => {
    const track = sec.querySelector('[data-hscroll-track]');
    const mm = gsap.matchMedia();
    mm.add('(min-width: 900px)', () => {
      const dist = () => track.scrollWidth - window.innerWidth + 80;
      gsap.to(track, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: sec, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 0.6, invalidateOnRefresh: true } });
    });
  });

  /* 10. Số giá nhảy nhẹ */
  $$('[data-pop]').forEach((el) => {
    gsap.from(el, { yPercent: 40, opacity: 0, duration: 1.2, ease: EASE, scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
  });

  window.addEventListener('load', () => ScrollTrigger.refresh());
}

const onScroll = header();
menu();
lightbox();
contactForm();
trackClicks();
if (reduce) {
  window.addEventListener('scroll', () => onScroll?.(window.scrollY), { passive: true });
} else {
  motion(onScroll);
}
