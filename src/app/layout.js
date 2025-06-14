import Providers from '@/providers/Providers';
import '@/styles/globals.css'
import "swiper/css";
import "swiper/css/navigation";

export const metadata = {
  title: {
    default: "اول کارت",
    template: "%s | اول کارت",
  },
  icons: {
    icon: "/images/logo-sm.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body>
            <Providers>
              {children}
            </Providers>

      </body>
    </html>
  );
}
