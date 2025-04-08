import { Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../context/AuthContext"; // Updated path

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
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}