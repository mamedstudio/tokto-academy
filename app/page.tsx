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
                <p className="text-sm text-gray-400">Imersão Glauber Palmeira</p>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              7 Dias para Dominar o Live Commerce
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Bem-vindo à <span className="text-[#FF6B00]">Imersão Tokto Academy</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            7 Dias para Dominar o Live Commerce e a Inteligência Artificial
          </p>
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
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF6B00] transition-colors">
                      {modulo.titulo}
                    </h3>
                    <p className="text-gray-400 mb-3">{modulo.subtitulo}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        ️ {modulo.duracao}
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
                        📚 {modulo.recursos.length} recursos
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
