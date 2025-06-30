// useRouteLoader.js
'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function useRouteLoader() {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a');
      if (
        link &&
        link.href &&
        link.origin === window.location.origin &&
        link.pathname !== window.location.pathname
      ) {
        setLoading(true);
      }
    };

    const handleComplete = () => {
      // وقتی صفحه کامل لود شد، یه تاخیر کوچیک بدیم تا لودر نرم‌ و طبیعی تموم بشه
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setLoading(false);
      }, 300); // مثلاً 300ms برای طبیعی بودن
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('popstate', handleComplete);
    window.addEventListener('load', handleComplete);

    const originalPrefetch = router.prefetch;
    router.prefetch = () => {};

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('popstate', handleComplete);
      window.removeEventListener('load', handleComplete);
      router.prefetch = originalPrefetch;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [router]);

  // هر بار مسیر تغییر کرد (navigation)، آماده بشیم برای خاموش کردن لودر بعد از لود کامل
  useEffect(() => {
    if (loading) {
      // بعد از render صفحه جدید، صبر کن تا مرورگر idle شه یا لود کامل شه
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          setLoading(false);
        });
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 500); // fallback
      }
    }
  }, [pathname]);

  return loading;
}
