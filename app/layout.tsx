import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "SoftEdge - SaaS Demo",
  description:
    "An enterprise SaaS demo platform by SoftEdge Development, showcasing multi-tenant architecture, analytics, billing, and enterprise-grade UX/UI.",
  generator: "Next.js 15 + SoftEdge Development",
  applicationName: "SoftEdge SaaS Demo",
  keywords: [
    "SoftEdge",
    "SaaS Demo",
    "Enterprise Software",
    "Multi-Tenant",
    "Analytics",
    "Next.js",
    "Tailwind",
  ],
  authors: [{ name: "SoftEdge Development", url: "https://softedge.dev" }],
  creator: "SoftEdge Development",
  publisher: "SoftEdge Development",
  openGraph: {
    title: "SoftEdge - SaaS Demo",
    description:
      "Enterprise SaaS demo showcasing dashboards, billing, and enterprise-ready features.",
    url: "https://your-demo-url.com",
    siteName: "SoftEdge SaaS Demo",
    images: [
      {
        url: "/image1.png",
        width: 1200,
        height: 630,
        alt: "SoftEdge SaaS Demo Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftEdge - SaaS Demo",
    description:
      "Interactive demo of enterprise SaaS platform features — built with Next.js, Tailwind, and modern UI/UX.",
    images: ["/image1.png"],
    creator: "@SoftEdgeDev",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
