import React from "react";
import '../App.css';
import '../index.css';

export default function Inicio() {
  return (
    <div className="px-6 py-8">
      {/* Hero */}
      <div className="relative min-h-[62vh] flex items-center rounded-2xl overflow-hidden bg-cover bg-center" style={{backgroundImage: "url('/hero.jpg')"}}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative text-white">
          <h1 className="text-[clamp(42px,7vw,72px)] font-extrabold tracking-tight mb-4">Bem-vindo à Passa a Bola</h1>
          <p className="uppercase font-extrabold text-[clamp(14px,2.2vw,20px)] mb-6">Acompanhe campeonatos e notícias</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#campeonatos" className="bg-yellow text-black font-extrabold px-5 py-3 rounded-xl hover:shadow-btn transition-all">Campeonatos</a>
            <a href="#noticias" className="bg-purple text-white font-extrabold px-5 py-3 rounded-xl hover:bg-purple-strong hover:shadow-btn transition-all">Notícias</a>
          </div>
        </div>
      </div>

      {/* Times em destaque */}
      <section className="mt-12">
        <h2 className="text-4xl font-bold mb-6 text-center">Times em Destaque</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[1,2,3].map((t) => (
            <div key={t} className="bg-white rounded-2xl shadow-custom overflow-hidden flex flex-col">
              <div className="w-full aspect-video bg-gray-200"></div>
              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <img src="/team-crest.png" className="w-10 h-10 object-contain"/>
                  <h3 className="font-bold text-lg">Time {t}</h3>
                </div>
                <p className="text-gray-500 text-sm">Cidade XYZ</p>
                <a href="#" className="mt-2 text-center bg-purple text-white font-bold px-4 py-2 rounded-xl hover:bg-purple-strong transition-all">Ver Time</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Últimas Notícias */}
      <section className="mt-12">
        <h2 className="text-4xl font-bold mb-6 text-center">Últimas Notícias</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[1,2,3,4].map((n) => (
            <div key={n} className="bg-white border rounded-2xl overflow-hidden shadow-custom">
              <div className="w-full aspect-video bg-gray-200"></div>
              <div className="p-4">
                <span className="text-xs font-bold uppercase bg-purple/10 text-purple px-2 py-1 rounded-full">Notícia</span>
                <h3 className="font-bold text-lg mt-2">Título da Notícia {n}</h3>
                <p className="text-gray-600 text-sm mt-1">Resumo da notícia aqui...</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
