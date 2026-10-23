# Nuseva Studio — website

Web tĩnh làm bằng [Astro](https://astro.build), chạy trên GitHub Pages.

## Sửa nội dung

- Thông tin chung (SĐT, giờ, địa chỉ, lớp học, giá, FAQ): `src/data/site.js`
- Bài blog: `src/content/blog/*.md` (thêm file mới là có bài mới, tên file = đường dẫn)
- Ảnh: `src/assets/img/` (tên file dùng làm mã ảnh trong `site.js`)
- Đo lường: điền `ga4` và `metaPixel` trong `src/data/site.js`

## Chạy thử trên máy

```
npm install
npm run dev
```

## Deploy

Mỗi lần push lên nhánh `main`, GitHub Actions tự build và đưa lên GitHub Pages.

Lần đầu: vào repo > Settings > Pages > Source: chọn **GitHub Actions**.

### Chuyển tên miền nusevastudio.com sang web mới

1. (Đã làm) Workflow build cho tên miền nusevastudio.com.
2. Repo > Settings > Pages > Custom domain: nhập `nusevastudio.com`.
3. Ở trang quản trị tên miền (Nasani), sửa DNS:
   - 4 bản ghi `A` cho `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - Bản ghi `CNAME` cho `www` trỏ về `<tên-tài-khoản>.github.io`
4. Chờ DNS cập nhật (vài phút đến vài giờ), rồi bật **Enforce HTTPS**.

Nếu đang dùng email theo tên miền, giữ nguyên các bản ghi `MX` khi sửa DNS.
