import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tokto Academy - Imersão Glauber",
  description: "7 Dias para Dominar o Live Commerce e a IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5]">
        {/* Navbar */}
        <nav className="border-b border-[#333] bg-[#1A1A1A]/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FF6B00] rounded-lg flex items-center justify-center font-bold text-xl text-white">
                T
              </div>
              <span className="font-bold text-xl">Tokto Academy</span>
            </div>
            <div className="text-sm text-gray-400">
              Imersão Glauber Palmeira
            </div>
          </div>
        </nav>

        {/* Conteúdo principal */}
        <main className="max-w-6xl mx-auto px-6 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-[#333] mt-20 py-8 text-center text-gray-500 text-sm">
          <p>Tokto Academy © 2025 | tokto.com.br</p>
        </footer>
      </body>
    </html>
  );
}