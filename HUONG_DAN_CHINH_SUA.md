# Hướng Dẫn Chỉnh Sửa Website Portfolio 3D

> **Dành cho:** PATTO (Phạm Tuấn Anh)  
> **Cập nhật lần cuối:** Tháng 5 / 2026  
> **Nguyên tắc vàng:** Mỗi lần chỉnh xong → Lưu file → Kiểm tra trình duyệt → Git commit

---

## 📂 1. Cấu Trúc Thư Mục

```
portfolio001/
├── client/
│   ├── index.html                    ← Script ngôn ngữ (lang class), Google Translate
│   └── src/
│       ├── index.css                 ← ⭐ TRUNG TÂM KIỂM SOÁT: màu, font, animation toàn cục
│       ├── App.tsx                   ← Router + component CustomCursor toàn cục
│       ├── main.tsx                  ← Điểm khởi động React
│       ├── components/
│       │   ├── CustomCursor.tsx      ← ⭐ Con trỏ chuột LERP vật lý tùy biến
│       │   ├── LanguageSwitcher.tsx  ← Nút chọn ngôn ngữ EN/VI/ZH (header)
│       │   ├── AnimatedSection.tsx   ← Wrapper hiệu ứng xuất hiện khi scroll
│       │   ├── SplineInteractive.tsx ← Wrapper nhúng mô hình 3D Spline
│       │   └── modules/              ← Các khu vực của trang chủ
│       │       ├── Hero.tsx          ← Màn hình đầu tiên (tên, tagline, 3D model)
│       │       ├── About.tsx         ← Giới thiệu bản thân
│       │       ├── Clients.tsx       ← Logo khách hàng chạy ngang (marquee)
│       │       ├── Gallery.tsx       ← Lưới tác phẩm 3D
│       │       ├── Services.tsx      ← Các dịch vụ cung cấp
│       │       ├── Projects.tsx      ← Danh sách dự án nổi bật → link trang chi tiết
│       │       ├── Testimonials.tsx  ← Đánh giá của khách hàng
│       │       ├── Contact.tsx       ← Form liên hệ (FormSubmit.co AJAX)
│       │       └── Footer.tsx        ← Chân trang
│       ├── pages/
│       │   ├── Home.tsx              ← Ghép tất cả module theo thứ tự
│       │   ├── ProjectDetail.tsx     ← Trang chi tiết dự án (có Parallax)
│       │   └── NotFound.tsx          ← Trang 404
│       └── data/
│           └── projects.ts           ← ⭐ Dữ liệu dự án (sửa tại đây để thêm/xóa dự án)
├── HUONG_DAN_CHINH_SUA.md            ← File này
├── HUONG_DAN_ANIMATION_VA_3D.md      ← Hướng dẫn hiệu ứng và 3D Spline
├── HUONG_DAN_SPLINE_VA_DISCORD.md    ← Hướng dẫn tích hợp Spline
├── VISUAL_STYLE_GUIDE.md             ← Bảng màu, font, design token
└── ARCHITECTURE.md                   ← Kiến trúc kỹ thuật chi tiết
```

---

## 🎨 2. Thay Đổi Màu Sắc & Bảng Màu

**File cần mở:** `client/src/index.css`

Bảng màu tím-indigo của PATTO được định nghĩa dưới dạng CSS variables:

```css
/* Tìm trong index.css phần @layer base */

--background: 0 0% 0%;           /* Nền trang: đen tuyền */
--foreground: 0 0% 100%;         /* Màu chữ chính: trắng */
--accent: 262 84% 58%;           /* ← Màu nhấn chính: tím indigo #7C3AED */
                                 /*   Đổi thành: 199 89% 48% = xanh cyan */
                                 /*   Đổi thành: 330 81% 60% = hồng rose  */
```

**Đổi màu nút btn-main (tím → màu khác):**
```css
/* Tìm trong index.css phần @utility btn-main */
background: linear-gradient(135deg, #7C3AED 0%, #9917FF 100%);
/* Đổi #7C3AED và #9917FF thành màu bạn muốn */
/* Ví dụ màu xanh dương:  #1D4ED8 → #3B82F6  */
/* Ví dụ màu hồng rose:   #BE185D → #EC4899  */
```

---

## ✨ 3. Animation Nút Chính (btn-main Idle Animations)

**File cần mở:** `client/src/index.css` — phần `@keyframes` đầu file

Nút `btn-main` ("CONTACT ME", "Get In Touch") có **2 hiệu ứng chạy vòng lặp tự động** ngay cả khi người dùng không tương tác:

### 3.1 Hiệu Ứng Thở (Breathing Glow Pulse)
```css
/* Tìm @keyframes btn-pulse-glow */
@keyframes btn-pulse-glow {
  0%, 100% { box-shadow: 0 4px 20px rgba(153, 23, 255, 0.3), ... }
  50%       { box-shadow: 0 4px 35px rgba(153, 23, 255, 0.6), ... }
  /*                      ↑ Tăng 0.6 → 0.9 để glow sáng hơn lúc đỉnh */
  /*                      ↑ Giảm 0.6 → 0.3 để glow nhẹ nhàng hơn      */
}
```

**Chỉnh tốc độ thở:**
```css
/* Tìm trong @utility btn-main */
animation: btn-pulse-glow 2s ease-in-out infinite;
/*                         ↑ Đổi 2s → 3s = thở chậm hơn (nhẹ nhàng) */
/*                         ↑ Đổi 2s → 1s = thở nhanh hơn (hưng phấn) */
```

**Tắt hoàn toàn hiệu ứng thở:**
```css
/* Xóa dòng này trong @utility btn-main */
animation: btn-pulse-glow 2s ease-in-out infinite;
/* Và thêm lại box-shadow tĩnh cũ: */
box-shadow: 0 4px 20px rgba(153, 23, 255, 0.3), 0 0 0 1px rgba(153, 23, 255, 0.1);
```

### 3.2 Hiệu Ứng Tia Sáng Quét (Shimmer Sweep)
```css
/* Tìm @keyframes btn-shimmer */
@keyframes btn-shimmer {
  0%   { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(300%) skewX(-15deg); }
}
```

**Chỉnh độ sáng của tia:**
```css
/* Tìm trong &::after bên trong @utility btn-main */
background: linear-gradient(
  to right,
  transparent 0%,
  rgba(255, 255, 255, 0.18) 50%,  /* ← 0.18 = độ sáng. Tăng lên 0.35 để rõ hơn */
  transparent 100%
);
```

**Chỉnh tốc độ tia quét:**
```css
/* Tìm trong &::after bên trong @utility btn-main */
animation: btn-shimmer 2.5s linear infinite;
/*                     ↑ Đổi 2.5s → 4s = tia quét chậm hơn */
/*                     ↑ Đổi 2.5s → 1s = tia quét nhanh hơn */
```

**Tắt hoàn toàn tia sáng:**
```css
/* Xóa toàn bộ block &::after trong @utility btn-main */
&::after {
  /* ... xóa tất cả dòng từ đây ... */
}
```

---

## 🖱️ 4. Con Trỏ Chuột Tùy Biến (Custom Cursor)

**File cần mở:** `client/src/components/CustomCursor.tsx`

Con trỏ gồm 2 lớp di chuyển độc lập bằng vật lý LERP (Linear Interpolation):

| Lớp | Mô tả | Biến điều khiển |
|-----|-------|-----------------|
| **Chấm tâm (dot)** | Hình tròn lavender `#EDE9FE` bám sát ngay lập tức | `dotElRef` |
| **Vòng ngoài (ring)** | Vòng tím di chuyển có quán tính mượt mà | `ringElRef` |

### 4.1 Thay Đổi Kích Thước & Màu Tâm
```tsx
/* Tìm dòng: */
className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#EDE9FE] shadow-[...]"
/*   w-2 h-2 = 8px × 8px  → đổi w-3 h-3 = 12px để to hơn  */
/*   bg-[#EDE9FE] = màu lavender nhạt → đổi bg-white = trắng tinh */
```

### 4.2 Thay Đổi Kích Thước Vòng Khi Hover Nút
```tsx
/* Tìm trong updateCursor() → if (hoverType === "interactive") */
targetWidth = 56;    /* ← Đường kính vòng khi hover nút: 56px */
targetHeight = 56;   /* ← Luôn bằng targetWidth để giữ hình tròn */
/* Tăng lên 72 để vòng to hơn, giảm xuống 40 để nhỏ hơn          */
```

### 4.3 Thay Đổi Kích Thước Thấu Kính VIEW (Trên Thẻ Dự Án)
```tsx
/* Tìm trong updateCursor() → else if (hoverType === "card") */
targetWidth = 76;    /* ← Kích thước thấu kính VIEW: 76px */
targetHeight = 76;
/* Tăng lên 96 để thấu kính lớn hơn, giảm xuống 56 để nhỏ hơn   */
```

### 4.4 Thay Đổi Tốc Độ Quán Tính (LERP)
```tsx
/* Tìm dòng: */
const ease = 0.16;
/* 0.16 = hệ số quán tính. Khoảng từ 0.05 đến 0.3:
   - 0.05 = rất chậm, như nước (lag nhiều)
   - 0.16 = mặc định (mượt, chuyên nghiệp)
   - 0.3  = nhanh hơn, bám sát hơn          */
```

### 4.5 Tắt Hoàn Toàn Con Trỏ Tùy Biến
```tsx
/* Mở client/src/App.tsx, xóa hoặc comment dòng: */
import CustomCursor from "@/components/CustomCursor";
/* Và xóa dòng: */
<CustomCursor />

/* Sau đó mở index.css, xóa toàn bộ block: */
@media (pointer: fine) {
  body, a, button, ... { cursor: none !important; }
}
```

---

## 🌐 5. Thay Đổi Mô Hình 3D Spline (Hero)

**File cần mở:** `client/src/components/modules/Hero.tsx`

```tsx
/* Tìm dòng ở đầu file: */
const SPLINE_URL = "https://prod.spline.design/wgI90cJyjVIqgKwS/scene";

/* Cách lấy URL mới:
   1. Vào https://spline.design → mở project
   2. Nhấn Share (góc trên phải)
   3. Chọn "Public Link" → Copy URL
   4. Thay toàn bộ URL trên bằng URL vừa copy */
```

---

## 💬 6. Thay Đổi Thông Tin Cá Nhân

### 6.1 Tên, Tagline (Hero)
**File:** `client/src/components/modules/Hero.tsx`
```tsx
/* Tìm: */
HI, I'M
<br />
<span className="gradient-text">PATTO</span>

/* Và: */
I'm a 3D Designer & Creative Technologist...

/* Thay bằng nội dung của bạn */
```

### 6.2 Email, Số Điện Thoại, Địa Chỉ (Contact)
**File:** `client/src/components/modules/Contact.tsx`
```tsx
/* Tìm và thay: */
const RECIPIENT_EMAIL = "Patto2k4@gmail.com";  /* ← Email nhận form liên hệ */
href="mailto:Patto2k4@gmail.com"               /* ← Email hiển thị */
href="tel:+1234567890"                         /* ← Số điện thoại */
>+1 (234) 567-890<                             /* ← Số hiển thị  */
>San Francisco, CA<                            /* ← Địa chỉ      */
```

### 6.3 Mạng Xã Hội (Hero + Contact + Footer)
Tìm và thay đường link trong từng file:
```
Facebook : https://www.facebook.com/pham.tuan.anh.29784
Instagram: https://www.instagram.com/patto_2o4/
Behance  : https://www.behance.net/lnguyn106
Tiktok   : https://www.tiktok.com/@tuananhcutehehe?lang=vi-VN
```

---

## 📁 7. Thêm / Sửa Dự Án (Projects)

**File cần mở:** `client/src/data/projects.ts`

```typescript
export const projects = [
  {
    id: "aurora-identity",          /* ← ID duy nhất, dùng trong URL: /projects/aurora-identity */
    number: "01",                   /* ← Số thứ tự hiển thị */
    title: "Aurora Brand Identity", /* ← Tên dự án */
    client: "Aurora Cosmetics",     /* ← Tên khách hàng */
    category: "Brand Identity",     /* ← Loại dự án */
    image: "A",                     /* ← Ký tự đại diện (chữ cái lớn, hiển thị trong thẻ) */
    description: "...",             /* ← Mô tả ngắn (hiển thị trên trang chủ) */
    /* --- Dữ liệu cho trang chi tiết --- */
    year: "2024",
    role: "Lead 3D Artist",
    tools: ["Cinema 4D", "Redshift", "Photoshop"],
    challenge: "...",               /* ← Mô tả thách thức của dự án */
    solution: "...",                /* ← Mô tả giải pháp */
    pipeline: [                     /* ← 4 bước quy trình sản xuất */
      { step: "01", title: "Concept", description: "..." },
      { step: "02", title: "3D Modeling", description: "..." },
      { step: "03", title: "Lighting & Rendering", description: "..." },
      { step: "04", title: "Post Production", description: "..." },
    ],
    nextProject: "tên-id-dự-án-tiếp-theo",  /* ← ID của dự án tiếp theo (nút next) */
  },
  /* Thêm dự án mới bằng cách copy block trên và đặt id mới */
];
```

---

## 📝 8. Form Liên Hệ (Contact Form)

Form dùng dịch vụ **FormSubmit.co** (miễn phí, không cần backend).

**Lần đầu dùng:** FormSubmit sẽ gửi email xác nhận đến `RECIPIENT_EMAIL`. Bạn phải nhấn xác nhận thì form mới hoạt động.

**File cần mở:** `client/src/components/modules/Contact.tsx`
```tsx
const RECIPIENT_EMAIL = "Patto2k4@gmail.com"; /* ← Thay bằng email của bạn */
```

**Micro-interaction của nút gửi (3 giai đoạn):**
- **Mặc định** → Nút tím gradient + hiệu ứng shimmer
- **Đang gửi** → Spinner xoay + chữ "Sending Message..."
- **Thành công** → Nền xanh emerald + icon tích ✓ + chữ "Sent Successfully!"
- Sau 4 giây → Tự động reset về trạng thái mặc định

---

## 🌏 9. Hệ Thống Đa Ngôn Ngữ (EN / VI / ZH)

Website dùng **Google Translate** tự động dịch toàn bộ nội dung.

**Font tương thích cả 3 ngôn ngữ:**
- `Be Vietnam Pro` → Tiếng Việt (có dấu thanh)
- `Noto Sans SC` → Tiếng Trung (chữ Hán)
- `Outfit / Plus Jakarta Sans` → Tiếng Anh

**Line-height tự động điều chỉnh** (đã tích hợp trong `index.css`):
```css
/* Khi dùng tiếng Việt (lang-vi): line-height tăng lên 1.625 */
/* Khi dùng tiếng Trung (lang-zh): line-height tăng lên 1.68 */
/* → Chữ không bị đè lên nhau, có không gian "thở" tự nhiên */
```

---

## ⚡ 10. Thứ Tự Module Trang Chủ

**File cần mở:** `client/src/pages/Home.tsx`

```tsx
export default function Home() {
  return (
    <>
      <Hero />          {/* ← Màn hình đầu tiên, không được xóa */}
      <Clients />       {/* ← Ẩn bằng cách comment: {/* <Clients /> */}
      <Gallery />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />       {/* ← Form liên hệ, giữ gần cuối */}
      <Footer />        {/* ← Chân trang, luôn ở cuối cùng */}
    </>
  );
}
```

**Để ẩn một module:** Thêm `{/*` trước và `*/}` sau:
```tsx
{/* <Gallery /> */}    ← Gallery bị ẩn, không xóa code
```

---

## 🔧 11. Kiểm Tra Sau Khi Chỉnh Sửa

### Bước 1: Kiểm tra TypeScript
```bash
npm run check
# Kết quả: "0 errors" = an toàn để commit
```

### Bước 2: Chạy local để xem trước
```bash
npm run dev
# Mở http://localhost:3000 trong trình duyệt
```

### Bước 3: Đẩy lên GitHub
```bash
git add .
git commit -m "feat: mô tả thay đổi của bạn"
git push
```

---

## 🆘 12. Lỗi Phổ Biến & Cách Xử Lý

| Lỗi | Nguyên nhân | Cách sửa |
|-----|-------------|----------|
| Trang trắng hoàn toàn | Lỗi JavaScript nghiêm trọng | Mở F12 → Console → đọc lỗi |
| Con trỏ mất tích | Thiếu `<CustomCursor />` trong App.tsx | Kiểm tra App.tsx |
| Nút shimmer bị vuông | `overflow: visible` thay vì `hidden` | Kiểm tra btn-main trong index.css |
| 3D model không load | URL Spline sai hoặc internet yếu | Kiểm tra `SPLINE_URL` trong Hero.tsx |
| Form gửi không được | Chưa xác nhận email FormSubmit | Kiểm tra hộp thư `RECIPIENT_EMAIL` |
| Chữ Việt/Trung bị dính | Class `lang-vi`/`lang-zh` chưa được set | Kiểm tra script trong `index.html` |

---

**✅ Chúc bạn chỉnh sửa suôn sẻ! Nếu gặp vấn đề, kiểm tra console (F12) trước nhé.**
