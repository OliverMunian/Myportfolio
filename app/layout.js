import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Olivier Malahel",
  description: "Welcome on portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}
