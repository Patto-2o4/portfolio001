# 📐 Kiến Trúc Website Portfolio 3D - Hướng Dẫn Chi Tiết Bằng Tiếng Việt

## 🎯 Tổng Quan Dự Án

Website này được xây dựng theo **hệ thống Module**, tức là chia nhỏ website thành các phần độc lập, dễ bảo trì và chỉnh sửa. Mỗi phần được gọi là một **Module** hoặc **Component**.

---

## 📁 Cấu Trúc Thư Mục (Folder Structure)

```
portfolio-3d-modular/
├── client/
│   ├── src/
│   │   ├── components/          ← Các thành phần UI tái sử dụng
│   │   │   ├── modules/         ← Các module chính của website
│   │   │   │   ├── Hero.tsx     ← Phần tiêu đề chính
│   │   │   │   ├── Clients.tsx  ← Dải logo khách hàng
│   │   │   │   ├── Gallery.tsx  ← Lưới tác phẩm
│   │   │   │   ├── About.tsx    ← Phần giới thiệu
│   │   │   │   ├── Services.tsx ← Danh sách dịch vụ
│   │   │   │   ├── Projects.tsx ← Dự án tiêu biểu
│   │   │   │   ├── Testimonials.tsx ← Đánh giá khách hàng
│   │   │   │   ├── Contact.tsx  ← Form liên hệ
│   │   │   │   └── Footer.tsx   ← Chân trang
│   │   │   └── ui/              ← Các thành phần UI cơ bản (Button, Card, v.v.)
│   │   ├── pages/
│   │   │   └── Home.tsx         ← Trang chủ (ghép tất cả module)
│   │   ├── App.tsx              ← Cấu hình ứng dụng chính
│   │   ├── index.css            ← Các style toàn cục (màu sắc, font)
│   │   └── main.tsx             ← Điểm khởi động
│   ├── index.html               ← File HTML chính
│   └── public/                  ← Các file tĩnh nhỏ (favicon, v.v.)
└── package.json                 ← Danh sách các thư viện sử dụng
```

---

## 🎨 Hệ Thống Thiết Kế (Design System)

### 1. **Bảng Màu (Color Palette)**

| Tên Màu | Mã Hex | Mục Đích | Ví Dụ |
|---------|--------|---------|-------|
| **Nền chính** | `#000000` | Nền trang web | Toàn bộ background |
| **Màu nhấn (Accent)** | `#FF006E` hoặc `#FF1493` | Nút bấm, link, điểm nhấn | Nút "CONTACT ME", hover effects |
| **Chữ chính** | `#FFFFFF` | Tiêu đề, nội dung quan trọng | Heading, tên dự án |
| **Chữ phụ** | `#A0A0A0` | Mô tả, nội dung thứ yếu | Mô tả ngắn, meta info |
| **Viền** | `#1A1A1A` | Đường viền, phân chia | Border của card |

### 2. **Typography (Kiểu Chữ)**

- **Tiêu đề lớn (H1):** Font size 48-64px, Font weight 700 (Bold)
- **Tiêu đề vừa (H2):** Font size 32-40px, Font weight 600 (Semi-bold)
- **Tiêu đề nhỏ (H3):** Font size 24-28px, Font weight 600
- **Nội dung (Body):** Font size 16px, Font weight 400 (Regular)
- **Chữ nhỏ (Small):** Font size 12-14px, Font weight 400

### 3. **Khoảng Cách (Spacing)**

- **Padding trong component:** 16px, 24px, 32px
- **Margin giữa các section:** 48px, 64px, 80px
- **Gap giữa các item trong lưới:** 16px, 24px

---

## 🧩 Các Module Chính (Main Components)

### **Module 1: Hero Section** (`Hero.tsx`)
**Mục đích:** Phần tiêu đề chính, tạo ấn tượng đầu tiên

**Thành phần:**
- Navigation Bar (Menu: About, Customers, Projects, Contact)
- Headline: "HI, I'M ALEX"
- Sub-headline: Mô tả ngắn về vai trò
- Visual: Nhân vật 3D hoặc hình ảnh lớn
- CTA Button: "CONTACT ME" (màu hồng)

**Cách chỉnh sửa:**
- Thay đổi text: Tìm `"HI, I'M ALEX"` → thay bằng tên của bạn
- Thay đổi màu nút: Tìm `className="bg-pink-600"` → đổi thành màu khác
- Thay đổi hình ảnh: Tìm `<img src="..."` → thay đường dẫn hình ảnh mới

---

### **Module 2: Clients** (`Clients.tsx`)
**Mục đích:** Hiển thị logo các công ty đã hợp tác

**Thành phần:**
- Dải logo chạy ngang (Marquee)
- Các logo công ty: Fractal, West Creative, SCALER, v.v.

**Cách chỉnh sửa:**
- Thêm logo mới: Thêm `<img src="..." alt="..." />` vào danh sách
- Xóa logo: Xóa dòng `<img>` tương ứng
- Thay đổi tốc độ chạy: Tìm `duration="20s"` → đổi thành giá trị khác (lớn hơn = chậm hơn)

---

### **Module 3: Gallery** (`Gallery.tsx`)
**Mục đích:** Hiển thị lưới tác phẩm 3D

**Thành phần:**
- Lưới (Grid) các thẻ dự án
- Mỗi thẻ gồm: Hình ảnh, tiêu đề, mô tả

**Cách chỉnh sửa:**
- Thêm dự án mới: Thêm object mới vào mảng `projects`
- Xóa dự án: Xóa object từ mảng
- Thay đổi số cột: Tìm `grid-cols-3` → đổi thành `grid-cols-2` (2 cột) hoặc `grid-cols-4` (4 cột)

---

### **Module 4: About** (`About.tsx`)
**Mục đích:** Phần giới thiệu bản thân

**Thành phần:**
- Tiêu đề "ABOUT ME"
- Đoạn văn bản mô tả
- Các icon 3D bay bổng (Trái tim, bông hoa, viên kim cương)

**Cách chỉnh sửa:**
- Thay đổi text: Tìm đoạn văn → chỉnh sửa nội dung
- Thêm icon: Thêm `<Icon name="..." />` vào danh sách
- Thay đổi vị trí icon: Chỉnh sửa `top`, `left`, `right` trong CSS

---

### **Module 5: Services** (`Services.tsx`)
**Mục đích:** Liệt kê các dịch vụ cung cấp

**Thành phần:**
- Danh sách đánh số (01, 02, 03...)
- Mỗi hạng mục: Tiêu đề + Mô tả

**Cách chỉnh sửa:**
- Thêm dịch vụ: Thêm object mới vào mảng `services`
- Xóa dịch vụ: Xóa object từ mảng
- Thay đổi tiêu đề/mô tả: Chỉnh sửa `title` và `description`

---

### **Module 6: Featured Projects** (`Projects.tsx`)
**Mục đích:** Hiển thị các dự án tiêu biểu chi tiết

**Thành phần:**
- Danh sách dự án theo hàng
- Mỗi hàng: Số thứ tự, Tên, Hình ảnh, Nút "LIVE PROJECT"

**Cách chỉnh sửa:**
- Thêm dự án: Thêm object mới vào mảng `projects`
- Thay đổi hình ảnh: Cập nhật `image` URL
- Thay đổi link: Cập nhật `liveLink` URL

---

### **Module 7: Testimonials** (`Testimonials.tsx`)
**Mục đích:** Hiển thị đánh giá từ khách hàng

**Thành phần:**
- Lưới các thẻ đánh giá
- Mỗi thẻ: Ảnh đại diện, Tên, Chức vụ, Nội dung

**Cách chỉnh sửa:**
- Thêm đánh giá: Thêm object mới vào mảng `testimonials`
- Xóa đánh giá: Xóa object từ mảng
- Thay đổi ảnh: Cập nhật `avatar` URL

---

### **Module 8: Contact** (`Contact.tsx`)
**Mục đích:** Form liên hệ với khách hàng

**Thành phần:**
- Tiêu đề "LET'S GET IN TOUCH"
- Bên trái: Email, Icon 3D
- Bên phải: Form (Name, Email, Message)

**Cách chỉnh sửa:**
- Thay đổi email: Tìm `mailto:...` → thay bằng email của bạn
- Thay đổi placeholder text: Chỉnh sửa `placeholder="..."`
- Thay đổi hành động khi submit: Tìm `onSubmit` handler

---

### **Module 9: Footer** (`Footer.tsx`)
**Mục đích:** Chân trang website

**Thành phần:**
- Tên thương hiệu lớn
- Cột Social (Instagram, Behance, LinkedIn)
- Cột Contact (Email, Địa chỉ)
- Hình khối hình học trang trí

**Cách chỉnh sửa:**
- Thay đổi tên: Tìm "ALEX TURNER" → thay bằng tên của bạn
- Thêm social link: Thêm `<a href="...">` vào danh sách
- Thay đổi địa chỉ: Chỉnh sửa nội dung địa chỉ

---

## 🔧 Cách Chỉnh Sửa Chung (General Editing Guide)

### **1. Thay đổi Màu Sắc**

**Tìm file:** `client/src/index.css`

**Cách thay đổi:**
```css
/* Tìm dòng này */
--primary: #FF006E;  /* Màu hồng nhấn */

/* Thay bằng màu mới */
--primary: #00D9FF;  /* Màu xanh dương */
```

### **2. Thay đổi Font Chữ**

**Tìm file:** `client/index.html`

**Cách thay đổi:**
```html
<!-- Tìm dòng này (nếu có) -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />

<!-- Thay bằng font mới từ Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
```

### **3. Thêm Nội Dung Mới**

**Ví dụ: Thêm dự án mới vào Gallery**

Tìm file: `client/src/components/modules/Gallery.tsx`

```tsx
const projects = [
  {
    id: 1,
    title: "Dự án cũ",
    image: "https://...",
    description: "Mô tả"
  },
  // ← Thêm dòng này
  {
    id: 2,
    title: "Dự án mới của bạn",
    image: "https://link-hình-ảnh-mới",
    description: "Mô tả dự án mới"
  }
];
```

### **4. Thay đổi Kích Thước, Khoảng Cách**

**Tìm file:** `client/src/components/modules/[ModuleName].tsx`

**Cách thay đổi:**
```tsx
// Tìm className như này
<div className="p-8 gap-6">

// Thay đổi:
// p-8 = padding 32px → p-4 = padding 16px (nhỏ hơn)
// gap-6 = khoảng cách 24px → gap-8 = khoảng cách 32px (lớn hơn)
```

---

## 📝 Danh Sách Các Tệp Quan Trọng

| Tệp | Mục Đích | Chỉnh Sửa Để |
|-----|---------|------------|
| `client/src/pages/Home.tsx` | Trang chủ (ghép tất cả module) | Thêm/xóa module, thay đổi thứ tự |
| `client/src/index.css` | Style toàn cục | Thay đổi màu sắc, font, spacing |
| `client/index.html` | HTML chính | Thêm font, meta tags, v.v. |
| `client/src/components/modules/*.tsx` | Các module chính | Chỉnh sửa nội dung từng module |

---

## 🚀 Quy Trình Chỉnh Sửa Nhanh (Quick Edit Guide)

### **Bước 1:** Mở file cần chỉnh sửa
### **Bước 2:** Tìm đoạn code cần thay đổi
### **Bước 3:** Thay đổi giá trị
### **Bước 4:** Lưu file (Ctrl+S)
### **Bước 5:** Xem trước trên trình duyệt (tự động refresh)

---

## ⚠️ Những Điều Cần Lưu Ý

1. **Không xóa dấu ngoặc:** `{}`, `[]`, `()` - Chúng rất quan trọng!
2. **Giữ nguyên cấu trúc:** Không thay đổi tên biến, hàm trừ khi bạn biết chắc
3. **Sao lưu trước:** Trước khi chỉnh sửa, hãy sao lưu file gốc
4. **Kiểm tra lỗi:** Nếu website không hiển thị, hãy xem console (F12 → Console)

---

## 💡 Mẹo Hữu Ích

- **Tìm & Thay thế:** Dùng Ctrl+H để tìm và thay thế nhanh
- **Xem trước:** Nhấn F12 để mở Developer Tools, xem lỗi nếu có
- **Responsive:** Nhấn Ctrl+Shift+M để xem giao diện trên mobile
- **Undo:** Nhấn Ctrl+Z để hoàn tác nếu sai

---

## 📞 Hỗ Trợ

Nếu bạn gặp vấn đề:
1. Kiểm tra console (F12 → Console) để xem lỗi
2. Đảm bảo tất cả dấu ngoặc đóng đúng
3. Kiểm tra URL hình ảnh có đúng không
4. Thử undo (Ctrl+Z) nếu sai

---

**Chúc bạn chỉnh sửa thành công! 🎉**
