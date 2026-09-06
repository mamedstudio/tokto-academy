import modulos from "@/data/modulos.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Header */}
      <header className="border-b border-[#1A1A1A] bg-[#0A0A0A]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FF6B00] rounded-lg flex items-center justify-center font-bold text-xl text-white">
                T
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Tokto Academy</h1>
                <p className="text-sm text-gray-400">Imersão Tokto</p>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              7 dias + 1 módulo de encerramento e certificação
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Bem-vindo à <span className="text-[#FF6B00]">Imersão Tokto Academy</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Aprenda, em 7 dias, a planejar e executar sua primeira operação de live commerce usando Instagram, WhatsApp e inteligência artificial.
          </p>
        </div>

        {/* Para quem é */}
        <div className="bg-[#1A1A1A] p-6 rounded-lg max-w-3xl mx-auto mb-12 border border-[#333]">
          <p className="text-white font-semibold mb-3 text-lg">🎯 Para quem é esta imersão:</p>
          <p className="text-gray-400 mb-2">Criadores de conteúdo, vendedores e afiliados que querem usar suas redes sociais para gerar vendas reais para lojistas e monetizar sua audiência.</p>
          <p className="text-gray-500 text-sm mt-3">Ao final, você terá um roteiro de live, uma oferta estruturada, um plano de conteúdo, uma estratégia de divulgação e um plano de ação para atrair lojistas e gerar vendas.</p>
        </div>

        {/* Módulos Grid */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {modulos.map((modulo, index) => (
            <a
              key={modulo.id}
              href={`/modulos/${modulo.id}`}
              className="block group"
            >
              <div className="card p-6 hover:border-[#FF6B00] transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center font-bold text-xl text-white flex-shrink-0">
                    {modulo.icone || index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider mb-1">
                      {modulo.id === 'conclusao' ? 'Módulo Bônus' : `Módulo ${index + 1}`}
                    </p>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF6B00] transition-colors">
                      {modulo.titulo}
                    </h3>
                    <p className="text-gray-400 mb-3">{modulo.subtitulo}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        ⏱️ {modulo.duracao}
                      </span>
                      <span className="flex items-center gap-1">
                        🎯 {modulo.objetivos.length} objetivos
                      </span>
                      {modulo.quiz && modulo.quiz.length > 0 && (
                        <span className="flex items-center gap-1">
                          📝 {modulo.quiz.length} perguntas
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        📚 {modulo.recursos.length} {modulo.recursos.length === 1 ? 'recurso' : 'recursos'}
                      </span>
                    </div>
                  </div>
                  <div className="text-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
