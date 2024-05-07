import type { Metadata } from "next";
import "./globals.css";
import { GlobalProviders } from "@/contexts/GlobalProviders";


export const metadata: Metadata = {
  title: "Bout",
  description: "A software development company that will build what you need to grow your business, or even start one!",
  keywords: ["software", "development", "business", "website", "mobile", "app", "iot", "tech", "company"],
  icons: "/BoutLogoSolo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body>
        <GlobalProviders>
          {children}
        </GlobalProviders>
      </body>
    </html>
  );
}
