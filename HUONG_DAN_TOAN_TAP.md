# 📚 Hướng Dẫn Toàn Tập - Portfolio 3D Website

## 📖 Mục Lục

1. [Cấu Trúc File](#cấu-trúc-file)
2. [Hướng Dẫn Chỉnh Sửa Từng Module](#hướng-dẫn-chỉnh-sửa-từng-module)
3. [Cấu Hình EmailJS](#cấu-hình-emailjs)
4. [Cấu Hình Discord Popup](#cấu-hình-discord-popup)
5. [Cấu Hình Language Switcher](#cấu-hình-language-switcher)
6. [Cấu Hình Spline 3D](#cấu-hình-spline-3d)
7. [Thay Đổi Màu Sắc](#thay-đổi-màu-sắc)
8. [Troubleshooting](#troubleshooting)

---

## 🗂️ Cấu Trúc File

```
portfolio-3d-modular/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── modules/           ← Các module chính
│   │   │   │   ├── Hero.tsx       ← Phần tiêu đề chính
│   │   │   │   ├── Clients.tsx    ← Dải logo khách hàng
│   │   │   │   ├── Gallery.tsx    ← Lưới tác phẩm
│   │   │   │   ├── About.tsx      ← Giới thiệu bản thân
│   │   │   │   ├── Services.tsx   ← Dịch vụ cung cấp
│   │   │   │   ├── Projects.tsx   ← Dự án tiêu biểu
│   │   │   │   ├── Testimonials.tsx ← Đánh giá khách
│   │   │   │   ├── Contact.tsx    ← Form liên hệ
│   │   │   │   └── Footer.tsx     ← Chân trang
│   │   │   ├── AnimatedSection.tsx ← Animation wrapper
│   │   │   ├── AnimatedItem.tsx   ← Animation item
│   │   │   ├── SplineViewer.tsx   ← Spline 3D viewer
│   │   │   ├── SplineInteractive.tsx ← Spline tương tác
│   │   │   ├── DiscordPopup.tsx   ← Discord popup
│   │   │   ├── LanguageSwitcher.tsx ← Chuyển ngôn ngữ
│   │   │   ├── CaseStudiesModal.tsx ← Modal chi tiết dự án
│   │   │   └── ui/               ← shadcn/ui components
│   │   ├── pages/
│   │   │   ├── Home.tsx          ← Trang chủ (ghép các module)
│   │   │   └── NotFound.tsx      ← Trang 404
│   │   ├── App.tsx               ← App chính
│   │   ├── index.css             ← CSS global + color scheme
│   │   └── main.tsx              ← Entry point
│   ├── index.html                ← HTML chính
│   └── public/                   ← Favicon, robots.txt
├── server/                       ← Backend (không sửa)
├── shared/                       ← Shared types
├── package.json                  ← Dependencies
└── HUONG_DAN_*.md               ← Các hướng dẫn

```

### 📌 Các File Quan Trọng Để Chỉnh Sửa

| File | Mục Đích | Độ Khó |
|------|---------|--------|
| `client/src/index.css` | Màu sắc, font, theme | ⭐ Dễ |
| `client/src/components/modules/*.tsx` | Nội dung từng module | ⭐ Dễ |
| `client/src/components/DiscordPopup.tsx` | Cấu hình Discord | ⭐ Dễ |
| `client/src/components/LanguageSwitcher.tsx` | Ngôn ngữ | ⭐⭐ Trung bình |
| `client/src/components/modules/Contact.tsx` | EmailJS config | ⭐⭐ Trung bình |
| `client/src/components/CaseStudiesModal.tsx` | Chi tiết dự án | ⭐⭐ Trung bình |

---

## 🎨 Hướng Dẫn Chỉnh Sửa Từng Module

### 1. Hero Section (`client/src/components/modules/Hero.tsx`)

**Thay đổi gì:**
- Tên (ALEX)
- Mô tả
- Nút CTA
- Spline 3D URL

**Cách sửa:**

```javascript
// Dòng 21: Thay Spline URL
const SPLINE_URL = "https://prod.spline.design/YOUR_ID/scene";

// Dòng 62: Thay tên
ALEX<span className="text-[#6366F1]">.</span>

// Dòng 102-110: Thay tiêu đề và mô tả
<h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
  Hi, I'm ALEX  {/* Thay tên ở đây */}
</h1>

<p className="text-xl text-gray-400 mb-8 max-w-2xl">
  3D Designer & Creative Developer  {/* Thay mô tả ở đây */}
</p>
```

### 2. About Section (`client/src/components/modules/About.tsx`)

**Thay đổi gì:**
- Ảnh đại diện (emoji)
- Mô tả bản thân
- Kỹ năng

**Cách sửa:**

```javascript
// Dòng 42: Thay emoji đại diện
<div className="text-7xl mb-4">P</div>  {/* Thay P bằng emoji khác */}

// Dòng 50-60: Thay mô tả
<h3 className="text-3xl font-bold text-white mb-4">
  About Me  {/* Thay tiêu đề */}
</h3>

<p className="text-lg text-gray-300 mb-6 leading-relaxed">
  I'm a passionate 3D designer...  {/* Thay mô tả */}
</p>

// Dòng 73-79: Thay kỹ năng
{[
  "3D Modeling",      {/* Thay kỹ năng */}
  "3D Animation",
  "Product Design",
  "Motion Graphics",
  "VR/AR Development",
  "UI/UX Design",
].map((skill, index) => (
```

### 3. Services Section (`client/src/components/modules/Services.tsx`)

**Thay đổi gì:**
- Tên dịch vụ
- Mô tả dịch vụ
- Icon

**Cách sửa:**

```javascript
// Dòng 5-30: Thay dịch vụ
const services = [
  {
    icon: "🎨",  {/* Thay icon */}
    title: "3D Modeling",  {/* Thay tên dịch vụ */}
    description: "Create detailed 3D models...",  {/* Thay mô tả */}
  },
  // Thêm dịch vụ khác...
];
```

### 4. Projects Section (`client/src/components/modules/Projects.tsx`)

**Thay đổi gì:**
- Tên dự án
- Mô tả dự án
- Chi tiết dự án (Challenge, Solution, Results)
- Tools sử dụng

**Cách sửa:**

```javascript
// Dòng 11-35: Thay dự án
const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "Luxury Watch Visualization",  {/* Thay tên dự án */}
    client: "Premium Timepieces Inc.",  {/* Thay tên khách hàng */}
    description: "Create detailed 3D visualization...",  {/* Thay mô tả */}
    image: "W",  {/* Thay emoji */}
    category: "Product Design",  {/* Thay category */}
    fullDescription: "Tao chi tiet 3D visualization...",  {/* Thay mô tả đầy đủ */}
    challenge: "Thach thuc chinh la...",  {/* Thay thách thức */}
    solution: "Su dung Blender...",  {/* Thay giải pháp */}
    results: "Doanh so ban hang tang...",  {/* Thay kết quả */}
    tools: ["Blender", "Spline", "Substance Painter"],  {/* Thay tools */}
    year: "2024",  {/* Thay năm */}
  },
];
```

### 5. Contact Section (`client/src/components/modules/Contact.tsx`)

**Thay đổi gì:**
- Email
- Số điện thoại
- Địa chỉ
- Social links

**Cách sửa:**

```javascript
// Dòng 62-67: Thay email
<a href="mailto:Patto2k4@gmail.com">
  Patto2k4@gmail.com  {/* Thay email */}
</a>

// Dòng 72-77: Thay số điện thoại
<a href="tel:+1234567890">
  +1 (234) 567-890  {/* Thay số điện thoại */}
</a>

// Dòng 82: Thay địa chỉ
<p className="text-xl text-gray-300">San Francisco, CA</p>

// Dòng 88-106: Thay social links
<a href="https://facebook.com/yourpage">f</a>  {/* Thay link */}
<a href="https://twitter.com/yourpage">t</a>
<a href="https://linkedin.com/in/yourpage">in</a>
```

### 6. Gallery Section (`client/src/components/modules/Gallery.tsx`)

**Thay đổi gì:**
- Tên tác phẩm
- Mô tả tác phẩm
- Icon

**Cách sửa:**

```javascript
// Dòng 5-40: Thay tác phẩm
const projects = [
  {
    id: 1,
    title: "Product Visualization",  {/* Thay tên */}
    category: "3D Modeling",  {/* Thay category */}
    description: "High-quality 3D renders...",  {/* Thay mô tả */}
    image: "🎨",  {/* Thay emoji */}
  },
];
```

### 7. Testimonials Section (`client/src/components/modules/Testimonials.tsx`)

**Thay đổi gì:**
- Tên khách hàng
- Công ty
- Đánh giá
- Rating

**Cách sửa:**

```javascript
// Dòng 5-30: Thay testimonials
const testimonials = [
  {
    id: 1,
    name: "John Smith",  {/* Thay tên khách */}
    company: "Tech Company",  {/* Thay công ty */}
    text: "Alex did an amazing job...",  {/* Thay đánh giá */}
    rating: 5,  {/* Thay rating (1-5) */}
  },
];
```

---

## ⚙️ Cấu Hình EmailJS

### Bước 1: Tạo Tài Khoản EmailJS

1. Vào https://www.emailjs.com
2. Nhấn "Sign Up" → Đăng ký tài khoản
3. Xác thực email

### Bước 2: Tạo Email Service

1. Vào "Email Services" (bên trái)
2. Nhấn "Add New Service"
3. Chọn Gmail hoặc email provider của bạn
4. Làm theo hướng dẫn
5. **Copy Service ID** (ví dụ: `service_abc123`)

### Bước 3: Tạo Email Template

1. Vào "Email Templates"
2. Nhấn "Create New Template"
3. Tên template: `contact_form` (hoặc tên khác)
4. Thêm nội dung template:

```
From: {{from_name}} ({{from_email}})
Message: {{message}}
```

5. **Copy Template ID** (ví dụ: `template_xyz789`)

### Bước 4: Lấy Public Key

1. Vào "Account" (góc phải trên)
2. Vào tab "API Keys"
3. **Copy Public Key** (ví dụ: `abc123xyz789`)

### Bước 5: Cấu Hình Trong Code

**File:** `client/src/components/modules/Contact.tsx`

**Dòng 14-17:**

```javascript
// EMAILJS CONFIG - Thay doi cac gia tri nay
const EMAILJS_SERVICE_ID = "service_your_service_id";  // Thay Service ID
const EMAILJS_TEMPLATE_ID = "template_your_template_id";  // Thay Template ID
const EMAILJS_PUBLIC_KEY = "your_public_key";  // Thay Public Key
const RECIPIENT_EMAIL = "Patto2k4@gmail.com";  // Thay email nhận
```

**Ví dụ:**

```javascript
const EMAILJS_SERVICE_ID = "service_abc123def456";
const EMAILJS_TEMPLATE_ID = "template_xyz789abc123";
const EMAILJS_PUBLIC_KEY = "abc123xyz789def456";
const RECIPIENT_EMAIL = "Patto2k4@gmail.com";
```

### Bước 6: Kiểm Tra

1. Mở website
2. Điền form liên hệ
3. Nhấn "Send Message"
4. Kiểm tra email nhận được

---

## 💬 Cấu Hình Discord Popup

**File:** `client/src/components/DiscordPopup.tsx`

**Dòng 19:**

```javascript
const DISCORD_URL = "https://discord.gg/";  // Thay bang URL Discord cua ban
```

### Cách Lấy Discord URL

1. Vào Discord server của bạn
2. Nhấn chuột phải vào server name
3. Chọn "Invite People"
4. Copy invite link

**Ví dụ:**

```javascript
const DISCORD_URL = "https://discord.gg/abc123def456";
```

### Tùy Chỉnh Popup

**Thay Đổi Tiêu Đề:**

```javascript
// Dòng 84-86
<h2 className="text-3xl md:text-4xl font-bold text-white">
  Join Our Discord Community  {/* Thay tiêu đề */}
</h2>
```

**Thay Đổi Nội Dung:**

```javascript
// Dòng 92-96
<p className="text-gray-300 text-lg mb-6 leading-relaxed text-center">
  Connect with our community...  {/* Thay nội dung */}
</p>
```

**Thay Đổi Feature Icons:**

```javascript
// Dòng 98-111
<div className="grid grid-cols-3 gap-4 mb-8">
  <div className="text-center p-4 rounded-lg bg-[#0A0A0A] border border-[#6366F1]/20">
    <div className="text-2xl mb-2">🎮</div>  {/* Thay emoji */}
    <p className="text-sm text-gray-400">Gaming</p>  {/* Thay text */}
  </div>
  {/* ... */}
</div>
```

**Thay Đổi Delay Hiển Thị:**

```javascript
// Dòng 26
const timer = setTimeout(() => {
  setIsOpen(true);
}, 1500);  // 1500ms = 1.5 giây (thay số này)
```

---

## 🌐 Cấu Hình Language Switcher

**File:** `client/src/components/LanguageSwitcher.tsx`

Hiện tại Language Switcher chỉ là UI, chưa tích hợp i18n.

### Để Tích Hợp Đầy Đủ (Nâng Cao)

Cần cài đặt i18next:

```bash
pnpm add i18next react-i18next
```

Sau đó tạo file dịch:

```
client/src/locales/
├── en.json
├── vi.json
└── zh.json
```

Nhưng hiện tại, bạn có thể dùng Google Translate hoặc tương tự.

---

## 🎬 Cấu Hình Spline 3D

**File:** `client/src/components/modules/Hero.tsx`

**Dòng 21:**

```javascript
const SPLINE_URL = "https://prod.spline.design/YOUR_ID/scene";
```

### Cách Lấy Spline URL

1. Vào https://spline.design
2. Tạo hoặc mở project 3D
3. Nhấn "Share" → "Share as embed"
4. Copy URL từ iframe `src`

**Ví dụ:**

```javascript
const SPLINE_URL = "https://prod.spline.design/wgI90cJyjVIqgKwS/scene";
```

### Trigger Tương Tác

Spline model có các trigger:
- **Hover**: Phóng to nhẹ
- **Click**: Trigger animation
- **Scroll**: Trigger khi xuất hiện

---

## 🎨 Thay Đổi Màu Sắc

**File:** `client/src/index.css`

**Dòng 54-63:**

```css
:root {
  /* Màu xanh lam/tím nhấn - Dark Blue/Purple gradient */
  --primary: #6366F1;  /* Màu chính */
  --primary-foreground: #FFFFFF;
  --sidebar-primary: #6366F1;
  --sidebar-primary-foreground: #FFFFFF;
  --chart-1: #6366F1;
  --chart-2: #8B5CF6;  /* Màu phụ (tím) */
  --chart-3: #A78BFA;  /* Màu nhạt */
  --chart-4: #C4B5FD;
  --chart-5: #DDD6FE;
}
```

### Các Màu Khác

| Màu | Hex | Sử Dụng |
|-----|-----|--------|
| Indigo | #6366F1 | Màu chính |
| Purple | #8B5CF6 | Gradient |
| Light Purple | #A78BFA | Accent |
| Violet | #7C3AED | Hover |

### Thay Đổi Color Scheme

**Ví dụ: Chuyển sang màu Xanh Lá**

```css
:root {
  --primary: #10B981;  /* Xanh lá */
  --chart-2: #34D399;  /* Xanh lá nhạt */
  --chart-3: #6EE7B7;
  /* ... */
}
```

---

## 🐛 Troubleshooting

### Vấn Đề 1: Discord Popup Không Hiển Thị

**Nguyên nhân:** Đóng popup rồi không hiển thị lại

**Cách Sửa:**
1. Mở DevTools (F12)
2. Vào Console
3. Chạy: `window.location.reload()`

### Vấn Đề 2: EmailJS Không Gửi Email

**Nguyên nhân:** Config sai hoặc email không được xác thực

**Cách Sửa:**
1. Kiểm tra Service ID, Template ID, Public Key
2. Kiểm tra email đã xác thực chưa
3. Kiểm tra console (F12) xem có lỗi gì

### Vấn Đề 3: Spline Không Tải

**Nguyên nhân:** URL sai hoặc project không public

**Cách Sửa:**
1. Kiểm tra URL có đúng không
2. Đảm bảo project Spline là public
3. Thử refresh trang (F5)

### Vấn Đề 4: Màu Sắc Không Đổi

**Nguyên nhân:** Cache browser

**Cách Sửa:**
1. Xóa cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+Shift+R)

### Vấn Đề 5: Language Switcher Không Hoạt Động

**Nguyên nhân:** Chưa tích hợp i18n

**Cách Sửa:**
- Hiện tại chỉ là UI, cần tích hợp i18next để hoạt động đầy đủ

---

## 📝 Cheat Sheet - Các Lệnh Hữu Ích

### Khởi Động Dev Server

```bash
cd /home/ubuntu/portfolio-3d-modular
pnpm dev
```

### Build Cho Production

```bash
pnpm build
```

### Format Code

```bash
pnpm format
```

### Kiểm Tra TypeScript Errors

```bash
pnpm check
```

---

## 🎯 Các Bước Tiếp Theo

1. ✅ Cấu hình EmailJS
2. ✅ Cấu hình Discord URL
3. ✅ Thay đổi nội dung từng module
4. ✅ Tùy chỉnh màu sắc
5. ✅ Thêm hình ảnh/video thực tế
6. ⭐ Tích hợp i18n cho Language Switcher
7. ⭐ Thêm animation tùy chỉnh
8. ⭐ Tối ưu hóa SEO

---

## 📞 Cần Giúp?

Nếu bạn gặp vấn đề:

1. Kiểm tra console (F12) xem có lỗi gì
2. Đọc lại hướng dẫn tương ứng
3. Thử hard refresh (Ctrl+Shift+R)
4. Xóa cache và thử lại

---

## 🎉 Chúc Bạn Thành Công!

Bây giờ bạn đã có một website Portfolio 3D hoàn chỉnh với:
- ✅ 9 module chính
- ✅ Framer Motion animations
- ✅ Spline 3D tương tác
- ✅ Discord Popup
- ✅ EmailJS integration
- ✅ Case Studies Modal
- ✅ Language Switcher
- ✅ Dark Blue/Purple theme

Hãy tùy chỉnh và tạo ra website Portfolio 3D độc đáo của bạn! 🚀
