import '@/styles/globals.css'

import SubHeader from '@/components/layout/main/header/subHeader/SubHeader';
import Header from '@/components/layout/main/header/header/Header';
import Footer from '@/components/layout/main/header/footer/Footer';
import FancyProgressBar from '@/components/FancyProgressBar';
import SchemaOrg from "../../components/layout/Schema/SchemaOrg";

export const metadata = {
  title: {
    default: "اول کارت",
    template: "%s | اول کارت",
  },
  alternates: {
    canonical: 'https://avalcard.com/', // در اینجا شما می‌توانید URL داینامیک بسازید
  }
};

export default function RootLayout({ children }) {

  return (
    <html lang="fa" dir="rtl">
      <body>
        {/* <SubHeader /> */}
        <Header />
        <SchemaOrg />
        <FancyProgressBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
