import type { Metadata } from "next";
import "../css/globals.css";

export const metadata: Metadata = {
  title: "Mahery Randrianirina | Portfolio",
  description: "Développeur web passioné. Aucune limite comme un sayan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
