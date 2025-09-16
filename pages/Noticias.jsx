// src/pages/Noticias.jsx
import React from "react";

// troque os paths se precisar
import destaqueImg from "../assets/TimeCruzeiro.jpg";
import maisLidas1 from "../assets/Juventude.png";
import maisLidas2 from "../assets/feminino.jpg";

export default function Noticias() {
  return (
    <main className="w-full bg-white">
      {/* container MAIOR */}
      <section className="w-full max-w-[1380px] mx-auto px-6 md:px-10 py-16">
        {/* Título maior */}
        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-slate-900">
          Últimas Notícias
        </h1>
        <p className="mt-3 text-center text-slate-600 text-lg md:text-xl">
          Fique por dentro do que acontece no futebol feminino
        </p>

        {/* grade com mais respiro */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* DESTAQUE — imagem alta e textos grandes */}
          <article className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white shadow-md overflow-hidden">
            <img
              src={destaqueImg}
              alt="Flamengo se mantém na liderança"
              className="w-full h-[420px] md:h-[520px] lg:h-[560px] object-cover"
            />

            <div className="px-8 md:px-10 py-8">
              <div className="flex items-center gap-4">
                <span className="inline-block px-3.5 py-2 rounded-md bg-purple-600 text-white font-bold text-sm md:text-base">
                  DESTAQUE
                </span>
                <span className="text-slate-500 text-base md:text-lg">
                  21 de agosto de 2024
                </span>
              </div>

              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-slate-900">
                Brasileirão Feminino 2024: Flamengo se mantém na liderança
              </h2>

              <p className="mt-4 text-slate-600 text-lg md:text-xl leading-relaxed">
                Vitória convincente no clássico mantém o time na primeira
                posição da tabela. Marta brilhou novamente e marcou o gol da
                vitória.
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-slate-500 text-base md:text-lg">
                  Por Maria Silva
                </span>
                <a
                  href="#/noticias/flamengo-lideranca"
                  className="text-purple-700 text-lg md:text-xl font-bold hover:underline"
                >
                  Leia mais →
                </a>
              </div>
            </div>
          </article>

          {/* MAIS LIDAS — thumbs e fontes maiores */}
          <aside className="rounded-3xl border border-slate-200 bg-white shadow-md p-8 md:p-10">
            <h3 className="font-extrabold text-slate-900 text-2xl md:text-3xl">
              Mais Lidas
            </h3>

            <ul className="mt-6 space-y-8">
              <li className="flex items-start gap-5">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden shrink-0">
                  <img
                    src={maisLidas1}
                    alt=""
                    className="w-full h-full object-cover object-[50%_18%]"
                  />
                </div>
                <div className="flex-1">
                  <a
                    href="#/noticias/copa-do-brasil-quartas"
                    className="font-semibold text-slate-900 hover:underline text-xl md:text-2xl leading-snug"
                  >
                    Copa do Brasil: Classificados às quartas de final
                  </a>
                  <div className="text-slate-500 text-base md:text-lg mt-1">
                    20 de agosto
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-5">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden shrink-0">
                  <img
                    src={maisLidas2}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <a
                    href="#/noticias/analise-tatica-palmeiras"
                    className="font-semibold text-slate-900 hover:underline text-xl md:text-2xl leading-snug"
                  >
                    Análise tática: O sistema defensivo do Palmeiras
                  </a>
                  <div className="text-slate-500 text-base md:text-lg mt-1">
                    19 de agosto
                  </div>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
