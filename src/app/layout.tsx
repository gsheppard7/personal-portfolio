import type { Metadata } from "next";
import { siteMeta } from "../components/portfolio/content";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteMeta.name} · ${siteMeta.role}`,
  description: siteMeta.tagline,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: `${siteMeta.name} · Portfolio`,
    description: siteMeta.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
