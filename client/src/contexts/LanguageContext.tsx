import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = "EN" | "VI" | "ZH";

// Tự tạo Dictionary 3 ngôn ngữ
const dictionary = {
  EN: {
    heroTitle: "HI, I'M",
    heroSubtitle: "I'm a Product Designer specializing in crafting intuitive digital experiences, scalable design systems, and user-centric interfaces.",
    heroDesc: "With 5+ years of experience in UX/UI, wireframing, and interactive prototyping, I've helped startups and leading brands turn complex problems into seamless, elegant digital products.",
    contactMe: "CONTACT ME",
    viewWork: "VIEW MY WORK",
    aboutHeading: "About Me",
    aboutText1: "I bridge the gap between design and technology. My work focuses on building robust design systems, optimizing user flows, and creating pixel-perfect interfaces that solve real business problems.",
    aboutText2: "Whether it's a complex B2B SaaS platform or an engaging consumer mobile app, I approach every project with a user-first mindset, ensuring the final product is not just beautiful, but incredibly functional.",
    projectsHeading: "Featured Projects",
    viewAllProjects: "VIEW ALL PROJECTS",
    allProjectsDesc: "A complete archive of all featured Product Design, UX/UI, and interactive digital experiences.",
    "Product Design": "Product Design",
    "Architecture": "Architecture",
    "Motion Graphics": "Motion Graphics",
    "3D Animation": "3D Animation",
  },
  VI: {
    heroTitle: "CHÀO BẠN, TÔI LÀ",
    heroSubtitle: "Tôi là Product Designer chuyên sáng tạo các trải nghiệm số trực quan, hệ thống thiết kế mở rộng và giao diện lấy người dùng làm trung tâm.",
    heroDesc: "Với hơn 5 năm kinh nghiệm trong lĩnh vực UX/UI, wireframing và prototyping tương tác, tôi đã giúp các startup và thương hiệu hàng đầu biến những vấn đề phức tạp thành sản phẩm số hoàn hảo, tinh tế.",
    contactMe: "LIÊN HỆ NGAY",
    viewWork: "XEM DỰ ÁN",
    aboutHeading: "Về Tôi",
    aboutText1: "Tôi là cầu nối giữa thiết kế và công nghệ. Công việc của tôi tập trung vào việc xây dựng hệ thống thiết kế mạnh mẽ, tối ưu hóa luồng người dùng và tạo ra giao diện sắc nét để giải quyết các vấn đề kinh doanh thực tế.",
    aboutText2: "Cho dù đó là một nền tảng B2B SaaS phức tạp hay ứng dụng di động cho người tiêu dùng, tôi luôn tiếp cận mọi dự án với tư duy đặt người dùng lên hàng đầu, đảm bảo sản phẩm cuối cùng không chỉ đẹp mắt mà còn hoạt động cực kỳ hiệu quả.",
    projectsHeading: "Dự Án Nổi Bật",
    viewAllProjects: "XEM TẤT CẢ DỰ ÁN",
    allProjectsDesc: "Kho lưu trữ toàn bộ các dự án Thiết kế Sản phẩm, UX/UI và trải nghiệm số nổi bật.",
    "Product Design": "Thiết kế sản phẩm",
    "Architecture": "Kiến trúc",
    "Motion Graphics": "Đồ họa chuyển động",
    "3D Animation": "Hoạt hình 3D",
  },
  ZH: {
    heroTitle: "你好，我是",
    heroSubtitle: "我是一名产品设计师，专注于打造直观的数字体验、可扩展的设计系统和以用户为中心的界面。",
    heroDesc: "凭借5年以上的UX/UI、线框图和交互式原型设计经验，我帮助初创公司和领先品牌将复杂问题转化为无缝、优雅的数字产品。",
    contactMe: "联系我",
    viewWork: "查看作品",
    aboutHeading: "关于我",
    aboutText1: "我是设计与技术之间的桥梁。我的工作重点是构建强大的设计系统、优化用户流程，并创造完美的界面来解决实际业务问题。",
    aboutText2: "无论是一个复杂的B2B SaaS平台还是吸引人的消费级移动应用，我都以用户至上的心态来处理每一个项目，确保最终产品不仅美观，而且功能极强。",
    projectsHeading: "精选项目",
    viewAllProjects: "查看所有项目",
    allProjectsDesc: "所有精选的产品设计、UX/UI和互动数字体验的完整档案。",
    "Product Design": "产品设计",
    "Architecture": "建筑学",
    "Motion Graphics": "动态图形",
    "3D Animation": "3D动画",
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof dictionary.EN) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLang] = useState<Language>("EN");

  useEffect(() => {
    const stored = localStorage.getItem("preferredLanguage");
    if (stored === "EN" || stored === "VI" || stored === "ZH") {
      setLang(stored as Language);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLang(lang);
    localStorage.setItem("preferredLanguage", lang);
  };

  const t = (key: keyof typeof dictionary.EN) => {
    return dictionary[language][key] || dictionary["EN"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
