# 🎨 Visual Style Guide - Portfolio 3D

## Phong Cách Thiết Kế

**Tên:** Dark Blue/Purple Gradient Minimalism
**Phong Cách:** Modern, Elegant, Professional
**Đối Tượng:** Creative Professionals, 3D Designers

---

## 📐 Color Palette

### Màu Chính

| Tên | Hex | RGB | Sử Dụng |
|-----|-----|-----|--------|
| **Indigo** | #6366F1 | rgb(99, 102, 241) | Nút, link, border chính |
| **Purple** | #8B5CF6 | rgb(139, 92, 246) | Gradient, hover |
| **Light Purple** | #A78BFA | rgb(167, 139, 250) | Accent nhạt |
| **Violet** | #7C3AED | rgb(124, 58, 237) | Hover effect mạnh |
| **Dark Indigo** | #4F46E5 | rgb(79, 70, 229) | Active state |

### Màu Nền

| Tên | Hex | RGB | Sử Dụng |
|-----|-----|-----|--------|
| **Black** | #000000 | rgb(0, 0, 0) | Nền chính |
| **Dark Gray 1** | #0A0A0A | rgb(10, 10, 10) | Nền card |
| **Dark Gray 2** | #1A1A1A | rgb(26, 26, 26) | Nền form |
| **Dark Gray 3** | #2A2A2A | rgb(42, 42, 42) | Border |

### Màu Chữ

| Tên | Hex | RGB | Sử Dụng |
|-----|-----|-----|--------|
| **White** | #FFFFFF | rgb(255, 255, 255) | Chữ chính |
| **Gray 300** | #D1D5DB | rgb(209, 213, 219) | Chữ phụ |
| **Gray 400** | #9CA3AF | rgb(156, 163, 175) | Chữ nhạt |
| **Gray 500** | #6B7280 | rgb(107, 114, 128) | Chữ muted |

---

## 🔤 Typography

### Font Family

```css
Primary: 'Space Grotesk' (Google Fonts)
Fallback: 'Poppins' (Google Fonts)
System: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

### Font Sizes

| Tên | Size | Sử Dụng |
|-----|------|--------|
| **H1** | 48px - 64px | Tiêu đề chính |
| **H2** | 36px - 48px | Tiêu đề section |
| **H3** | 24px - 32px | Tiêu đề phụ |
| **Body** | 16px | Nội dung chính |
| **Small** | 14px | Mô tả phụ |
| **Tiny** | 12px | Label, tag |

### Font Weights

| Tên | Weight | Sử Dụng |
|-----|--------|--------|
| **Regular** | 400 | Nội dung chính |
| **Medium** | 500 | Emphasis |
| **Semibold** | 600 | Tiêu đề phụ |
| **Bold** | 700 | Tiêu đề chính |

---

## 🎭 Component Styles

### Buttons

#### Primary Button
```css
Background: linear-gradient(to right, #6366F1, #8B5CF6)
Hover: linear-gradient(to right, #7C3AED, #A78BFA)
Padding: 12px 32px
Border Radius: 8px
Font Weight: 600
Transition: 300ms ease-out
```

#### Secondary Button
```css
Border: 2px solid #6366F1
Color: #6366F1
Background: transparent
Hover: Background #6366F1, Color white
Padding: 12px 32px
Border Radius: 8px
Font Weight: 600
Transition: 300ms ease-out
```

### Cards

```css
Background: #1A1A1A
Border: 1px solid rgba(99, 102, 241, 0.2)
Border Radius: 24px
Padding: 32px
Box Shadow: 0 0 30px rgba(99, 102, 241, 0.1)
Hover: Scale 1.05, Shadow 0 0 50px rgba(99, 102, 241, 0.2)
Transition: 300ms ease-out
```

### Input Fields

```css
Background: #1A1A1A
Border: 1px solid rgba(99, 102, 241, 0.2)
Border Radius: 8px
Padding: 12px 16px
Color: white
Focus: Border #6366F1, Box Shadow 0 0 20px rgba(99, 102, 241, 0.2)
Transition: 200ms ease-out
```

---

## ✨ Effects & Animations

### Glow Effect

```css
Box Shadow: 0 0 30px rgba(99, 102, 241, 0.3)
Hover: 0 0 50px rgba(99, 102, 241, 0.5)
Transition: 300ms
```

### Gradient Overlay

```css
Background: linear-gradient(to right, 
  rgba(99, 102, 241, 0),
  rgba(99, 102, 241, 0.1),
  rgba(99, 102, 241, 0)
)
```

### Animations

#### Fade In
```
Duration: 600ms
Easing: ease-out
Delay: staggered 200ms
```

#### Scale Up
```
From: scale(0.95)
To: scale(1)
Duration: 400ms
Easing: cubic-bezier(0.23, 1, 0.32, 1)
```

#### Slide In
```
From: translateX(-20px) opacity 0
To: translateX(0) opacity 1
Duration: 600ms
Easing: ease-out
```

---

## 📏 Spacing System

```css
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
4xl: 80px
```

---

## 🔲 Border Radius

```css
sm: 4px
md: 8px
lg: 12px
xl: 16px
2xl: 24px
3xl: 32px (cards)
full: 9999px (pills)
```

---

## 📱 Responsive Breakpoints

| Tên | Width | Sử Dụng |
|-----|-------|--------|
| **Mobile** | < 640px | Điện thoại |
| **Tablet** | 640px - 1024px | Máy tính bảng |
| **Desktop** | > 1024px | Máy tính |

---

## 🌙 Dark Mode

Website sử dụng **Dark Mode** toàn bộ. Các màu được tối ưu cho:
- Giảm mỏi mắt
- Tăng độ tương phản
- Tạo cảm giác hiện đại

---

## 🎯 Design Principles

1. **Minimalism** - Tối giản, không quá phức tạp
2. **Elegance** - Thanh lịch, chuyên nghiệp
3. **Clarity** - Rõ ràng, dễ hiểu
4. **Consistency** - Nhất quán trên toàn bộ website
5. **Performance** - Tối ưu hóa tốc độ

---

## 📋 Checklist Khi Thêm Component Mới

- [ ] Sử dụng màu từ palette
- [ ] Sử dụng font từ typography system
- [ ] Sử dụng spacing từ spacing system
- [ ] Sử dụng border radius từ hệ thống
- [ ] Thêm animation phù hợp
- [ ] Kiểm tra responsive trên mobile
- [ ] Kiểm tra contrast (WCAG AA)
- [ ] Kiểm tra hover/focus states
- [ ] Kiểm tra performance

---

## 🔄 Cách Thay Đổi Color Scheme

Nếu bạn muốn thay đổi toàn bộ màu sắc:

1. **Mở file:** `client/src/index.css`
2. **Tìm dòng 54-63:** Thay đổi các giá trị hex
3. **Cập nhật file này:** Ghi lại các màu mới
4. **Test toàn bộ website:** Kiểm tra contrast và tính nhất quán

---

## 📸 Screenshot Reference

Các screenshot tham khảo:
- Discord Popup: Banner gradient xanh lam/tím
- Hero Section: Nền đen, text trắng, accent xanh lam
- Cards: Border xanh lam nhạt, nền tối
- Buttons: Gradient xanh lam/tím

---

## 🎨 Công Cụ Hỗ Trợ

- **Color Picker:** https://htmlcolorcodes.com
- **Gradient Generator:** https://cssgradient.io
- **Font Preview:** https://fonts.google.com
- **Contrast Checker:** https://webaim.org/resources/contrastchecker/

---

## 📝 Ghi Chú

- Tất cả màu sắc được tối ưu cho Dark Mode
- Contrast ratio ≥ 4.5:1 (WCAG AA)
- Animations tuân theo `prefers-reduced-motion`
- Responsive design mobile-first

---

**Cập nhật lần cuối:** 2026-05-17
**Phiên bản:** 1.0
