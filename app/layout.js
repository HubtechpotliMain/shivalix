import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Shivalix Forex - Currency Exchange & Money Transfers",
  description: "Get the best exchange rates on currency, forex cards, and money transfers from India. Fast, easy, and trusted.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
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
