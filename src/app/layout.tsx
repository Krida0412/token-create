import { ThemeProviderWrapper } from "@/providers/themeProvider";
import { WalletAdapterProvider } from "@/providers/walletAdapterProvider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";  // Menggunakan Poppins dari Google Fonts
import "./globals.css";
import { UmiProvider } from "@/providers/umiProvider";
import Head from "next/head"; // Import Head untuk menambahkan link ke FontAwesome

// Menggunakan font Poppins
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"], display: "swap" });

export const metadata: Metadata = {
  title: "mintora | Token Creator Tool",
  description:
    "Create Solana tokens easily with mintora's Token Creator Tool. No coding required, secure, and fast token creation platform for the Solana blockchain.",
  keywords:
    "Solana, Token Creator, SPL Token, Cryptocurrency, Blockchain, Web3, DeFi, mintora",
  authors: [{ name: "mintora" }],
  openGraph: {
    title: "mintora | Token Creator Tool",
    description:
      "Create Solana tokens easily with mintora's Token Creator Tool. No coding required, secure, and fast token creation platform.",
    url: "https://mintora.xyz",
    siteName: "mintora",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "mintora Token Creator Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mintora | Token Creator Tool",
    description:
      "Create Solana tokens easily with mintora's Token Creator Tool",
    creator: "@mintora",
    images: ["/assets/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://mintora.xyz",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#7C3AED",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WalletAdapterProvider>
      <UmiProvider>
        <html lang="en">
          <Head>
            {/* Link FontAwesome */}
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            />
          </Head>
          <body className={poppins.className}> {/* Menggunakan font Poppins */}
            <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
          </body>
        </html>
      </UmiProvider>
    </WalletAdapterProvider>
  );
}
