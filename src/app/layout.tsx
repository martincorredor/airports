"use client"; // ✅ Necesario en Next.js 13+ para que useState funcione

import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "./styles/globals.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light"; // Carga el tema guardado
    }
    return "light"; // Evita problemas en SSR
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <html lang="en">
      <body className="bg-airport">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="theme-toggle"
        >
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        {children}
      </body>
    </html>
  );
}
