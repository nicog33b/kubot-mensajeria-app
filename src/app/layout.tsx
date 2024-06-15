import type { Metadata } from "next";


import "./globals.css";
import AsideLeft from "./gui/AsideLeft";

export const metadata: Metadata = {
  title: "Kubot",
  description: "Tu Solucion para envio de mensajes masivos, creaciones de grupos de marketing especificos y mas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="h-screen flex">
      <aside className="scale-110 w-1/5 border rounded-r-lg shadow-lg h-full p-4 mix-blend-multiply bg-opacity-75">
        <AsideLeft />
        
        </aside>
        <main className="w-4/5 bg-gray-100 bg-opacity-50 h-full overflow-auto">
          {/* Contenido dinámico */}
          {children}
        </main>
      </body>
    </html>
  );
}
