import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";

export default async function RecursoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

    const arquivoMap: Record<string, string> = {
    "paridade-armas": "paridade-armas.md",
    "manifesto": "manifesto.md",
    "case-sucesso": "case-sucesso.md",
    "tutorial-cupomclic": "tutorial-cupomclic.md",
    "checklist-cupom": "checklist-cupom.md",
    "template-descricao": "template-descricao.md",
    "onde-usar-link": "onde-usar-link.md",
    "roteiro-live-30min": "roteiro-live-30min.md",
    "checklist-pre-live": "checklist-pre-live.md",
    "frases-fechamento": "frases-fechamento.md",
    "linha-do-tempo-tokto": "linha-do-tempo-tokto.md",
    "prompts-embaixadores": "prompts-embaixadores.md",
    "ferramentas-ia-criadores": "ferramentas-ia-criadores.md",
    "automacao-conteudo-criador": "automacao-conteudo-criador.md",
    "guia-metricas": "guia-metricas.md",
    "guia-whatsapp": "guia-whatsapp.md",
    "calendario-divulgacao": "calendario-divulgacao.md",
    "roteiro-gravacao-mentoria": "roteiro-gravacao-mentoria.md",
    "roteiros-instagram": "roteiros-instagram.md",
    "stories-que-convertem": "stories-que-convertem.md",
    "catalogo-whatsapp": "catalogo-whatsapp.md",
  };;

  const nomeArquivo = arquivoMap[slug];
  
  if (!nomeArquivo) {
    notFound();
  }

  const caminhoArquivo = path.join(process.cwd(), "public", "tokens", nomeArquivo);

  let conteudo = "";
  try {
    conteudo = fs.readFileSync(caminhoArquivo, "utf-8");
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050505]">
      <header className="border-b border-[#1A1A1A] bg-[#0A0A0A] sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-[#FF6B00] rounded-lg flex items-center justify-center font-bold text-xl text-white">
              T
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Tokto Academy</h1>
              <p className="text-sm text-gray-400">Imersão Tokto</p>
            </div>
          </a>
          <a href="/" className="text-sm text-gray-400 hover:text-[#FF6B00] transition-colors">
            ← Voltar ao Dashboard
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose-custom">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 border-b-2 border-[#FF6B00] pb-3">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-[#FF6B00] mt-8 mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-300 leading-relaxed mb-4">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ml-4">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-4 ml-4">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-gray-300">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="text-white font-semibold">{children}</strong>
              ),
              em: ({ children }) => (
                <em className="text-gray-200 italic">{children}</em>
              ),
              hr: () => (
                <hr className="border-[#1A1A1A] my-8" />
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-[#FF6B00] pl-4 italic text-gray-300 my-4 bg-[#0A0A0A] p-4 rounded-r-lg">
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="bg-[#1A1A1A] text-[#FF6B00] px-2 py-1 rounded text-sm font-mono">
                  {children}
                </code>
              ),
            }}
          >
            {conteudo}
          </ReactMarkdown>
        </article>

        <div className="mt-12 pt-8 border-t border-[#1A1A1A]">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#FF8533] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            ← Voltar ao Dashboard
          </a>
        </div>
      </main>

      <footer className="border-t border-[#1A1A1A] bg-[#0A0A0A] mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-500 text-sm">
          <p>Tokto Academy © 2025 | tokto.com.br</p>
        </div>
      </footer>
    </div>
  );
}
