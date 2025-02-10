import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chung Chih-han | Personal Portfolio",
  description:
    "chih-han is a post-graduate student at the university of Taiwan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gradient-to-bl from-[#fbe2e3] via-white to-[#dbd7fb] text-gray-950 relative pt-28 sm:pt-36`}
      >
        {/* <div className="absolute inset-0 -z-10 h-full w-full">
          <div className="absolute top-[-6rem] right-[11rem] h-[50vh] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#fbe2e3] dark:bg-[#946263]"></div>
          <div className="absolute bottom-[-10rem] left-[-35rem] h-[50vh] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#dbd7fb] dark:bg-[#676394]"></div>
        </div> */}

        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
