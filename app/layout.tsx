import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LabVector – Ciência, Tecnologia e Modelagem em Ecologia e Vetores",
  description:
    "Laboratório de Ciência, Tecnologia e Modelagem em Ecologia e Vetores. Pesquisas em vigilância entomológica, modelagem espacial e inovação em saúde pública.",
  openGraph: {
    title: "LabVector – Ciência, Tecnologia e Modelagem em Ecologia e Vetores",
    description:
      "Pesquisas e inovação em ecologia, geoprocessamento e saúde pública no IFMA – Campus Bacabal.",
    url: "https://www.labvector.com.br",
    siteName: "LabVector",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Logo LabVector",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Corrige o problema do site cortando no celular */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
