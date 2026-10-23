# Sao lưu trước khi chuyển nusevastudio.com sang web mới

Ngày sao lưu: 23/10/2026

## Web cũ

- Web cũ do Nasani làm, chạy trên hosting Nasani, IP máy chủ **210.2.87.25**.
- Mã nguồn web cũ vẫn nằm nguyên trên hosting Nasani cho đến khi hết hợp đồng. Chuyển tên miền **không xoá** web cũ.
- Bản sao nội dung (17 trang HTML + 40 ảnh) đã tải về máy: `nuseva-web-cu-backup-2026-10-23.json` (thư mục Downloads).
- File xuất DNS từ Nasani: bấm "Xuất tệp CSV" ở tab DNS (cũng nằm trong Downloads).

## Bản ghi DNS cũ (trước khi đổi)

| # | Host | Loại | Giá trị | TTL | Ưu tiên |
|---|---|---|---|---|---|
| 1 | _dmarc | TXT | v=DMARC1; p=reject; aspf=s; adkim=s; pct=100; | 3600 | |
| 2 | x._domainkey | TXT | v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMI… (khoá dài, không đổi) | 3600 | |
| 3 | @ | TXT | v=spf1 a mx ip4:210.2.87.25 -all | 3600 | |
| 4 | @ | MX | mail.nusevastudio.com | 3600 | 10 |
| 5 | mail | A | 210.2.87.25 | 3600 | |
| 6 | www | CNAME | nusevastudio.com | 3600 | |
| 7 | @ | A | 210.2.87.25 | 3600 | |

Nameserver: NS1/NS2/NS3.NASANI.VN. Nhà đăng ký: P.A. Viet Nam. Hết hạn: 21/04/2027.

## Những gì đã đổi để chạy web mới

- Bản ghi 7 (`@` A): 210.2.87.25 → 4 bản ghi A: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- Bản ghi 6 (`www` CNAME): nusevastudio.com → nusevastudio-prog.github.io
- Các bản ghi 1–5 (email) **giữ nguyên**.

## Cách quay về web cũ (mất khoảng 5–60 phút)

1. Vào domain.nasani.vn > DNS.
2. Xoá 4 bản ghi `@` A trỏ về 185.199.x.153, thêm lại 1 bản ghi `@` A = **210.2.87.25**.
3. Sửa `www` CNAME về **nusevastudio.com**.
4. Lưu cấu hình. Chờ DNS cập nhật.

Điều kiện: hosting Nasani còn hạn. Nếu hosting đã hết hạn thì không quay về được bằng cách này.

## Trạng thái lúc chuyển (23/10/2026)

DNS sau khi lưu trên Nasani (10 bản ghi):

| Host | Loại | Giá trị | TTL |
|---|---|---|---|
| @ | A | 185.199.108.153 / .109 / .110 / .111 | 3600 |
| www | CNAME | nusevastudio-prog.github.io | 3600 |
| _dmarc | TXT | v=DMARC1; p=reject; aspf=s; adkim=s; pct=100; | 3600 |
| x._domainkey | TXT | DKIM (giữ nguyên) | 3600 |
| @ | TXT | v=spf1 a mx ip4:210.2.87.25 -all | 3600 |
| @ | MX | mr.dotvndns.vn (ưu tiên 10) | 300 |
| mail | A | 210.2.87.25 | 3600 |

Ghi chú: bản ghi MX đổi sang `mr.dotvndns.vn` (TTL 300) do người khác chỉnh trước đó, không phải lúc chuyển web. Phần mail không bị đụng tới.
