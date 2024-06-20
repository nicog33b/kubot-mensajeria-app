import type { Metadata } from "next";
import "./globals.css";
import AsideLeft from "./gui/AsideLeft";

export const metadata: Metadata = {
  title: "Kubot",
  description: "Tu Solución para envío de mensajes masivos, creaciones de grupos de marketing específicos y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full">
      <body className="h-full flex">
        <aside className="hidden md:block md:w-1/5 border-r rounded-r-lg shadow-lg bg-opacity-75 h-full">
          <AsideLeft />
        </aside>
        <main className="w-full md:w-4/5 bg-gray-100 bg-opacity-50 h-full overflow-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
