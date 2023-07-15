import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { AiFillLinkedin, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jack Mkimbo",
  description: "Software Engineer based in Mombasa, Kenya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-screen">
      <body className={`${inter.className} flex flex-col h-full text-white`}>
        <header className="z-50 fixed top-0 w-full">
          <Navbar />
        </header>
        <main className="flex-grow h-full px-4 pt-16 pb-5 bg-black flex flex-col-reverse sm:flex-row">
          <div className="w-auto h-fit hidden bg-black mx-auto lg:flex flex-row lg:w-30 lg:fixed lg:top-1/2 lg:flex-col-reverse">
            <div className="lg:-rotate-90 lg: mt-14">Follow Me</div>
            <div className="mx-auto mt-7 w-10 h-px bg-white lg:-rotate-90"></div>
            <div className="text-center flex flex-row lg:rotate-90 lg:mb-7 relative">
              <AiFillLinkedin fontSize={20} className="mx-auto lg:-rotate-90" />
              <AiFillGithub fontSize={20} className="mx-auto lg:-rotate-90" />
              <AiOutlineTwitter
                fontSize={20}
                className="mx-auto lg:-rotate-90"
              />
            </div>
          </div>

          <div className="w-full h-full"> {children}</div>
        </main>
        <footer className="bg-black z-50 fixed bottom-0 w-full flex flex-row">
          <div className="hidden lg:flex mx-auto">
            <span> Code </span>
            <a
              href="https://github.com/mkimbo"
              className="text-blue-500"
              target="_blank"
            >
              @mkimbo
            </a>
          </div>
          <div className="w-auto h-fit flex bg-black mx-auto lg:hidden flex-row lg:w-30 lg:fixed lg:top-1/2 lg:flex-col-reverse">
            <div className="text-sm text-gray-400">Follow Me</div>
            <div className="mx-3 w-7 h-px my-auto bg-white"></div>
            <div className="text-center flex flex-row">
              <a href="https://github.com/mkimbo" target="_blank">
                <AiFillGithub fontSize={20} className="mx-1" />
              </a>
              <a href="https://www.linkedin.com/in/jackmkimbo/" target="_blank">
                <AiFillLinkedin fontSize={20} className="mx-1" />
              </a>
              <a href="https://twitter.com/JackMkimbo" target="_blank">
                <AiOutlineTwitter fontSize={20} className="mx-1" />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
