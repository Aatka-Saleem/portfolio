

// src/app/layout.tsx
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aatka | AI & Machine Learning Engineer",
  description:
    "Portfolio of Aatka , specializing in Multi-Agent Systems, Advanced RAG, and Production ML Pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a] dark:bg-[#090a0f] dark:text-[#f1f5f9] bg-grid-pattern relative selection:bg-[#38bdf8]/20 selection:text-[#38bdf8] transition-colors duration-200">
        <div className="fixed inset-0 bg-radial-gradient pointer-events-none -z-10" />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          enableColorScheme={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}