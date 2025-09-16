// src/pages/FormularioInscricao.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function getInscricoesFromStorage() {
  try {
    return JSON.parse(localStorage.getItem("inscricoes") || "[]");
  } catch {
    return [];
  }
}

export default function FormularioInscricao() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    nascimento: "",
    telefone: "",
    posicao: "",
    experiencia: "",
    time: "",
    observacoes: "",
  });

  const [mensagem, setMensagem] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nome.trim() || !form.email.trim()) {
      setMensagem("Por favor, preencha Nome e Email.");
      return;
    }

    const inscricoes = getInscricoesFromStorage();
    const nova = {
      id: inscricoes.length + 1,
      ...form,
      dataHora: new Date().toLocaleString("pt-BR"),
    };

    inscricoes.push(nova);
    localStorage.setItem("inscricoes", JSON.stringify(inscricoes));

    alert("✅ Inscrição enviada com sucesso!");

    navigate("/inscricoes"); // volta para lista
  };

  return (
    <div>
      {/* HERO */}
      <section
        className="text-center py-16 w-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(123,58,245,0.9) 0%, rgba(250,223,99,0.85) 100%)",
        }}
      >
        <h1 className="text-5xl font-extrabold text-white">Inscrição</h1>
        <p className="text-white mt-3">
          Preencha seus dados e faça parte da nossa história!
        </p>
        <button
          className="mt-6 inline-block px-6 py-3 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold shadow-md transition-all"
          onClick={() => navigate("/inscricoes")}
        >
          Fechar Formulário
        </button>
      </section>

      {/* FORM */}
      <div className="max-w-3xl mx-auto mt-12 mb-20 px-4">
        <h2 className="text-center text-2xl font-bold mb-6 text-purple">
          Formulário de Inscrição
        </h2>

        {mensagem && (
          <div className="mb-4 text-red-600 font-semibold text-center">
            {mensagem}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 space-y-6"
        >
          {/* campos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium">Nome Completo *</label>
              <input
                name="nome"
                value={form.nome}
                onChange={handleChange}
                type="text"
                required
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email *</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                required
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Telefone *</label>
              <input
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                type="tel"
                placeholder="(11) 99999-9999"
                required
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Data de Nascimento *
              </label>
              <input
                name="nascimento"
                value={form.nascimento}
                onChange={handleChange}
                type="date"
                required
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Posição *</label>
              <select
                name="posicao"
                value={form.posicao}
                onChange={handleChange}
                required
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-purple-400"
              >
                <option value="">Selecione sua posição</option>
                <option>Goleira</option>
                <option>Zagueira</option>
                <option>Lateral</option>
                <option>Volante</option>
                <option>Meia</option>
                <option>Atacante</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Experiência *</label>
              <select
                name="experiencia"
                value={form.experiencia}
                onChange={handleChange}
                required
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-purple-400"
              >
                <option value="">Selecione sua experiência</option>
                <option>Iniciante</option>
                <option>Amadora</option>
                <option>Semiprofissional</option>
                <option>Profissional</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Time Atual (opcional)</label>
              <input
                name="time"
                value={form.time}
                onChange={handleChange}
                type="text"
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Observações (opcional)</label>
              <textarea
                name="observacoes"
                value={form.observacoes}
                onChange={handleChange}
                rows="4"
                className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-purple-400"
              ></textarea>
            </div>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="px-8 py-3 bg-purple text-white rounded-full font-bold hover:bg-purple-700 transition-all"
            >
              Enviar Inscrição
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
