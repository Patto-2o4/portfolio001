/**
 * COMPONENT: SplineViewer
 * =======================
 * Mục đích: Nhúng mô hình 3D từ Spline vào website
 * 
 * Cách sử dụng:
 * <SplineViewer url="https://prod.spline.design/xxxxx/scene" />
 * 
 * Hướng dẫn lấy URL từ Spline:
 * 1. Vào https://spline.design
 * 2. Tạo hoặc mở project 3D
 * 3. Nhấn "Share" → "Share as embed"
 * 4. Copy URL từ iframe src
 * 5. Dán vào component này
 */

interface SplineViewerProps {
  url: string;
  title?: string;
}

export default function SplineViewer({
  url,
  title = "3D Model",
}: SplineViewerProps) {
  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-[#FF006E]/20 group">
      {/* Loading State */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] flex items-center justify-center z-10">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-spin">⚙️</div>
          <p className="text-gray-400">Loading {title}...</p>
        </div>
      </div>

      {/* Spline Iframe */}
      <iframe
        title={title}
        src={url}
        frameBorder="0"
        width="100%"
        height="100%"
        className="w-full h-full"
        style={{
          border: "none",
          borderRadius: "24px",
        }}
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF006E]/0 via-[#FF006E]/10 to-[#FF006E]/0"></div>
      </div>
    </div>
  );
}
