import React from "react";
import "../App.css";
import '../index.css';

export default function Noticias() {
  return (
    <div className="px-6 py-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Notícias</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {[1,2,3,4,5,6].map(n => (
          <div key={n} className="bg-white rounded-2xl overflow-hidden shadow-custom">
            <div className="w-full aspect-video bg-gray-200"></div>
            <div className="p-4 flex flex-col gap-2">
              <span className="text-xs font-bold uppercase bg-purple/10 text-purple px-2 py-1 rounded-full">Notícia</span>
              <h3 className="font-bold text-lg mt-2">Título da Notícia {n}</h3>
              <p className="text-gray-600 text-sm mt-1">Resumo da notícia aqui...</p>
              <a href="#" className="mt-2 text-center bg-purple text-white font-bold px-4 py-2 rounded-xl hover:bg-purple-strong transition-all">Ler Mais</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
