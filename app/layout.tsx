import type { Metadata } from "next";
import { Geist_Mono, Geist, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme";
import { Toaster } from "@/shared/ui/sonner";

import { SyncUserProvider } from "@/providers/sync-user";
import { ConvexClerkProvider } from "@/providers/convex-clerk";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "1Note",
  description: "Simple/fast note taking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <SyncUserProvider>
        <html lang="en" suppressHydrationWarning>
          <body
            className={`${geist.variable} ${geistMono.variable} ${firaCode.variable} overflow-hidden h-svh flex flex-col antialiased`}
          >
            <ThemeProvider
              enableSystem
              attribute="class"
              defaultTheme="system"
              disableTransitionOnChange
            >
              <main className="overflow-y-auto h-full w-full">{children}</main>
              <Toaster richColors position="bottom-right" />
            </ThemeProvider>
          </body>
        </html>
      </SyncUserProvider>
    </ConvexClerkProvider>
  );
}
