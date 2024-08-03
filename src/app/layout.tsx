/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "@/styles/globals.css";
import { GlobalProviders } from "@/contexts/GlobalProviders";

export const metadata: Metadata = {
  title: "Bout | Software Development",
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
      <body>
        <GlobalProviders>
          {children}
        </GlobalProviders>
      </body>
    </html>
  );
}
