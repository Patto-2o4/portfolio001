# Hướng Dẫn Chỉnh Sửa Website Portfolio 3D - Tiếng Việt

## Giới Thiệu

Chào bạn! Đây là hướng dẫn chi tiết để bạn có thể chỉnh sửa website Portfolio 3D mà không cần biết code. Website này được xây dựng theo **hệ thống Module**, tức là chia nhỏ thành các phần độc lập, dễ bảo trì.

---

## 1. Cấu Trúc Thư Mục (Folder Structure)

```
portfolio-3d-modular/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── modules/          ← Các module chính của website
│   │   │   │   ├── Hero.tsx      ← Phần tiêu đề chính
│   │   │   │   ├── Clients.tsx   ← Dải logo khách hàng
│   │   │   │   ├── Gallery.tsx   ← Lưới tác phẩm
│   │   │   │   ├── About.tsx     ← Giới thiệu bản thân
│   │   │   │   ├── Services.tsx  ← Dịch vụ cung cấp
│   │   │   │   ├── Projects.tsx  ← Dự án tiêu biểu
│   │   │   │   ├── Testimonials.tsx ← Đánh giá khách hàng
│   │   │   │   ├── Contact.tsx   ← Form liên hệ
│   │   │   │   └── Footer.tsx    ← Chân trang
│   │   ├── pages/
│   │   │   └── Home.tsx          ← Trang chủ (ghép tất cả module)
│   │   └── index.css             ← Màu sắc, font, style toàn cục
│   └── index.html                ← File HTML chính
└── ARCHITECTURE.md               ← Tài liệu kiến trúc
```

---

## 2. Các Thay Đổi Phổ Biến

### A. Thay Đổi Tên, Email, Địa Chỉ

#### Bước 1: Mở file Hero.tsx
- Đường dẫn: `client/src/components/modules/Hero.tsx`
- Tìm dòng: `CONTACT ME` → Thay bằng tên của bạn
- Tìm dòng: `mailto:alex@example.com` → Thay bằng email của bạn

#### Bước 2: Mở file Contact.tsx
- Đường dẫn: `client/src/components/modules/Contact.tsx`
- Tìm dòng: `alex@example.com` → Thay bằng email của bạn
- Tìm dòng: `+1 (234) 567-890` → Thay bằng số điện thoại của bạn
- Tìm dòng: `San Francisco, CA` → Thay bằng địa chỉ của bạn

#### Bước 3: Mở file Footer.tsx
- Đường dẫn: `client/src/components/modules/Footer.tsx`
- Tìm dòng: `ALEX TURNER` → Thay bằng tên của bạn
- Tìm dòng: `alex@example.com` → Thay bằng email của bạn

### B. Thay Đổi Màu Sắc

#### Bước 1: Mở file index.css
- Đường dẫn: `client/src/index.css`
- Tìm dòng: `--primary: #FF006E;` (Màu hồng nhấn)
- Thay bằng màu mới:
  - Xanh dương: `#0066FF`
  - Xanh lá: `#00FF66`
  - Vàng: `#FFFF00`
  - Tím: `#9933FF`

**Ví dụ:**
```css
--primary: #0066FF;  /* Thay từ hồng sang xanh dương */
```

### C. Thêm Dự Án Mới vào Gallery

#### Bước 1: Mở file Gallery.tsx
- Đường dẫn: `client/src/components/modules/Gallery.tsx`
- Tìm mảng `projects` (khoảng dòng 2-20)

#### Bước 2: Thêm dự án mới
```javascript
// Tìm dòng này
const projects = [
  { id: 1, title: "3D Character Design", ... },
  { id: 2, title: "Product Visualization", ... },
  // Thêm dòng này
  {
    id: 7,
    title: "Tên dự án của bạn",
    category: "Loại dự án",
    image: "X",  // Ký tự đại diện
    description: "Mô tả ngắn về dự án",
  }
];
```

### D. Thêm Dịch Vụ Mới

#### Bước 1: Mở file Services.tsx
- Đường dẫn: `client/src/components/modules/Services.tsx`
- Tìm mảng `services` (khoảng dòng 2-20)

#### Bước 2: Thêm dịch vụ mới
```javascript
const services = [
  { id: 1, number: "01", title: "3D Modeling", ... },
  // Thêm dòng này
  {
    id: 5,
    number: "05",
    title: "Tên dịch vụ mới",
    description: "Mô tả chi tiết về dịch vụ",
    icon: "N",  // Ký tự đại diện
  }
];
```

### E. Thêm Đánh Giá Khách Hàng

#### Bước 1: Mở file Testimonials.tsx
- Đường dẫn: `client/src/components/modules/Testimonials.tsx`
- Tìm mảng `testimonials` (khoảng dòng 2-30)

#### Bước 2: Thêm đánh giá mới
```javascript
const testimonials = [
  { id: 1, name: "Sarah Johnson", ... },
  // Thêm dòng này
  {
    id: 5,
    name: "Tên khách hàng",
    position: "Chức vụ, Công ty",
    avatar: "T",  // Ký tự đại diện
    rating: 5,
    content: "Nội dung đánh giá của khách hàng",
  }
];
```

---

## 3. Thay Đổi Nội Dung Text

### A. Thay Đổi Tiêu Đề Hero

Mở file `Hero.tsx` và tìm:
```javascript
<h1>
  HI, I'M
  <br />
  <span>ALEX</span>
</h1>
```

Thay bằng:
```javascript
<h1>
  XIN CHÀO, TÔI LÀ
  <br />
  <span>TÊN CỦA BẠN</span>
</h1>
```

### B. Thay Đổi Mô Tả

Mở file `Hero.tsx` và tìm:
```javascript
<p>
  I'm a 3D Designer & Creative Technologist...
</p>
```

Thay bằng mô tả của bạn.

### C. Thay Đổi Tiêu Đề Section

Mở file bất kỳ (Gallery.tsx, About.tsx, v.v.) và tìm:
```javascript
<h2 className="section-title">Featured Works</h2>
```

Thay bằng tiêu đề mới.

---

## 4. Thay Đổi Kích Thước, Khoảng Cách

### A. Thay Đổi Kích Thước Font

Mở file `index.css` và tìm:
```css
h1 {
  @apply text-5xl md:text-6xl font-bold;
}
```

Thay đổi:
- `text-5xl` = Kích thước 48px trên mobile
- `text-6xl` = Kích thước 60px trên desktop
- Các giá trị khác: `text-3xl`, `text-4xl`, `text-7xl`, v.v.

### B. Thay Đổi Khoảng Cách (Padding/Margin)

Mở file module và tìm:
```javascript
<div className="p-8 gap-6">
```

Thay đổi:
- `p-8` = Padding 32px (p = padding)
- `gap-6` = Khoảng cách 24px (gap = khoảng cách giữa item)
- Các giá trị: `p-4`, `p-6`, `p-12`, v.v.

---

## 5. Thêm Social Media Links

### Bước 1: Mở file Footer.tsx
- Tìm phần "Follow Me"

### Bước 2: Thêm link mới
```javascript
<a href="https://www.instagram.com/yourprofile">
  <button>Instagram</button>
</a>
```

Thay `https://www.instagram.com/yourprofile` bằng link của bạn.

---

## 6. Ẩn hoặc Xóa Module

### Ẩn Module (Không xóa)

Mở file `Home.tsx` và thêm dấu `//` trước module:
```javascript
// <Gallery />  ← Module này sẽ bị ẩn
<About />
```

### Xóa Module (Xóa hoàn toàn)

Mở file `Home.tsx` và xóa dòng:
```javascript
<Gallery />  ← Xóa dòng này
```

---

## 7. Thay Đổi Thứ Tự Module

Mở file `Home.tsx` và di chuyển các module:

**Trước:**
```javascript
<Hero />
<Clients />
<Gallery />
<About />
```

**Sau:**
```javascript
<Hero />
<About />      ← Di chuyển lên
<Clients />
<Gallery />
```

---

## 8. Các Lỗi Phổ Biến và Cách Sửa

### Lỗi 1: Quên dấu ngoặc
**Lỗi:** `<div className="...">` (thiếu dấu `>`)
**Sửa:** `<div className="...">` (thêm dấu `>`)

### Lỗi 2: Quên dấu ngoặc kép
**Lỗi:** `href=https://example.com` (thiếu dấu `"`)
**Sửa:** `href="https://example.com"` (thêm dấu `"`)

### Lỗi 3: Thay đổi tên biến
**Lỗi:** Đổi tên `projects` thành `myProjects`
**Sửa:** Không đổi tên biến, chỉ thay đổi nội dung

### Lỗi 4: Xóa dấu phẩy
**Lỗi:** 
```javascript
{ id: 1, title: "..." }  ← Thiếu dấu phẩy
{ id: 2, title: "..." }
```
**Sửa:**
```javascript
{ id: 1, title: "..." },  ← Thêm dấu phẩy
{ id: 2, title: "..." }
```

---

## 9. Cách Kiểm Tra Thay Đổi

### Bước 1: Lưu file
- Nhấn `Ctrl+S` (Windows) hoặc `Cmd+S` (Mac)

### Bước 2: Xem trước
- Website sẽ tự động refresh trong vòng 2-3 giây
- Nếu có lỗi, bạn sẽ thấy thông báo lỗi đỏ

### Bước 3: Kiểm tra console
- Nhấn `F12` để mở Developer Tools
- Chọn tab "Console" để xem lỗi chi tiết

---

## 10. Danh Sách Các File Quan Trọng

| File | Mục Đích | Chỉnh Sửa Để |
|------|---------|------------|
| `Hero.tsx` | Phần tiêu đề chính | Tên, email, mô tả |
| `Clients.tsx` | Logo khách hàng | Thêm/xóa khách hàng |
| `Gallery.tsx` | Lưới tác phẩm | Thêm/xóa dự án |
| `About.tsx` | Giới thiệu | Mô tả, kỹ năng |
| `Services.tsx` | Dịch vụ | Thêm/xóa dịch vụ |
| `Projects.tsx` | Dự án tiêu biểu | Thêm/xóa dự án |
| `Testimonials.tsx` | Đánh giá | Thêm/xóa đánh giá |
| `Contact.tsx` | Form liên hệ | Email, số điện thoại |
| `Footer.tsx` | Chân trang | Tên, email, link |
| `index.css` | Màu sắc, font | Thay đổi theme |
| `Home.tsx` | Trang chủ | Thứ tự, ẩn module |

---

## 11. Mẹo Hữu Ích

### Mẹo 1: Tìm & Thay Thế Nhanh
- Nhấn `Ctrl+H` (Windows) hoặc `Cmd+H` (Mac)
- Tìm: `alex@example.com`
- Thay thế: `youremail@example.com`
- Nhấn "Replace All"

### Mẹo 2: Backup File
- Trước khi chỉnh sửa, sao chép file gốc
- Đổi tên: `Hero.tsx` → `Hero.backup.tsx`
- Nếu sai, bạn có thể khôi phục

### Mẹo 3: Xem Lỗi Nhanh
- Nhấn `Ctrl+Shift+M` để xem responsive design
- Kiểm tra website trên mobile

### Mẹo 4: Undo (Hoàn tác)
- Nhấn `Ctrl+Z` (Windows) hoặc `Cmd+Z` (Mac)
- Hoàn tác thay đổi cuối cùng

---

## 12. Hỗ Trợ Thêm

Nếu bạn gặp vấn đề:

1. **Kiểm tra console (F12 → Console)** để xem lỗi chi tiết
2. **Đảm bảo tất cả dấu ngoặc đóng đúng** `{}`, `[]`, `()`
3. **Kiểm tra URL hình ảnh có đúng không**
4. **Thử undo (Ctrl+Z)** nếu sai

---

## Chúc Bạn Thành Công!

Website của bạn đã sẵn sàng để chỉnh sửa. Hãy thử thay đổi một vài thứ và xem kết quả. Nếu có bất kỳ câu hỏi nào, hãy tham khảo file `ARCHITECTURE.md` để hiểu rõ hơn về cấu trúc.

**Happy Editing! 🎉**
