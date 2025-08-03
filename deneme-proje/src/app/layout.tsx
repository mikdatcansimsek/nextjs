import type { Metadata } from "next";
import "./globals.css";  // ← Bu satırı kontrol et

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}