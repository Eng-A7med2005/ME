import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// ThemeProvider removed - using fixed blue dark theme

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ahmed Salah Fouda - AI & Data Science Engineer",
  description: "AI & Data Science Engineer skilled in Machine Learning, Deep Learning, and AI Agents. Building intelligent platforms and automation systems.",
  keywords: ["AI", "Data Science", "Machine Learning", "Deep Learning", "Python", "Portfolio"],
  authors: [{ name: "Ahmed Salah Fouda" }],
  openGraph: {
    title: "Ahmed Salah Fouda - AI & Data Science Engineer",
    description: "AI & Data Science Engineer skilled in Machine Learning, Deep Learning, and AI Agents.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}