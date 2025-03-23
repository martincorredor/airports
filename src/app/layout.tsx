import "leaflet/dist/leaflet.css";
import './styles/globals.css';
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="bg-airport">{children}</body>
    </html>
  );
}
