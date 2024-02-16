import "./globals.css";
import { Metadata } from "next";
import { Toaster } from "sonner";
import Navbar from "@/components/navbar";
import { Onest } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/components/theme-provider";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online Store",
  description: "The best online store in the world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.className} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <Navbar />
            {children}
            <Toaster />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
