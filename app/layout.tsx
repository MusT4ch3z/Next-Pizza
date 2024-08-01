import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
   subsets: ["cyrillic"],
   variable: "--font-nunito",
   weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
   title: "Next Pizza",
   description: "Pet-project Next.js + Typescript + Tailwind CSS + Vercel + Prisma + PostgreSQL + NextAuth",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={nunito.className}>{children}</body>
      </html>
   );
}
