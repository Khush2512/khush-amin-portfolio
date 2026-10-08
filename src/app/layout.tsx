import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://khush-amin-portfolio3d.vercel.app"),
  title: "Khush Amin | First-Class Honours Software Engineer & Cloud Specialist",
  description:
    "Recruiter-Ready Developer Portfolio of Khush Amin — First-Class Honours Computer Science Graduate from De Montfort University (70% average), Certified Oracle Cloud Professional, and Junior .NET Developer with 2 years commercial IT sysadmin experience.",
  keywords: [
    "Khush Amin",
    "Software Engineer",
    "Junior .NET Developer",
    "Cloud & Infrastructure Specialist",
    "Oracle Cloud Infrastructure Certified",
    "De Montfort University",
    "First Class Honours Computer Science",
    "ASP.NET Core C# Developer",
    "Active Directory SysAdmin",
  ],
  authors: [{ name: "Khush Amin" }],
  openGraph: {
    title: "Khush Amin | Software Engineer & Cloud Infrastructure Specialist",
    description:
      "First-Class Honours Computer Science Graduate (70% average) from De Montfort University with dual Oracle Cloud certifications and 2 years commercial sysadmin experience.",
    url: "https://khush-amin-portfolio3d.vercel.app",
    siteName: "Khush Amin Portfolio",
    images: [
      {
        url: "https://khush-amin-portfolio3d.vercel.app/khush-profile.png",
        width: 1200,
        height: 630,
        alt: "Khush Amin — Software Engineer & Cloud Specialist",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khush Amin | First-Class Honours Software Engineer & Cloud Specialist",
    description:
      "Recruiter-ready portfolio showcasing enterprise C# ASP.NET projects, 3NF relational database architecture, and dual Oracle Cloud certifications.",
    images: ["https://khush-amin-portfolio3d.vercel.app/khush-profile.png"],
  },
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
