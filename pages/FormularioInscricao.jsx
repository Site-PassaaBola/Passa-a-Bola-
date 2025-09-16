import React, { useState } from "react";
import '../App.css';
import '../index.css';

function getInscricoesFromStorage() {
  try {
    return JSON.parse(localStorage.getItem("inscricoes") || "[]");
  } catch {
    return [];
  }
}

export default function FormularioInscricao() {
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
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validação mínima
    if (!form.nome.trim() || !form.email.trim()) {
      setMensagem("Por favor preencha Nome e Email.");
      return;
    }

    const inscricoes = getInscricoesFromStorage();
    const nova = {
      id: inscricoes.length + 1,
      nome: form.nome.trim(),
      email: form.email.trim(),
      nascimento: form.nascimento,
      telefone: form.telefone,
      posicao: form.posicao,
      experiencia: form.experiencia,
      time: form.time,
      observacoes: form.observacoes,
      dataHora: new Date().toLocaleString("pt-BR"),
    };

    inscricoes.push(nova);
    localStorage.setItem("inscricoes", JSON.stringify(inscricoes));

    // notificação ao usuário (pode trocar por snackbar)
    alert("✅ Inscrição enviada com sucesso!");

    // limpa estado
    setForm({
      nome: "",
      email: "",
      nascimento: "",
      telefone: "",
      posicao: "",
      experiencia: "",
      time: "",
      observacoes: "",
    });

    // redireciona para a listagem
    window.location.hash = "/inscricoes";
  };

  return (
    <div className="formulario-page">
      <section className="formulario-hero">
        <h1>Inscrições</h1>
        <p>Faça parte da história do futebol feminino brasileiro. Inscreva-se agora!</p>
        <button
          className="btn-voltar"
          onClick={() => (window.location.hash = "/inscricoes")}
        >
          Fechar Formulário
        </button>
      </section>

      <div className="formulario-container" style={{ marginTop: "-2.5rem" }}>
        <h2>Formulário de Inscrição</h2>

        {mensagem && (
          <div style={{ color: "#b71c1c", textAlign: "center", marginBottom: 12 }}>
            {mensagem}
          </div>
        )}

        <form className="formulario-grid" onSubmit={handleSubmit}>
          <div>
            <label>Nome Completo *</label>
            <input
              name="nome"
              value={form.nome}
              onChange={handleChange}
              type="text"
              placeholder="Digite seu nome completo"
              required
            />
          </div>

          <div>
            <label>Email *</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Digite seu email"
              required
            />
          </div>

          <div>
            <label>Data de Nascimento *</label>
            <input
              name="nascimento"
              value={form.nascimento}
              onChange={handleChange}
              type="date"
              required
            />
          </div>

          <div>
            <label>Telefone *</label>
            <input
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              type="tel"
              placeholder="(11) 99999-9999"
              required
            />
          </div>

          <div>
            <label>Posição *</label>
            <select
              name="posicao"
              value={form.posicao}
              onChange={handleChange}
              required
            >
              <option value="">Selecione</option>
              <option>Goleira</option>
              <option>Zagueira</option>
              <option>Lateral</option>
              <option>Volante</option>
              <option>Meia</option>
              <option>Atacante</option>
            </select>
          </div>

          <div>
            <label>Experiência *</label>
            <select
              name="experiencia"
              value={form.experiencia}
              onChange={handleChange}
              required
            >
              <option value="">Selecione</option>
              <option>Iniciante</option>
              <option>Amadora</option>
              <option>Semi-Profissional</option>
              <option>Profissional</option>
            </select>
          </div>

          <div>
            <label>Time Atual (opcional)</label>
            <input
              name="time"
              value={form.time}
              onChange={handleChange}
              type="text"
              placeholder="Digite o nome do seu time atual"
            />
          </div>

          <div className="formulario-grid-full">
            <label>Observações (opcional)</label>
            <textarea
              name="observacoes"
              value={form.observacoes}
              onChange={handleChange}
              placeholder="Alguma informação adicional?"
              rows="4"
            />
          </div>

          <button type="submit">Enviar Inscrição</button>
        </form>
      </div>
    </div>
  );
}
