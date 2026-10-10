import "../styles/globals.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    default: "Antony Kamp | Resume",
    template: "%s | Antony Kamp",
  },
  description:
    "Hi! I'm Antony 👋 Software Consultant at TNG Technology Consulting in Berlin, backend-leaning fullstack engineer with a focus on infrastructure.",
  keywords: [
    "Antony Kamp",
    "Developer",
    "Project",
    "Contribution",
    "Science",
    "HPI",
    "Potsdam",
    "Berlin",
    "TNG Technology Consulting",
    "Jena",
  ],
  authors: [{ name: "Antony Kamp" }],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            maxWidth: "100vw",
          }}
        >
          <Header />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
