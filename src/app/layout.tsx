import type { Metadata } from "next";
import type { ReactNode } from "react";


import { Toaster } from "@/components/ui/toaster";


import "./globals.css";

export const metadata: Metadata = {
  applicationName: "Fenders",
  title: "Fenders",
  description: "Token Vesting & Streaming on Algorand",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#000000]">
        <div id="root" className="bg-[#000000] min-h-screen">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
