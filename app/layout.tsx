import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hassan El Mghari",
  description:
    "Developer living in New York City. Building open source AI apps and leading Developer Experience at Together AI.",
  generator: "v0.app",
  metadataBase: new URL("https://nutlope.com"),
  openGraph: {
    title: "Hassan El Mghari",
    description:
      "Developer living in New York City. Building open source AI apps and leading Developer Experience at Together AI.",
    url: "https://nutlope.com",
    siteName: "Hassan El Mghari",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hassan El Mghari",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan El Mghari",
    description:
      "Developer living in New York City. Building open source AI apps and leading Developer Experience at Together AI.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
