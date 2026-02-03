import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Anish Duwal | Software Engineer",
    template: "%s | Anish Duwal",
  },
  description:
    "Senior Software Engineer with 6+ years experience in ASP.NET Core, microservices, Kafka, Redis, Kubernetes and cloud-native systems.",
  keywords: [
    "Anish Duwal",
    "ASP.NET Core Developer",
    "Software Engineer Nepal",
    "Microservices",
    "Clean Architecture",
    "Kubernetes",
    "OpenShift",
    "Next",
    "Motion Graphics",
    "Video Editing"
  ],
  authors: [{ name: "Anish Duwal" }],
  creator: "Anish Duwal",
  metadataBase: new URL("https://anishduwal.com.np"), // change to your domain
  openGraph: {
    title: "Anish Duwal | Software Engineer",
    description:
      "Backend-focused software engineer experienced in ASP.NET Core, microservices, Kafka, Redis, and Kubernetes.",
    url: "https://anishduwal.com",
    siteName: "Anish Duwal Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Anish Duwal Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anish Duwal | Software Engineer",
    description:
      "Software Engineer with expertise in ASP.NET Core, Clean Architecture, microservices, and cloud deployment.",
    images: ["/og.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full -z-10" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Anish Duwal",
              jobTitle: "Software Engineer",
              url: "https://anishduwal.com",
              sameAs: [
                "https://github.com/yourname",
                "https://linkedin.com/in/yourname",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
