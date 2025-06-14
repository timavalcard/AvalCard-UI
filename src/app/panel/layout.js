import '@/styles/globals.css'

import Footer from "@/components/layout/panel/footer/Footer";
import Header from "@/components/layout/panel/header/Header";
import Panel from "@/components/ui/panel/Panel";
import Sidebar from "@/components/layout/panel/sidebar/SideBar";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import FancyProgressBar from '@/components/FancyProgressBar';

export const metadata = {
  title: {
    default: "اول کارت",
    template: "%s | اول کارت",
  },
};

export default function RootLayout({ children }) {
  const token = cookies().get("token")?.value;

     if (!token) {
       redirect("/login");
     }
  return (
    <html lang="en" dir="rtl">
      <body>
      <FancyProgressBar />
        <div className={`flex items-stretch`}>
          <Sidebar />
          <div className="mr-5 py-5 min-h-dvh lg:ml-8 ml-5 w-full grid grid-cols-1" style={{ gridTemplateRows: 'auto 1fr auto' }}>
            <Header />
            <div className=''>
              {children}
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
