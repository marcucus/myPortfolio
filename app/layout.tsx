import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adrien Marques - Fullstack Developer",
  description: "Portfolio de Adrien Marques, développeur Fullstack spécialisé en React, Node.js, et Python",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
