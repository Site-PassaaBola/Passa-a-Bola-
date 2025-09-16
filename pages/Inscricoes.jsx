import React from "react";
import "../App.css";
import '../index.css';


export default function Inscricoes() {
  return (
    <div className="px-6 py-8">
      <h2 className="text-4xl font-bold text-center mb-6">Inscreva seu Time</h2>
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-custom p-6 flex flex-col gap-4">
        <input type="text" placeholder="Nome do Time" className="border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple"/>
        <input type="text" placeholder="Cidade" className="border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple"/>
        <input type="email" placeholder="E-mail de Contato" className="border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple"/>
        <textarea placeholder="Observações" className="border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple"/>
        <button className="bg-purple text-white font-bold py-3 rounded-xl hover:bg-purple-strong transition-all mt-2">Enviar Inscrição</button>
      </div>
    </div>
  );
}
