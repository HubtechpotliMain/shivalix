import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  metadataBase: new URL("https://shivalixforex.com"),
  title: "Currency Exchange | Forex Cards and Money Transfer in India",
  description: "Shivalix Forex offers easy and safe currency exchange, forex cards, international money transfer and student forex services in India at best rates with trusted support.",
  keywords: "currency exchange India, forex cards India, international money transfer, student forex services, best forex rates India, travel forex card",
  authors: [{ name: "Shivalix Forex" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://shivalixforex.com/",
  },
  openGraph: {
    title: "Currency Exchange | Forex Cards and Money Transfer in India",
    description: "Easy and safe currency exchange, forex cards, and international money transfer services in India at best rates.",
    url: "https://shivalixforex.com/",
    siteName: "Shivalix Forex",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Currency Exchange | Forex Cards and Money Transfer in India",
    description: "Best forex services in India including currency exchange, forex cards and international money transfers.",
  },
};

export default function RootLayout({ children }) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Shivalix Forex",
    url: "https://shivalixforex.com/",
    logo: "https://shivalixforex.com/_next/image?url=%2Flogo%2Fimage.png&w=256&q=75",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9599516159 , +91-9211217755",
      contactType: "technical support",
      contactOption: "TollFree",
      areaServed: "IN",
      availableLanguage: ["en", "Hindi"],
    },
  };

  return (
    <html lang="en" data-theme="dark">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <ThemeProvider>
          <div className="w-full bg-n-1 border-b border-stroke-1">
            <div className="container flex flex-col items-center justify-center gap-1 py-2 text-xs text-n-13 md:flex-row md:justify-between px-4 sm:px-5">
              <a
                href="mailto:shivalixforex@gmail.com"
                className="hover:text-color-1 transition-colors text-center break-all sm:break-normal"
              >
                Email: shivalixforex@gmail.com
              </a>
              <span className="hidden md:inline text-n-6">|</span>
              <a
                href="tel:+919599516159"
                className="hover:text-color-1 transition-colors"
              >
                Call Us: 9599516159
              </a>
            </div>
          </div>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
