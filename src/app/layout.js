import localFont from "next/font/local";
import "@richaadgigi/stylexui/css/xui.css"
import "./styles.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Hensard University - All Portals",
  description: "Get access to all the university's portals from one single page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`xui-font-9`}>
        {children}
      </body>
    </html>
  );
}
