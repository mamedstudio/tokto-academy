import { notFound } from "next/navigation";
import modulos from "@/data/modulos.json";

export default async function ModuloPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const modulo = modulos.find((m: any) => m.id === id);

  if (!modulo) {
    notFound();
  }

  const moduloIndex = modulos.findIndex((m: any) => m.id === id);
  const nextModulo = modulos[moduloIndex + 1];

  return (
    <div>
      <a
        href="/"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FF6B00] mb-8 transition-colors"
      >
        ← Voltar para o Dashboard
      </a>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-14 h-14 bg-[#FF6B00] rounded-lg flex items-center justify-center font-bold text-2xl text-white">
            {moduloIndex + 1}
          </div>
          <div>
            <h1 className="text-3xl font-bold">{modulo.titulo}</h1>
            <p className="text-[#FF6B00] font-semibold">{modulo.subtitulo}</p>
          </div>
        </div>
        <p className="text-gray-400 text-lg">{modulo.descricao}</p>
        <div className="flex gap-4 mt-4 text-sm text-gray-500">
          <span>⏱️ {modulo.duracao}</span>
          <span>🎯 {modulo.objetivos.length} objetivos</span>
          <span>✅ {modulo.tarefas.length} tarefas</span>
          <span>📚 {modulo.recursos.length} recursos</span>
        </div>
      </div>

      {modulo.videoUrl && (
        <div className="card mb-8">
          <h2 className="text-xl font-bold mb-4">🎬 Aula em Vídeo</h2>
          <div className="aspect-video bg-black rounded-lg flex items-center justify-center text-gray-500">
            <p>Vídeo será embedado aqui</p>
          </div>
        </div>
      )}

      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4">📖 Conteúdo da Aula</h2>
        <p className="text-gray-300 leading-relaxed whitespace-pre-line">{modulo.conteudo}</p>
      </div>

      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4">🎯 Objetivos de Aprendizado</h2>
        <ul className="space-y-2">
          {modulo.objetivos.map((objetivo: string, index: number) => (
            <li key={index} className="flex items-start gap-3 text-gray-300">
              <span className="text-[#FF6B00] font-bold">✓</span>
              <span>{objetivo}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4">✅ Tarefas Práticas</h2>
        <ul className="space-y-3">
          {modulo.tarefas.map((tarefa: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-5 h-5 accent-[#FF6B00]" />
              <span className="text-gray-300">{tarefa}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4"> Recursos e Materiais</h2>
        <div className="grid gap-3">
          {modulo.recursos.map((recurso: any, index: number) => (
            <a
              key={index}
              href={recurso.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-[#0A0A0A] rounded-lg border border-[#333] hover:border-[#FF6B00] transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">
                  {recurso.tipo === "PDF" && "📄"}
                  {recurso.tipo === "VIDEO" && "🎥"}
                  {recurso.tipo === "DOC" && "📝"}
                  {recurso.tipo === "XLSX" && "📊"}
                </span>
                <div>
                  <p className="font-semibold text-gray-200">{recurso.nome}</p>
                  <p className="text-sm text-gray-500">{recurso.tipo}</p>
                </div>
              </div>
              <span className="text-[#FF6B00]">Abrir ↗</span>
            </a>
          ))}
        </div>
      </div>

      {nextModulo && (
        <a href={`/modulos/${nextModulo.id}`} className="btn-primary inline-flex items-center gap-2">
          Próximo Módulo: {nextModulo.titulo} →
        </a>
      )}
    </div>
  );
}
