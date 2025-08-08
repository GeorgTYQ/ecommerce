import "./globals.css";
import Script from "next/script";
export const metadata = {
  title: "Lavosh Bakery",
  icons: {
    icon: "/favicon.svg", // from /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
      <Script
        src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1"
        type="module"
      />
    </html>
  );
}
