import localFont from "next/font/local";
import {
  DM_Sans,
  Inter,
  Instrument_Sans,
  Urbanist,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";
import CustomQueryProvider from "./react-query/CustomQueryProvider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm_sans",
});

const getInter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Inter",
});

const getIntrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Inter",
});

const getUrbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urbanist",
});

const getMontserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Web & Mobile App Development Company",
  description: "Web & Mobile App Development Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${getInter.variable} ${dmSans.variable}  ${getIntrument.variable}  ${getInter.variable} ${getMontserrat.variable} ${getUrbanist.variable}`}
      >
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900"
          rel="stylesheet"
        />
        <CustomQueryProvider>
          <Header />
          {children}
          <Footer />
        </CustomQueryProvider>
      </body>
    </html>
  );
}
