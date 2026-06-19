import type { Metadata } from "next";
import { Poppins, Caveat } from "next/font/google";
import Navigation from "@/components/Navigation";
import DarkModeToggle from "@/components/DarkModeToggle";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Seán Redington - UX Portfolio",
  description: "A practical problem solver that does more than push pixels.",
  openGraph: {
    title: "Seán Redington - UX Portfolio",
    description: "A practical problem solver that does more than push pixels.",
    type: "website",
    images: [
      {
        url: "/about-hero/headshot-image.webp",
        width: 800,
        height: 800,
        alt: "Seán Redington",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seán Redington - UX Portfolio",
    description: "A practical problem solver that does more than push pixels.",
    images: ["/about-hero/headshot-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${caveat.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const darkMode = localStorage.getItem('darkMode');
                  if (darkMode === null || darkMode === 'true') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased relative bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <DarkModeProvider>
          <DarkModeToggle />
          <Navigation />
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
