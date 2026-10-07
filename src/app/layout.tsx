import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khush Amin | Software Engineer & Cloud Specialist",
  description:
    "Portfolio of Khush Amin — First-Class Honours Computer Science Graduate, Certified Oracle Cloud Professional, and .NET Full-Stack Engineer.",
  keywords: [
    "Khush Amin",
    "Software Engineer",
    "Cloud Infrastructure",
    "ASP.NET Developer",
    "C# Developer",
    "Oracle Cloud Certified",
    "De Montfort University",
    "Computer Science Graduate",
  ],
  authors: [{ name: "Khush Amin" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#070709] text-zinc-100 antialiased selection:bg-purple-500/30 selection:text-purple-200 font-sans">
        {children}
      </body>
    </html>
  );
}
