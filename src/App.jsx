// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Páginas
import Inicio from "./pages/Inicio";
import Campeonatos from "./pages/Campeonatos";
import Times from "./pages/Times";
import Noticias from "./pages/Noticias";
import Historia from "./pages/Historia";
import Inscricoes from "./pages/Inscricoes";              // lista / histórico de inscrições
import FormularioInscricao from "./pages/FormularioInscricao"; // formulário de inscrição

// Estilos globais (Tailwind + o que você tiver)
import "./index.css";

// Logo (ajuste o caminho se necessário)
import logo from "./assets/logo.png";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/campeonatos" element={<Campeonatos />} />
            <Route path="/times" element={<Times />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/historia" element={<Historia />} />

            {/* fluxo de inscrições */}
            <Route path="/inscricao" element={<FormularioInscricao />} />
            <Route path="/inscricoes" element={<Inscricoes />} />

            {/* fallback */}
            <Route path="*" element={<Placeholder titulo="Página não encontrada" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

/* ====== Header (navbar + mobile) ====== */
function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Passa a Bola" className="w-10 h-10 object-contain" />
          <span className="text-2xl font-extrabold text-purple-600">Passa a Bola</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          <NavLink to="/">Início</NavLink>
          <NavLink to="/campeonatos">Campeonatos</NavLink>
          <NavLink to="/times">Times</NavLink>
          <NavLink to="/noticias">Notícias</NavLink>
          <NavLink to="/historia">História</NavLink>

          <Link
            to="/inscricao"
            className="bg-purple text-white px-4 py-2 rounded-xl hover:bg-purple-700 transition-all"
          >
            Inscrição
          </Link>
          <Link
            to="/inscricoes"
            className="text-purple-600 font-semibold hover:text-purple-700"
          >
            Inscrições Realizadas
          </Link>
        </nav>

        {/* Mobile nav */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="hover:text-purple-600 transition-colors"
    >
      {children}
    </Link>
  );
}

/* ====== Mobile menu ====== */
function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        aria-label="Abrir menu"
        onClick={() => setOpen((v) => !v)}
        className="p-2 rounded-md border border-gray-300"
      >
        ☰
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg flex flex-col p-3 gap-2">
          <Link onClick={() => setOpen(false)} to="/" className="px-2 py-2 rounded hover:bg-gray-100">Início</Link>
          <Link onClick={() => setOpen(false)} to="/campeonatos" className="px-2 py-2 rounded hover:bg-gray-100">Campeonatos</Link>
          <Link onClick={() => setOpen(false)} to="/times" className="px-2 py-2 rounded hover:bg-gray-100">Times</Link>
          <Link onClick={() => setOpen(false)} to="/noticias" className="px-2 py-2 rounded hover:bg-gray-100">Notícias</Link>
          <Link onClick={() => setOpen(false)} to="/historia" className="px-2 py-2 rounded hover:bg-gray-100">História</Link>
          <Link onClick={() => setOpen(false)} to="/inscricao" className="px-2 py-2 rounded bg-purple text-white text-center">Inscrição</Link>
          <Link onClick={() => setOpen(false)} to="/inscricoes" className="px-2 py-2 rounded hover:bg-gray-100 text-center">Inscrições Realizadas</Link>
        </div>
      )}
    </div>
  );
}

/* ====== Placeholder genérico ====== */
function Placeholder({ titulo = "Conteúdo em breve..." }) {
  return (
    <section className="text-center py-20">
      <h2 className="text-4xl font-bold text-purple-600">{titulo}</h2>
      <p className="text-gray-500 mt-4">Volte mais tarde para novidades.</p>
    </section>
  );
}

/* ====== Footer ====== */
function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 text-center py-6 mt-8">
      &copy; {new Date().getFullYear()} Passa a Bola. Todos os direitos reservados.
    </footer>
  );
}
