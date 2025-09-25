import "~/styles/globals.css";
import { type Metadata } from "next";
import { Geist } from "next/font/google";


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});




export default function LayoutPage02({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable}`}>
        <main className="">
        <div className="w-full">Second Layout YEAH!</div>
        {children}
        </main>
      </body>
    </html>
  );
}
