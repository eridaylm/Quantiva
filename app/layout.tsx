import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import { AuthProvider } from "@/context/AuthContext";
import { TestProvider } from "@/context/TestContext";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduDiagnostik - Tes Diagnostik Matematika Adaptif",
  description: "Platform diagnostik matematika adaptif untuk menemukan fondasi belajar sejati siswa jenjang SMA tanpa stigma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <AuthProvider>
              <TestProvider>
                {children}
              </TestProvider>
            </AuthProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
