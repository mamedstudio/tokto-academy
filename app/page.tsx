import modulos from "@/data/modulos.json";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Bem-vindo à <span className="text-[#FF6B00]">Imersão Tokto Academy</span>
        </h1>
        <p className="text-xl text-gray-400 mb-2">
          Parceria Exclusiva: <span className="text-[#FF6B00]">Tokto x Glauber</span>
        </p>
        <p className="text-gray-500">
          7 Dias para Dominar o Live Commerce e a IA • 2 horas por dia
        </p>
      </div>

      {/* Lista de Módulos */}
      <div className="grid gap-6">
        {modulos.map((modulo: any, index: number) => (
          <a
            key={modulo.id}
            href={`/modulos/${modulo.id}`}
            className="card block"
          >
            <div className="flex items-start gap-4">
              {/* Número do módulo */}
              <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center font-bold text-xl text-white">
                {index + 1}
              </div>

              {/* Conteúdo */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl font-bold">{modulo.titulo}</h2>
                  {modulo.icone && <span className="text-2xl">{modulo.icone}</span>}
                </div>
                <p className="text-[#FF6B00] text-sm font-semibold mb-2">
                  {modulo.subtitulo}
                </p>
                <p className="text-gray-400 mb-3">{modulo.descricao}</p>

                {/* Meta info */}
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>⏱️ {modulo.duracao}</span>
                  <span>📚 {modulo.objetivos.length} objetivos</span>
                  <span>✅ {modulo.tarefas.length} tarefas</span>
                </div>
              </div>

              {/* Seta */}
              <div className="text-[#FF6B00] text-2xl">→</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}