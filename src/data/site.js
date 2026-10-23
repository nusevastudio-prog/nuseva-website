// Toàn bộ thông tin dùng chung của web. Sửa ở đây là cả web cập nhật theo.

export const site = {
  name: 'Nuseva Studio',
  tagline: 'Pilates kèm riêng ở Quận 1 và Phú Nhuận',
  hotline: '0909 617 809',
  phoneRaw: '0909617809',
  zalo: 'https://zalo.me/0909617809',
  messenger: 'https://m.me/61573248693470',
  facebook: 'https://www.facebook.com/profile.php?id=61573248693470',
  instagram: 'https://www.instagram.com/nuseva.studio',
  email: 'nuseva.studio@gmail.com',
  // Form đăng ký gửi về email này qua FormSubmit (formsubmit.co). Lần gửi đầu tiên cần bấm xác nhận trong email.
  formEmail: 'nuseva.studio@gmail.com',
  hours: '8:00 – 21:00',
  hoursNote: 'Mở cửa hằng ngày',
  founded: 2025,
  // Điền ID khi có để bật đo lường. Để trống thì không chèn mã.
  ga4: '',
  metaPixel: '',
};

export const studios = [
  {
    id: 'cong-quynh',
    name: 'Nuseva Cống Quỳnh',
    short: 'Studio 1',
    district: 'Quận 1',
    address: '189B/A29 Cống Quỳnh, Cầu Ông Lãnh',
    city: 'TP. Hồ Chí Minh',
    map: 'https://maps.app.goo.gl/ggDABSFT6fe1DNpVA',
    embedQuery: '189B Cống Quỳnh, Cầu Ông Lãnh, Hồ Chí Minh',
    classes: ['pilates-may', 'pilates-tham'],
    formats: '1:1 và 1:2',
    note: 'Studio nhỏ, chỉ dạy lớp kèm riêng 1:1 và 1:2.',
    image: 'studio-cong-quynh',
    imageAlt: 'Phòng máy Cadillac và Reformer ở Nuseva Cống Quỳnh',
  },
  {
    id: 'phan-dang-luu',
    name: 'Nuseva Phan Đăng Lưu',
    short: 'Studio 2',
    district: 'Phú Nhuận',
    address: '181/37/1 Phan Đăng Lưu, Cầu Kiệu',
    city: 'TP. Hồ Chí Minh',
    map: 'https://maps.app.goo.gl/TpDFZxwF6pvHZ6Ht9',
    embedQuery: '181/37/1 Phan Đăng Lưu, Cầu Kiệu, Hồ Chí Minh',
    classes: ['pilates-may', 'pilates-tham', 'barre', 'yoga', 'dance'],
    formats: '1:1, 1:2 và lớp nhóm 4–6 người',
    note: 'Hai phòng tập: phòng máy và phòng thảm có gióng barre. Có thêm lớp nhóm.',
    image: 'mat-tien-cs2',
    imageAlt: 'Mặt tiền Nuseva Phan Đăng Lưu',
    equipment: ['Reformer', 'Cadillac', 'Wunda Chair', 'Ladder Barrel', 'Spine Corrector'],
  },
];

export const classes = [
  {
    slug: 'pilates-may',
    name: 'Pilates máy',
    image: 'phong-may-cadillac',
    alt: 'Máy Cadillac và Reformer ở Nuseva Phan Đăng Lưu',
    short: 'Tập trên Reformer, Cadillac, Chair. Hợp người mới và người đang có vấn đề về cột sống.',
    formats: ['1:1', '1:2'],
    studios: ['cong-quynh', 'phan-dang-luu'],
    level: 'Cơ bản đến nâng cao',
    duration: 60,
    priceFrom: '220k',
    priceNote: 'kèm đôi 1:2; kèm riêng 1:1 từ 420k',
    forWho: [
      'Người mới bắt đầu, chưa có nền tảng vận động',
      'Người cơ yếu, khó giữ đúng tư thế khi tự tập',
      'Người đang có vấn đề như thoát vị đĩa đệm, thoái hoá cột sống, lệch chậu',
    ],
    body: [
      'Máy Pilates dùng lò xo để vừa đỡ vừa cản chuyển động. Người mới nhờ vậy tập đúng biên độ ngay từ đầu, người đã quen thì tăng lò xo để tập nặng hơn.',
      'Mỗi buổi 60 phút theo giáo án huấn luyện viên viết riêng cho bạn, tập hoàn toàn trên máy chuyên dụng: Reformer, Wunda Chair, Ladder Barrel, Spine Corrector, Cadillac.',
    ],
    equipment: ['Reformer', 'Cadillac', 'Wunda Chair', 'Ladder Barrel', 'Spine Corrector'],
  },
  {
    slug: 'pilates-tham',
    name: 'Pilates thảm',
    image: 'lop-tham-nhom',
    alt: 'Lớp Pilates thảm ở Nuseva Phan Đăng Lưu',
    short: 'Không có máy đỡ, bạn tự giữ biên độ. Có bài còn khó hơn tập máy.',
    formats: ['1:1', '1:2', 'Nhóm'],
    studios: ['cong-quynh', 'phan-dang-luu'],
    level: 'Cơ bản đến nâng cao',
    duration: 60,
    priceFrom: '130k',
    priceNote: 'lớp nhóm',
    forWho: [
      'Hầu hết mọi người, kể cả người mới',
      'Người muốn tự kiểm soát cơ thể mà không cần máy hỗ trợ',
      'Người đã tập máy, muốn thêm thử thách',
    ],
    body: [
      'Không có máy hỗ trợ nên bạn phải tự kiểm soát biên độ và giữ thân người ổn định. Một số bài vì thế còn thử thách hơn khi tập trên máy.',
      'Huấn luyện viên vẫn kèm sát và chỉnh dáng từng động tác. Lớp kèm 1:1 và 1:2 có ở cả hai studio, lớp nhóm 4–6 người chỉ có ở Phan Đăng Lưu.',
    ],
    equipment: ['Thảm', 'Bóng', 'Gạch tập', 'Tạ tay'],
  },
  {
    slug: 'barre',
    name: 'Barre',
    image: 'lop-barre',
    alt: 'Lớp Barre tập với gióng ballet',
    short: 'Pilates, fitness và ballet trên gióng. Nhịp nhanh, đốt nhiều hơn.',
    formats: ['1:1', '1:2', 'Nhóm'],
    studios: ['phan-dang-luu'],
    level: 'Cơ bản đến nâng cao',
    duration: 60,
    priceFrom: '130k',
    priceNote: 'lớp nhóm',
    forWho: [
      'Người đã có nền tảng vận động',
      'Người muốn đốt calo nhiều hơn một buổi Pilates',
      'Người thích tập theo nhạc, theo nhịp',
    ],
    body: [
      'Barre lấy cảm hứng từ Pilates, fitness và ballet. Buổi tập 60 phút kết hợp tập thảm với gióng ballet.',
      'Chuyển động nhanh nhưng vẫn có kiểm soát, đi theo nhịp nhạc. Hợp với ai thích cảm giác vận động liên tục.',
    ],
    equipment: ['Gióng ballet', 'Thảm', 'Bóng', 'Tạ tay'],
  },
  {
    slug: 'yoga',
    name: 'Yoga',
    image: 'yoga-gian-tay',
    alt: 'Học viên tập yoga giãn tay ở Nuseva',
    short: 'Lớp căn bản, ít người, kèm sát từng động tác.',
    formats: ['1:1', '1:2', 'Nhóm'],
    studios: ['phan-dang-luu'],
    level: 'Cơ bản',
    duration: 60,
    priceFrom: '130k',
    priceNote: 'lớp nhóm',
    forWho: [
      'Người muốn cải thiện biên độ và độ dẻo',
      'Người mới bắt đầu Yoga',
      'Người muốn được kèm sát thay vì tập lớp đông',
    ],
    body: [
      'Hầu hết lớp Yoga ở Nuseva là lớp căn bản và ít người, nên huấn luyện viên theo được từng chuyển động của bạn.',
      'Phù hợp để cải thiện biên độ khớp và độ dẻo, đặc biệt khi bạn mới bắt đầu.',
    ],
    equipment: ['Thảm', 'Gạch tập', 'Dây'],
  },
  {
    slug: 'dance',
    name: 'Dance',
    image: 'lop-ta-guong',
    alt: 'Lớp vận động trước gương ở Nuseva',
    short: 'Ballet, Hiphop, Waacking, Popping cho người chưa từng dám nhảy.',
    formats: ['1:1', '1:2', 'Nhóm'],
    studios: ['phan-dang-luu'],
    level: 'Cơ bản',
    duration: 60,
    priceFrom: '130k',
    priceNote: 'lớp nhóm',
    forWho: [
      'Người thích nhảy nhưng chưa từng dám thử',
      'Người muốn vận động cùng âm nhạc',
      'Người muốn một buổi tập vui hơn cho tinh thần',
    ],
    body: [
      'Nuseva có 4 lớp nhảy cơ bản: Ballet, Hiphop, Waacking và Popping.',
      'Tập cùng âm nhạc là một cách nhẹ nhàng để vận động cả cơ thể lẫn tinh thần. Không cần biết nhảy trước.',
    ],
    styles: ['Ballet', 'Hiphop', 'Waacking', 'Popping'],
    equipment: ['Gương', 'Sàn gỗ'],
  },
];

export const prices = [
  { label: 'Kèm riêng 1:1', from: '420k', unit: 'mỗi buổi', note: 'Pilates máy, Pilates thảm và các lớp khác' },
  { label: 'Kèm đôi 1:2', from: '220k', unit: 'mỗi buổi', note: 'Đi cùng một người bạn' },
  { label: 'Lớp nhóm', from: '130k', unit: 'mỗi buổi', note: '4–6 người, ở Phan Đăng Lưu' },
];

export const policies = [
  { q: 'Buổi tập thử', a: 'Buổi lẻ đầu tiên được giảm 50%.' },
  { q: 'Đổi hoặc huỷ buổi', a: 'Báo trước ít nhất 1 tiếng với lớp 1:1 và 1:2, 2 tiếng với lớp nhóm.' },
  { q: 'Bảo lưu gói tập', a: 'Nhắn Nuseva để được gửi chính sách bảo lưu chi tiết.' },
];

export const faqs = [
  { q: 'Chưa tập thể thao bao giờ, người cứng, có tập được không?', a: 'Được. Lớp Pilates máy được làm ra cho đúng trường hợp này: lò xo đỡ bạn trong lúc cơ thể còn yếu, và huấn luyện viên chỉnh từng động tác. Buổi đầu luôn bắt đầu bằng việc kiểm tra thể trạng.' },
  { q: 'Buổi đầu tiên diễn ra thế nào?', a: 'Huấn luyện viên kiểm tra thể trạng, tư vấn lộ trình phù hợp, rồi cho bạn tập một bài toàn thân để xem cơ thể vận động thế nào. Buổi lẻ đầu tiên giảm 50%.' },
  { q: 'Đi tập cần mặc gì, mang gì?', a: 'Đồ thể thao hoặc quần áo ôm người, dễ vận động. Nên mang theo vớ chống trượt.' },
  { q: 'Lớp nào có ở studio nào?', a: 'Pilates máy và Pilates thảm (1:1, 1:2) có ở cả hai studio. Barre, Yoga, Dance và mọi lớp nhóm chỉ có ở Phan Đăng Lưu.' },
  { q: 'Muốn đổi hoặc huỷ buổi thì sao?', a: 'Báo trước ít nhất 1 tiếng với lớp 1:1 và 1:2, 2 tiếng với lớp nhóm.' },
  { q: 'Lớp nhóm có lịch cố định không?', a: 'Hiện lớp nhóm chưa có lịch cố định theo tuần. Nhắn Zalo để Nuseva xếp lớp theo giờ bạn rảnh.' },
];

export const nav = [
  { href: 'lop-hoc', label: 'Lớp học' },
  { href: 'studio', label: 'Studio' },
  { href: 'bang-gia', label: 'Bảng giá' },
  { href: 'gioi-thieu', label: 'Về Nuseva' },
  { href: 'tin-tuc', label: 'Blog' },
  { href: 'lien-he', label: 'Liên hệ' },
];
