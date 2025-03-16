import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/landing-page/Footer";

export const metadata: Metadata = {
  title: "Rentals | EventTrio",
  description:
    "EventTrio is a platform for renting tuxedos, designer bags, and booking rides.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
