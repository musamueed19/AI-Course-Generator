import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, GoogleOneTap } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Course Generator App",
  description:
    "AI Course Generator App. Developed in NextJS 14, and deployed on the Vercel.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* <GoogleOneTap /> */}
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
