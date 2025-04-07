import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { TopNav } from "../components/TopNav";
import { SideNav } from "../components/SideNav";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillForge",
  description: "Educational website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <TopNav />
        <div className="flex pt-16 min-h-screen"> 
          <SideNav />
          <main className="flex-1 p-6 bg-gray-50">{children}</main>
        </div>
      </body>
    </html>
  );
}
