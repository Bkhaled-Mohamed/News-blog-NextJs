import type { Metadata } from "next";
import { Trispace } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import WorldRandomNews from "./components/worldRandomNews";

const trispace = Trispace({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Newsly",
  description: "all the news you need in one place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={trispace.className}>
        <main className="px-2 md:px-20">
          <Header />
          <Navbar />
          <section className="flex justify-between">
            {children}
            <WorldRandomNews />
          </section>
        </main>
      </body>
    </html>
  );
}
