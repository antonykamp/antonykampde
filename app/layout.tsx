import "../styles/globals.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Antony Kamp | Resume",
    template: "%s | Antony Kamp",
  },
  description:
    "Hi! I'm Antony 👋 I work on various exciting scientific software projects and study IT-Systems Engineering M.Sc. at the HPI, Potsdam.",
  keywords: [
    "Antony Kamp",
    "Developer",
    "Project",
    "Contribution",
    "Science",
    "HPI",
    "Potsdam",
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
      </body>
    </html>
  );
}
