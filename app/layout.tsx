import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "EventTrio",
  description: "EventTrio is a platform for renting tuxedos, designer bags, and booking rides.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} antialiased`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
