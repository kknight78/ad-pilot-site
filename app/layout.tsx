import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ad Pilot",
  description: "Reach your community where they are.",
  openGraph: {
    title: "Ad Pilot",
    description: "Reach your community where they are.",
    // Put an og image here later, e.g. "/og.png"
    // images: [{ url: "/og.png", width: 1200, height: 630 }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
