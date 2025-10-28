import type React from "react"
import type { Metadata } from "next"
import PlausibleProvider from "next-plausible"

import "./globals.css"

export const metadata: Metadata = {
  title: "Hassan El Mghari",
  description:
    "Developer living in New York City. Building open source AI apps and leading Developer Experience at Together AI.",
  metadataBase: new URL("https://nutlope.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Hassan El Mghari",
    description: "Developer living in New York City",
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
    description: "Developer living in New York City.",
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
      <head>
        <PlausibleProvider domain="nutlope.com" />
      </head>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
