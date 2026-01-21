import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Aditya Singh - Mobile App Developer",
  description: "I build production-ready mobile apps for startups and businesses. From MVP to launch, fast and secure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
