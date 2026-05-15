# Hướng Dẫn Framer Motion Animations & Spline 3D Integration

## Phần 1: Hiệu Ứng Cuộn Trang (Scroll Animations)

### 1.1 Cách Hoạt Động

Website sử dụng **Framer Motion** để tạo hiệu ứng animation khi bạn cuộn trang. Các module sẽ:
- Xuất hiện mượt mà từ dưới lên (fade-in + slide-up)
- Các item trong lưới xuất hiện lần lượt với độ trễ nhỏ
- Tạo cảm giác động và sống động

### 1.2 Các Component Animation

#### AnimatedSection
**Mục đích:** Tạo animation cho toàn bộ section

**Cách sử dụng:**
```jsx
<AnimatedSection direction="up">
  <h2>Tiêu đề</h2>
</AnimatedSection>
```

**Các hướng (direction):**
- `"up"` - Slide lên từ dưới
- `"down"` - Slide xuống từ trên
- `"left"` - Slide từ trái sang
- `"right"` - Slide từ phải sang

**Ví dụ:**
```jsx
// Slide từ trái sang
<AnimatedSection direction="left">
  <div>Nội dung</div>
</AnimatedSection>

// Slide từ dưới lên với độ trễ
<AnimatedSection direction="up" delay={0.2}>
  <div>Nội dung</div>
</AnimatedSection>
```

#### AnimatedItem
**Mục đích:** Tạo animation cho từng item trong lưới

**Cách sử dụng:**
```jsx
{projects.map((project, index) => (
  <AnimatedItem key={project.id} index={index}>
    <ProjectCard />
  </AnimatedItem>
))}
```

**Cách hoạt động:**
- Mỗi item xuất hiện lần lượt
- Độ trễ = `index * 0.1` giây
- Tạo hiệu ứng "cascade" (rơi tầng)

### 1.3 Tùy Chỉnh Tốc Độ Animation

Mở file `client/src/components/AnimatedSection.tsx` hoặc `AnimatedItem.tsx`

**Thay đổi duration (thời gian):**
```javascript
transition={{
  duration: 0.8,  // Thay đổi số này
  delay: delay,
  ease: "easeOut",
}}
```

- `0.3` = Rất nhanh (300ms)
- `0.6` = Nhanh (600ms)
- `0.8` = Bình thường (800ms)
- `1.2` = Chậm (1200ms)

**Thay đổi kiểu animation (easing):**
```javascript
ease: "easeOut"  // Thay đổi giá trị này
```

Các giá trị khác:
- `"easeIn"` - Bắt đầu chậm, kết thúc nhanh
- `"easeOut"` - Bắt đầu nhanh, kết thúc chậm
- `"easeInOut"` - Chậm-nhanh-chậm
- `"linear"` - Tốc độ đều

### 1.4 Tắt Animation (Nếu Cần)

Nếu bạn muốn tắt animation, hãy mở file module (ví dụ: `Gallery.tsx`) và thay thế:

```jsx
// Trước (có animation)
<AnimatedItem index={index}>
  <ProjectCard />
</AnimatedItem>

// Sau (không animation)
<ProjectCard />
```

---

## Phần 2: Mô Hình 3D Spline

### 2.1 Spline là gì?

**Spline** là nền tảng cho phép bạn:
- Tạo mô hình 3D tương tác
- Chia sẻ mô hình dưới dạng embed (iframe)
- Không cần cài đặt thêm gì, chỉ cần URL

### 2.2 Cách Lấy URL Spline

#### Bước 1: Vào Spline
- Truy cập https://spline.design
- Đăng nhập hoặc tạo tài khoản

#### Bước 2: Tạo hoặc Mở Project
- Nhấn "New File" để tạo project mới
- Hoặc mở project có sẵn

#### Bước 3: Thiết Kế Mô Hình 3D
- Sử dụng các công cụ trong Spline để tạo/chỉnh sửa mô hình
- Thêm animation, texture, lighting, v.v.

#### Bước 4: Share Project
- Nhấn nút **"Share"** (góc trên bên phải)
- Chọn **"Share as embed"**
- Copy URL từ iframe `src`

**Ví dụ URL:**
```
https://prod.spline.design/NkGfqNqHWVIzxWxr/scene
```

### 2.3 Tích Hợp Spline vào Hero

#### Bước 1: Mở file Hero.tsx
```
client/src/components/modules/Hero.tsx
```

#### Bước 2: Tìm dòng này (khoảng dòng 10)
```javascript
const SPLINE_URL = "https://prod.spline.design/NkGfqNqHWVIzxWxr/scene";
```

#### Bước 3: Thay bằng URL của bạn
```javascript
const SPLINE_URL = "https://prod.spline.design/YOUR_PROJECT_ID/scene";
```

**Ví dụ:**
```javascript
// Trước
const SPLINE_URL = "https://prod.spline.design/NkGfqNqHWVIzxWxr/scene";

// Sau
const SPLINE_URL = "https://prod.spline.design/abc123def456/scene";
```

#### Bước 4: Lưu file
- Nhấn `Ctrl+S` (Windows) hoặc `Cmd+S` (Mac)
- Website sẽ tự động refresh

### 2.4 Tùy Chỉnh Spline Viewer

#### Thay Đổi Tiêu Đề
Mở file `Hero.tsx`, tìm dòng:
```javascript
<SplineViewer url={SPLINE_URL} title="3D Designer Portfolio" />
```

Thay `"3D Designer Portfolio"` bằng tiêu đề của bạn:
```javascript
<SplineViewer url={SPLINE_URL} title="My 3D Model" />
```

#### Thay Đổi Kích Thước
Mở file `Hero.tsx`, tìm dòng:
```javascript
<div className="flex-1 relative h-96 md:h-[500px] w-full">
```

Thay đổi:
- `h-96` = Chiều cao 384px trên mobile
- `h-[500px]` = Chiều cao 500px trên desktop

Các giá trị khác:
- `h-64` = 256px
- `h-80` = 320px
- `h-[600px]` = 600px
- `h-[700px]` = 700px

### 2.5 Thêm Spline vào Section Khác

Nếu bạn muốn thêm Spline vào section khác (ví dụ: About, Projects):

#### Bước 1: Import SplineViewer
```javascript
import SplineViewer from "@/components/SplineViewer";
```

#### Bước 2: Sử dụng component
```javascript
<div className="h-[500px]">
  <SplineViewer 
    url="https://prod.spline.design/YOUR_PROJECT_ID/scene" 
    title="My Model"
  />
</div>
```

#### Bước 3: Bọc với AnimatedSection (tùy chọn)
```javascript
<AnimatedSection direction="right">
  <div className="h-[500px]">
    <SplineViewer url="..." title="..." />
  </div>
</AnimatedSection>
```

---

## Phần 3: Kết Hợp Animation + Spline

### 3.1 Hero Section
- Text animate từ trái sang với stagger effect
- Spline model animate từ dưới lên
- Scroll indicator animate lên xuống liên tục

### 3.2 Gallery Section
- Tiêu đề animate từ dưới lên
- Mỗi project card animate lần lượt (cascade)
- Nút "View All" animate từ dưới lên

### 3.3 About Section
- Hình ảnh animate từ trái sang
- Text animate từ phải sang
- Tạo hiệu ứng "reveal" khi cuộn

---

## Phần 4: Troubleshooting

### Vấn Đề 1: Spline không tải
**Nguyên nhân:** URL không đúng hoặc project không public

**Cách sửa:**
1. Kiểm tra URL có đúng không
2. Đảm bảo project Spline là public
3. Thử refresh trang (F5)

### Vấn Đề 2: Animation quá nhanh/chậm
**Cách sửa:**
1. Mở file `AnimatedSection.tsx` hoặc `AnimatedItem.tsx`
2. Thay đổi `duration` (xem mục 1.3)

### Vấn Đề 3: Animation không hoạt động
**Cách sửa:**
1. Kiểm tra import `AnimatedSection` có đúng không
2. Đảm bảo bọc component bên trong `<AnimatedSection>`
3. Kiểm tra console (F12) xem có lỗi không

### Vấn Đề 4: Spline loading mãi không xong
**Cách sửa:**
1. Kiểm tra kết nối internet
2. Thử tắt adblock
3. Thử trên trình duyệt khác

---

## Phần 5: Mẹo Nâng Cao

### Mẹo 1: Tạo Spline Model Tương Tác
- Thêm click handlers trong Spline
- Thêm animation khi hover
- Thêm scroll trigger

### Mẹo 2: Tối Ưu Hóa Performance
- Giảm độ phức tạp của mô hình 3D
- Sử dụng LOD (Level of Detail)
- Tối ưu hóa texture

### Mẹo 3: Kết Hợp Với Tailwind
```javascript
<AnimatedSection direction="up">
  <div className="p-8 rounded-lg bg-gradient-to-r from-[#FF006E] to-[#FF1493]">
    Nội dung
  </div>
</AnimatedSection>
```

---

## Phần 6: Danh Sách File Liên Quan

| File | Mục Đích |
|------|---------|
| `AnimatedSection.tsx` | Component wrapper cho scroll animation |
| `AnimatedItem.tsx` | Component cho item animation trong lưới |
| `SplineViewer.tsx` | Component nhúng Spline 3D model |
| `Hero.tsx` | Hero section với Spline + animation |
| `Gallery.tsx` | Gallery với item animation |
| `About.tsx` | About section với section animation |
| `Services.tsx` | Services với item animation |
| `Projects.tsx` | Projects với section animation |
| `Testimonials.tsx` | Testimonials với item animation |
| `Contact.tsx` | Contact với section animation |
| `Footer.tsx` | Footer với section animation |

---

## Chúc Bạn Thành Công!

Bây giờ bạn đã có:
- ✅ Hiệu ứng cuộn trang mượt mà
- ✅ Mô hình 3D Spline tương tác
- ✅ Animation cascade cho các item
- ✅ Cảm giác động và chuyên nghiệp

Hãy thử tùy chỉnh và tạo ra website Portfolio 3D độc đáo của bạn! 🚀
