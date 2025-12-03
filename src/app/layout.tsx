import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { AccentHydrator } from "@/components/theme/AccentHydrator";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://intentmesh.systems"),
  title: "IntentMesh | Pullsheet for Real Elevator Work",
  description:
    "Pullsheet by IntentMesh delivers legal-clean, offline-ready AI diagnostics for elevator crews with annotated field capture, controller training, and compliance built in.",
  keywords: [
    "Pullsheet",
    "IntentMesh",
    "elevator diagnostics",
    "AI field tools",
    "offline AI",
    "elevator maintenance software",
    "YC startup",
  ],
  openGraph: {
    title: "Pullsheet | IntentMesh",
    description:
      "Intent-driven elevator diagnostics, offline reasoning, and annotated capture—designed by active field techs.",
    url: "https://intentmesh.systems",
    siteName: "IntentMesh",
    images: [
      {
        url: "/og-intentmesh.png",
        width: 1200,
        height: 630,
        alt: "IntentMesh Pullsheet interface preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pullsheet | IntentMesh",
    description:
      "Intent-driven elevator diagnostics, offline reasoning, and annotated capture—designed by active field techs.",
    images: ["/og-intentmesh.png"],
  },
  alternates: {
    canonical: "https://intentmesh.systems",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IntentMesh",
    url: "https://intentmesh.systems",
    email: "hq@intentmesh.systems",
    sameAs: ["https://www.linkedin.com/company/intentmesh"],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Pullsheet",
    brand: {
      "@type": "Brand",
      name: "IntentMesh",
    },
    description:
      "Offline-capable elevator diagnostics and training platform with annotated capture, AI reasoning, and compliance controls.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      priceCurrency: "USD",
      price: "0",
    },
  };

  return (
    <html lang="en" className={`${manrope.variable} ${poppins.variable}`}>
      <body>
        <ThemeProvider>
          <AccentHydrator />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, productSchema]) }} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
