# 🎨 Portfolio 3D Website - Hệ Thống Module

> Một website portfolio hiện đại cho 3D designers, được xây dựng với React, Tailwind CSS, Framer Motion, và Spline 3D.

## 📸 Tính Năng Chính

- ✨ **Dark Mode Theme** - Gradient xanh lam/tím (#6366F1 + #8B5CF6)
- 🎬 **Smooth Animations** - Framer Motion animations trên tất cả modules
- 🎯 **Spline 3D Integration** - Mô hình 3D tương tác trong Hero section
- 💬 **Discord Popup** - Auto-show popup khi mở trang
- 📧 **EmailJS Integration** - Form liên hệ gửi email trực tiếp
- 📱 **Case Studies Modal** - Popup chi tiết cho từng dự án
- 🌐 **Language Switcher** - Hỗ trợ 3 ngôn ngữ (EN, VI, ZH)
- 📱 **Fully Responsive** - Mobile-first design
- ♿ **Accessible** - WCAG AA compliant

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm (hoặc npm)

### Installation

```bash
# Clone repository
git clone <repo-url>
cd portfolio-3d-modular

# Cài đặt dependencies
pnpm install

# Khởi động dev server
pnpm dev

# Build cho production
pnpm build

# Preview production build
pnpm preview
```

## 📁 Cấu Trúc Dự Án

```
portfolio-3d-modular/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── modules/           # 9 module chính
│   │   │   ├── AnimatedSection.tsx
│   │   │   ├── DiscordPopup.tsx
│   │   │   ├── LanguageSwitcher.tsx
│   │   │   ├── CaseStudiesModal.tsx
│   │   │   └── ui/               # shadcn/ui components
│   │   ├── pages/
│   │   │   ├── Home.tsx          # Trang chủ
│   │   │   └── NotFound.tsx      # 404 page
│   │   ├── App.tsx
│   │   ├── index.css             # Global styles
│   │   └── main.tsx
│   ├── index.html
│   └── public/
├── server/
│   └── index.ts                  # Express server
├── package.json
└── Documentation files
```

## 🧩 Các Module

| Module | File | Mục Đích |
|--------|------|---------|
| Hero | `Hero.tsx` | Phần tiêu đề chính + Spline 3D |
| Clients | `Clients.tsx` | Logo khách hàng (marquee) |
| Gallery | `Gallery.tsx` | Lưới tác phẩm 3D |
| About | `About.tsx` | Giới thiệu bản thân |
| Services | `Services.tsx` | Danh sách dịch vụ |
| Projects | `Projects.tsx` | Dự án tiêu biểu + modal |
| Testimonials | `Testimonials.tsx` | Đánh giá khách hàng |
| Contact | `Contact.tsx` | Form liên hệ + EmailJS |
| Footer | `Footer.tsx` | Chân trang |

## 🎨 Color Palette

| Tên | Hex | RGB |
|-----|-----|-----|
| Indigo (Primary) | #6366F1 | rgb(99, 102, 241) |
| Purple (Secondary) | #8B5CF6 | rgb(139, 92, 246) |
| Black (Background) | #000000 | rgb(0, 0, 0) |
| White (Text) | #FFFFFF | rgb(255, 255, 255) |

## 🔧 Cấu Hình

### EmailJS Setup

1. Vào https://www.emailjs.com
2. Đăng ký tài khoản
3. Tạo Email Service
4. Tạo Email Template
5. Lấy credentials (Service ID, Template ID, Public Key)
6. Cập nhật `client/src/components/modules/Contact.tsx` (dòng 14-17)

### Discord Popup

Cập nhật `client/src/components/DiscordPopup.tsx` (dòng 19):

```javascript
const DISCORD_URL = "https://discord.gg/YOUR_INVITE_CODE";
```

### Spline 3D

Cập nhật `client/src/components/modules/Hero.tsx` (dòng 21):

```javascript
const SPLINE_URL = "https://prod.spline.design/YOUR_ID/scene";
```

## 📚 Hướng Dẫn

### Hướng Dẫn Chi Tiết Tiếng Việt

Xem các file hướng dẫn:

- **[HUONG_DAN_TOAN_TAP.md](./HUONG_DAN_TOAN_TAP.md)** - Hướng dẫn toàn tập cho người không biết code
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Kiến trúc chi tiết
- **[VISUAL_STYLE_GUIDE.md](./VISUAL_STYLE_GUIDE.md)** - Style guide
- **[PHAN_TICH_DU_AN.md](./PHAN_TICH_DU_AN.md)** - Phân tích dự án & kế hoạch xây dựng

### Chỉnh Sửa Nhanh

#### Thay Đổi Màu Sắc

File: `client/src/index.css` (dòng 54-63)

```css
:root {
  --primary: #6366F1;  /* Thay màu chính */
  --chart-2: #8B5CF6;  /* Thay màu phụ */
}
```

#### Thay Đổi Nội Dung Module

Mỗi module có dữ liệu trong mảng `projects`, `services`, `testimonials`, v.v.

Ví dụ thêm dự án mới vào Gallery:

```javascript
const projects = [
  {
    id: 1,
    title: "Dự án cũ",
    // ...
  },
  {
    id: 2,
    title: "Dự án mới",  // Thêm dự án mới
    // ...
  }
];
```

#### Thay Đổi Spline URL

File: `client/src/components/modules/Hero.tsx` (dòng 21)

```javascript
const SPLINE_URL = "https://prod.spline.design/YOUR_NEW_ID/scene";
```

## 🎬 Animations

Website sử dụng Framer Motion cho các animations:

- **Fade In** - 600ms ease-out
- **Slide In** - 600ms ease-out
- **Scale Up** - 400ms cubic-bezier
- **Stagger** - 200ms delay giữa items
- **Hover Effects** - 300ms ease-out

Tất cả animations tuân theo `prefers-reduced-motion` để accessibility.

## 📱 Responsive Design

- **Mobile** (< 640px) - Single column
- **Tablet** (640px - 1024px) - 2 columns
- **Desktop** (> 1024px) - 3+ columns

## 🔐 Security

- Input validation trên form
- XSS prevention
- Secure headers
- CORS configuration

## 🚀 Deployment

### Deploy to Production

```bash
# Build
pnpm build

# Preview
pnpm preview

# Deploy (tùy platform)
# Vercel, Netlify, Railway, v.v.
```

### Environment Variables

Tạo `.env.local`:

```
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your_analytics_id
```

## 📊 Performance

- Lighthouse Score: > 90
- Page Load Time: < 3s
- Core Web Vitals: Optimized
- Image Optimization: Enabled
- Code Splitting: Implemented

## ♿ Accessibility

- WCAG AA compliant
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast > 4.5:1

## 🐛 Troubleshooting

### Discord Popup không hiển thị?

1. Mở DevTools (F12)
2. Vào Console
3. Chạy: `window.location.reload()`

### EmailJS không gửi email?

1. Kiểm tra Service ID, Template ID, Public Key
2. Kiểm tra email đã xác thực chưa
3. Kiểm tra console có lỗi gì

### Spline không tải?

1. Kiểm tra URL có đúng không
2. Đảm bảo project Spline là public
3. Thử refresh trang (F5)

## 📞 Support

Nếu gặp vấn đề:

1. Kiểm tra console (F12 → Console)
2. Đọc lại hướng dẫn tương ứng
3. Thử hard refresh (Ctrl+Shift+R)
4. Xóa cache và thử lại

## 📖 Documentation

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Spline](https://spline.design)
- [EmailJS](https://www.emailjs.com)

## 📝 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại

## 🙏 Credits

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- 3D Models from [Spline](https://spline.design)
- UI Components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)

## 🎯 Roadmap

- [ ] Blog/Case Studies page
- [ ] Search functionality
- [ ] Dark/Light theme toggle
- [ ] Full i18n support
- [ ] CMS integration
- [ ] Admin panel
- [ ] Performance monitoring

## 🤝 Contributing

Contributions welcome! Vui lòng:

1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push to branch
5. Tạo Pull Request

## 📧 Contact

- Email: contact@example.com
- Website: https://portfolio.example.com
- Discord: https://discord.gg/example

---

**Made with ❤️ by [Your Name]**

**Last Updated:** 2026-05-17
**Version:** 1.0.0
