import "./globals.css";
import Script from "next/script";
import Header from "@/app/components/Header";
import FooterSection from "@/app/components/FooterSection";
export const metadata = {
  title: "Lavosh Bakery",
  icons: {
    icon: "/favicon.svg", // from /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Header className="shrink-0" />

        {/* main 自动填满中间剩余高度 */}
        <main className="flex-1 flex flex-col">{children}</main>

        <FooterSection className="shrink-0" />
      </body>

      <Script
        src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1"
        type="module"
      />
    </html>
  );
}
