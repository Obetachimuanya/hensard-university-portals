import "@richaadgigi/stylexui/css/xui.css"
import "./styles.css"

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
