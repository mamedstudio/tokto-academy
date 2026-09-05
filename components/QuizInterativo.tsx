"use client";

import { useState } from "react";

interface Pergunta {
  pergunta: string;
  opcoes: string[];
  respostaCorreta: number;
}

export default function QuizInterativo({ quiz }: { quiz: Pergunta[] }) {
  const [respostas, setRespostas] = useState<Record<number, number>>({});
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [pontuacao, setPontuacao] = useState(0);

  const handleSelecionar = (indicePergunta: number, indiceOpcao: number) => {
    if (mostrarResultado) return; // Bloqueia mudanças após verificar
    setRespostas({
      ...respostas,
      [indicePergunta]: indiceOpcao,
    });
  };

  const verificarRespostas = () => {
    let acertos = 0;
    quiz.forEach((q, index) => {
      if (respostas[index] === q.respostaCorreta) {
        acertos++;
      }
    });
    setPontuacao(acertos);
    setMostrarResultado(true);
  };

  const reiniciarQuiz = () => {
    setRespostas({});
    setMostrarResultado(false);
    setPontuacao(0);
  };

  const porcentagem = Math.round((pontuacao / quiz.length) * 100);
  const aprovado = porcentagem >= 70;

  return (
    <div className="card mb-8 border-l-4 border-l-[#FF6B00]">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        📝 Quiz de Fixação do Módulo
        <span className="text-sm font-normal text-gray-400 bg-[#1A1A1A] px-2 py-1 rounded">Estilo Certificação</span>
      </h2>
      
      <div className="space-y-8">
        {quiz.map((q, qIndex) => {
          const respondido = respostas[qIndex] !== undefined;
          const estaCorreto = respostas[qIndex] === q.respostaCorreta;

          return (
            <div key={qIndex} className="bg-[#0A0A0A] p-5 rounded-lg border border-[#333]">
              <p className="font-semibold text-gray-200 mb-4">
                {qIndex + 1}. {q.pergunta}
              </p>
              <div className="space-y-3">
                {q.opcoes.map((opcao, oIndex) => {
                  const selecionada = respostas[qIndex] === oIndex;
                  let classeBorda = "border-[#333] hover:border-[#FF6B00]";
                  let classeFundo = "hover:bg-[#1A1A1A]";
                  let classeTexto = "text-gray-300";

                  if (mostrarResultado) {
                    if (oIndex === q.respostaCorreta) {
                      classeBorda = "border-green-500 bg-green-500/10";
                      classeTexto = "text-green-400 font-semibold";
                    } else if (selecionada && !estaCorreto) {
                      classeBorda = "border-red-500 bg-red-500/10";
                      classeTexto = "text-red-400";
                    } else {
                      classeBorda = "border-[#333] opacity-50";
                    }
                  } else if (selecionada) {
                    classeBorda = "border-[#FF6B00] bg-[#FF6B00]/10";
                    classeTexto = "text-white";
                  }

                  return (
                    <button
                      key={oIndex}
                      onClick={() => handleSelecionar(qIndex, oIndex)}
                      disabled={mostrarResultado}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg border ${classeBorda} ${classeFundo} transition-all text-left disabled:cursor-not-allowed`}
                    >
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${selecionada || (mostrarResultado && oIndex === q.respostaCorreta) ? 'border-current' : 'border-gray-600'}`}>
                        {(selecionada || (mostrarResultado && oIndex === q.respostaCorreta)) && (
                          <div className="w-2.5 h-2.5 rounded-full bg-current" />
                        )}
                      </div>
                      <span className={classeTexto}>{opcao}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        {!mostrarResultado ? (
          <button
            onClick={verificarRespostas}
            disabled={Object.keys(respostas).length < quiz.length}
            className="bg-[#FF6B00] hover:bg-[#FF8533] disabled:bg-gray-700 disabled:text-gray-500 text-white font-bold py-3 px-8 rounded-lg transition-colors w-full md:w-auto"
          >
            {Object.keys(respostas).length < quiz.length 
              ? `Responda todas as perguntas (${Object.keys(respostas).length}/${quiz.length})` 
              : "Verificar Respostas"}
          </button>
        ) : (
          <div className="text-center w-full bg-[#1A1A1A] p-6 rounded-lg border border-[#333]">
            <h3 className="text-2xl font-bold mb-2">
              {aprovado ? "🎉 Parabéns! Você foi aprovado!" : "📚 Continue estudando!"}
            </h3>
            <p className="text-gray-400 mb-4">
              Você acertou <span className="text-white font-bold">{pontuacao}</span> de <span className="text-white font-bold">{quiz.length}</span> perguntas ({porcentagem}%)
            </p>
            {aprovado ? (
              <p className="text-green-400 text-sm mb-4">Você dominou o conteúdo deste módulo!</p>
            ) : (
              <p className="text-red-400 text-sm mb-4">Você precisa de 70% para avançar. Revise o conteúdo e tente novamente.</p>
            )}
            <button
              onClick={reiniciarQuiz}
              className="text-[#FF6B00] hover:text-white underline text-sm"
            >
              Refazer Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
