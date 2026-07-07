import type { Metadata } from "next";
import "./globals.css";

const title = "8Units — видеопродакшн для брендов и компаний";
const description =
  "8Units помогает брендам и компаниям превратить задачу в понятную историю: подобрать формат, собрать команду и довести проект до готового результата.";

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
