import type { Metadata } from "next";
import "./globals.css";

const title = "8Units — видеопродакшн для брендов и компаний";
const description =
  "8Units создает видеопроекты под бизнес-задачи: корпоративные фильмы, рекламные ролики, digital-контент, видео для событий и видеопродакшн полного цикла.";

export const metadata: Metadata = {
  metadataBase: new URL("https://8units-site.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    images: ["/og-image.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
