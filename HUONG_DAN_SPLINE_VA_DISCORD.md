# Hướng Dẫn Spline 3D Interactive & Discord Popup

## Phần 1: Spline 3D Interactive

### 1.1 Cách Hoạt Động

Component `SplineInteractive` cung cấp các trigger tương tác:

| Trigger | Mô Tả |
|---------|-------|
| **Hover** | Khi di chuột vào mô hình, nó sẽ phóng to nhẹ (scale 1.02) |
| **Click** | Khi click vào mô hình, trigger "click" được kích hoạt |
| **Scroll** | Khi cuộn trang và mô hình xuất hiện trong viewport |

### 1.2 Thay Đổi Spline URL

**File:** `client/src/components/modules/Hero.tsx`

**Dòng 21:**
```javascript
const SPLINE_URL = "https://prod.spline.design/wgI90cJyjVIqgKwS/scene";
```

**Cách thay đổi:**
1. Vào https://spline.design
2. Mở hoặc tạo project 3D
3. Nhấn "Share" → "Share as embed"
4. Copy URL từ iframe `src`
5. Dán vào `SPLINE_URL`

**Ví dụ:**
```javascript
// Trước
const SPLINE_URL = "https://prod.spline.design/wgI90cJyjVIqgKwS/scene";

// Sau
const SPLINE_URL = "https://prod.spline.design/YOUR_PROJECT_ID/scene";
```

### 1.3 Tùy Chỉnh Trigger Behavior

**File:** `client/src/components/SplineInteractive.tsx`

#### Thay Đổi Scale Khi Hover
```javascript
// Dòng 39
iframeRef.current.style.transform = "scale(1.02)"; // Thay 1.02 bằng giá trị khác
```

Các giá trị khác:
- `scale(1)` - Không phóng to
- `scale(1.05)` - Phóng to 5%
- `scale(1.1)` - Phóng to 10%

#### Thay Đổi Thời Gian Transition
```javascript
// Dòng 62
className="... transition-transform duration-300" // duration-300 = 300ms
```

Các giá trị khác:
- `duration-100` = 100ms
- `duration-200` = 200ms
- `duration-500` = 500ms
- `duration-1000` = 1000ms

### 1.4 Thêm Custom Trigger

Nếu bạn muốn thêm trigger tùy chỉnh:

```javascript
// Trong SplineInteractive.tsx, thêm event listener mới
const handleCustomEvent = () => {
  onTrigger?.("custom");
};

// Thêm vào container
container.addEventListener("dblclick", handleCustomEvent);
```

---

## Phần 2: Discord Popup

### 2.1 Cách Hoạt Động

Discord Popup sẽ:
- Hiển thị 1 giây sau khi mở web
- Chỉ hiển thị một lần mỗi session (dùng sessionStorage)
- Có nút "Join Discord" và "Maybe Later"
- Tự động đóng khi click ngoài hoặc nhấn X

### 2.2 Thay Đổi Discord URL

**File:** `client/src/components/DiscordPopup.tsx`

**Dòng 16:**
```javascript
const DISCORD_URL = "https://discord.gg/"; // Thay bang URL Discord cua ban
```

**Cách lấy URL Discord:**
1. Vào Discord server của bạn
2. Nhấn chuột phải vào server name
3. Chọn "Invite People"
4. Copy invite link

**Ví dụ:**
```javascript
// Trước
const DISCORD_URL = "https://discord.gg/";

// Sau
const DISCORD_URL = "https://discord.gg/abc123def456";
```

### 2.3 Tùy Chỉnh Popup

#### Thay Đổi Delay Hiển Thị
**File:** `client/src/components/DiscordPopup.tsx`

**Dòng 31:**
```javascript
const timer = setTimeout(() => {
  setIsOpen(true);
}, 1000); // 1000ms = 1 giây
```

Các giá trị khác:
- `500` = 0.5 giây
- `2000` = 2 giây
- `3000` = 3 giây

#### Thay Đổi Tiêu Đề Popup
**Dòng 59:**
```javascript
<h2 className="text-3xl md:text-4xl font-bold text-white">
  Join Our Discord Community
</h2>
```

Thay bằng tiêu đề của bạn:
```javascript
<h2 className="text-3xl md:text-4xl font-bold text-white">
  Join Our Gaming Community
</h2>
```

#### Thay Đổi Nội Dung Popup
**Dòng 66:**
```javascript
<p className="text-gray-300 text-lg mb-6 leading-relaxed text-center">
  Connect with our community, share your projects, get feedback, and collaborate with
  other designers and developers. Join thousands of members already part of our
  growing community!
</p>
```

#### Thay Đổi Các Feature Icons
**Dòng 73-85:**
```javascript
<div className="grid grid-cols-3 gap-4 mb-8">
  <div className="text-center p-4 rounded-lg bg-[#0A0A0A] border border-[#6366F1]/20">
    <div className="text-2xl mb-2">🎮</div> {/* Thay emoji này */}
    <p className="text-sm text-gray-400">Gaming</p> {/* Thay text này */}
  </div>
  {/* ... */}
</div>
```

### 2.4 Tắt Popup (Nếu Cần)

Nếu bạn muốn tắt popup tạm thời:

**File:** `client/src/App.tsx`

Tìm dòng:
```javascript
<DiscordPopup />
```

Thay bằng:
```javascript
{/* <DiscordPopup /> */}
```

### 2.5 Hiển Thị Lại Popup

Nếu bạn muốn popup hiển thị lại:

1. Mở DevTools (F12)
2. Vào Console
3. Chạy lệnh:
```javascript
sessionStorage.removeItem("discordPopupShown");
location.reload();
```

---

## Phần 3: Color Scheme (Xanh Lam/Tím)

### 3.1 Các Màu Chính

| Màu | Hex | Sử Dụng |
|-----|-----|--------|
| Indigo | #6366F1 | Màu chính, nút, border |
| Purple | #8B5CF6 | Gradient, hover |
| Light Purple | #A78BFA | Accent |
| Violet | #7C3AED | Hover effect |

### 3.2 Thay Đổi Color Scheme

**File:** `client/src/index.css`

**Dòng 54-63:**
```css
:root {
  /* Màu xanh lam/tím nhấn - Dark Blue/Purple gradient */
  --primary: #6366F1;
  --primary-foreground: #FFFFFF;
  --sidebar-primary: #6366F1;
  --sidebar-primary-foreground: #FFFFFF;
  --chart-1: #6366F1;
  --chart-2: #8B5CF6;
  --chart-3: #A78BFA;
  --chart-4: #C4B5FD;
  --chart-5: #DDD6FE;
}
```

Để thay đổi toàn bộ màu sắc, chỉ cần thay đổi `--primary` và các giá trị liên quan.

---

## Phần 4: Troubleshooting

### Vấn Đề 1: Spline không tải
**Nguyên nhân:** URL không đúng hoặc project không public

**Cách sửa:**
1. Kiểm tra URL có đúng không
2. Đảm bảo project Spline là public
3. Thử refresh trang (F5)

### Vấn Đề 2: Discord Popup không hiển thị
**Nguyên nhân:** Đã hiển thị trong session này

**Cách sửa:**
1. Mở DevTools (F12)
2. Vào Console
3. Chạy: `sessionStorage.removeItem("discordPopupShown"); location.reload();`

### Vấn Đề 3: Hover effect không hoạt động
**Nguyên nhân:** CSS transition không được áp dụng

**Cách sửa:**
1. Kiểm tra class `transition-transform duration-300` có trong element không
2. Kiểm tra CSS có bị override không

### Vấn Đề 4: Màu sắc không đổi
**Nguyên nhân:** Cache browser

**Cách sửa:**
1. Xóa cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+Shift+R)

---

## Phần 5: Mẹo Nâng Cao

### Mẹo 1: Tạo Spline Model Tương Tác
- Trong Spline, thêm click events
- Thêm animation triggers
- Export scene với interactions

### Mẹo 2: Tối Ưu Hóa Performance
- Giảm độ phức tạp model 3D
- Sử dụng LOD (Level of Detail)
- Tối ưu texture

### Mẹo 3: Kết Hợp Với Framer Motion
```javascript
<AnimatedSection direction="right">
  <SplineInteractive url={SPLINE_URL} />
</AnimatedSection>
```

---

## Danh Sách File Liên Quan

| File | Mục Đích |
|------|---------|
| `SplineInteractive.tsx` | Component Spline với trigger |
| `SplineViewer.tsx` | Component Spline cơ bản |
| `DiscordPopup.tsx` | Popup Discord |
| `Hero.tsx` | Hero section với Spline |
| `index.css` | Color scheme |
| `App.tsx` | Thêm DiscordPopup |

---

## Chúc Bạn Thành Công!

Bây giờ bạn đã có:
- ✅ Spline 3D tương tác với trigger
- ✅ Discord Popup tự động
- ✅ Color scheme xanh lam/tím
- ✅ Animation mượt mà

Hãy tùy chỉnh và tạo ra website Portfolio 3D độc đáo của bạn! 🚀
