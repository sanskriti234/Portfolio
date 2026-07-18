import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sanskriti Mishra | AI/ML Engineer & Data Scientist",
  description: "AI/ML Engineer | Machine Learning Engineer | Data Scientist | LLM Engineer. Building intelligent systems with Python, Scikit-learn, TensorFlow & more. Explore projects in ML, CV, NLP & Data Science.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "AI Engineer", "Machine Learning Engineer", "Data Scientist", "LLM Engineer", 
    "Computer Vision", "NLP", "Python Developer", "Generative AI", "Deep Learning",
    "Sanskriti Mishra", "Portfolio", "Kaggle", "Scikit-learn"
  ],
  authors: [{ name: "Sanskriti Mishra" }],
  openGraph: {
    title: "Sanskriti Mishra | AI/ML Portfolio",
    description: "Next-gen AI workstation portfolio showcasing ML, AI engineering & data science projects.",
    images: [{ url: "/og-image.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} dark h-full antialiased`}>
      <body className="min-h-full bg-[#050816] text-[#E0E7FF] font-sans selection:bg-[#00F5FF]/30 selection:text-white">
        {children}
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
