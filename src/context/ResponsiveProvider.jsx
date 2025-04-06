"use client";
import { createContext, useContext, useEffect, useState } from "react";
import AuthChecker from "../components/layout/auth/authChecker";

// تعریف کانتکست با مقدار پیش‌فرض
const ResponsiveContext = createContext({
  device: "laptop", // پیش‌فرض لپتاپ
  width: 1024,      // پیش‌فرض عرض
});

export function ResponsiveProvider({ children }) {
  // مقدار اولیه عرض صفحه: اگر window موجود نباشد از 1024 استفاده می‌کند
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [device, setDevice] = useState("laptop");

  const updateMedia = () => {
    if (typeof window !== "undefined") {
      const currentWidth = window.innerWidth;
      setWidth(currentWidth);
      if (currentWidth < 768) {
        setDevice("mobile");
      } else if (currentWidth >= 768 && currentWidth < 1024) {
        setDevice("tablet");
      } else {
        setDevice("laptop");
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // به‌روز رسانی اولیه و افزودن listener برای تغییر اندازه
      updateMedia();
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    }
  }, []);

  return (
    <ResponsiveContext.Provider value={{ device, width }}>
      <AuthChecker />
      {children}
    </ResponsiveContext.Provider>
  );
}

// هوک سفارشی برای استفاده آسان از کانتکست
export const useResponsive = () => useContext(ResponsiveContext);
