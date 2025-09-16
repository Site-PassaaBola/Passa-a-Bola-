// src/pages/Times.jsx
import React from "react";
import { Link } from "react-router-dom";

/* ===== Varredura de TODOS os assets (minúsculas e MAIÚSCULAS) ===== */
const assetsLower = import.meta.glob("../assets/**/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
  import: "default",
});
const assetsUpper = import.meta.glob("../assets/**/*.{PNG,JPG,JPEG,SVG,WEBP}", {
  eager: true,
  import: "default",
});
const allAssets = { ...assetsLower, ...assetsUpper };

const norm = (s = "") =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-");

const getAsset = (keyOrKeys) => {
  const keys = Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys];

  // 1) match exato
  for (const key of keys) {
    if (!key) continue;
    const want = norm(key);
    for (const [path, src] of Object.entries(allAssets)) {
      const base = path.split("/").pop().split(".")[0];
      if (norm(base) === want) return src;
    }
  }
  // 2) match parcial
  for (const key of keys) {
    if (!key) continue;
    const want = norm(key);
    for (const [path, src] of Object.entries(allAssets)) {
      const base = path.split("/").pop().split(".")[0];
      if (norm(base).includes(want)) return src;
    }
  }
  return null;
};

const logoOf = (clubName) => getAsset([clubName, `${clubName}-logo`, `escudo-${clubName}`]);

/* ===== Dados dos cards ===== */
const TOP = [
  {
    slug: "flamengo",
    nome: "Flamengo",
    cidade: "Rio de Janeiro",
    fundacao: 1995,
    fotoKey: ["TimeFlamengo", "Flamengo"],
    botClass: "bg-[#C00] hover:brightness-95",
  },
  {
    slug: "santos",
    nome: "Santos",
    cidade: "Santos",
    fundacao: 1997,
    fotoKey: ["TimeSantos", "SantosTime"],
    botClass: "bg-black hover:brightness-95",
  },
  {
    slug: "palmeiras",
    nome: "Palmeiras",
    cidade: "São Paulo",
    fundacao: 2019,
    fotoKey: ["TimaPalmeira", "TimePalmeiras", "Palmeiras"],
    botClass: "bg-[#1B7D2B] hover:brightness-95",
  },
];

const BOTTOM = [
  {
    slug: "corinthians",
    nome: "Corinthians",
    cidade: "São Paulo",
    fundacao: 2016,
    fotoKey: ["TimeCorinthians", "Corinthians"],
    botClass: "bg-black hover:brightness-95",
  },
  {
    slug: "sao-paulo",
    nome: "São Paulo",
    cidade: "São Paulo",
    fundacao: 1997,
    fotoKey: ["TimeSaoPaulo", "SaoPaulo", "São Paulo"],
    botClass: "bg-black hover:brightness-95",
  },
  {
    slug: "cruzeiro",
    nome: "Cruzeiro",
    cidade: "Belo Horizonte",
    fundacao: 2019,
    fotoKey: ["TimeCruzeiro", "Cruzeiro"],
    botClass: "bg-[#0A3D91] hover:brightness-95",
  },
];

function TeamCard({ item }) {
  const foto = getAsset(item.fotoKey);
  const logo = logoOf(item.nome);

  return (
    <article className="bg-white rounded-2xl shadow-[0_10px_24px_rgba(10,10,20,.06)] overflow-hidden flex flex-col">
      {/* Foto grande */}
      <div className="w-full h-[280px] md:h-[320px] lg:h-[360px] overflow-hidden">
        {foto ? (
          <img
            src={foto}
            alt={`Foto do ${item.nome}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 grid place-items-center text-gray-500 text-center px-4">
            (adicione uma imagem com nome parecido com:{" "}
            <span className="font-semibold">
              {Array.isArray(item.fotoKey) ? item.fotoKey.join(", ") : item.fotoKey}
            </span>{" "}
            em /src/assets)
          </div>
        )}
      </div>

      {/* Faixa branca */}
      <div className="p-5 md:p-6">
        <div className="flex items-start gap-3">
          {logo && (
            <img
              src={logo}
              alt={`${item.nome} logo`}
              className="w-10 h-10 object-contain"
              loading="lazy"
            />
          )}
          <div>
            <h3
              className="text-[32px] leading-8 md:text-[36px] md:leading-9 font-black"
              style={{ fontFamily: '"Bebas Neue", Inter, ui-sans-serif' }}
            >
              {item.nome}:
            </h3>
            <div className="text-[13px] md:text-[14px] font-black tracking-wide uppercase text-[#111]">
              {item.cidade} · Fundado em {item.fundacao}
            </div>
          </div>
        </div>

        {/* Botão -> Perfil */}
        <div className="mt-6">
          <Link
            to={`/time/${item.slug}`}
            className={`w-full inline-flex justify-center ${item.botClass} text-white rounded-xl py-3 font-semibold transition no-underline`}
          >
            Ver Perfil Completo
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Times() {
  return (
    <main className="bg-[#F5F6FF]">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Título / subtítulo */}
        <header className="text-center mb-8">
          <h1
            className="text-[44px] md:text-[56px] leading-[0.9] font-black"
            style={{ fontFamily: '"Bebas Neue", Inter, ui-sans-serif' }}
          >
            Times em Destaque
          </h1>
          <p className="text-gray-600 mt-2">
            Conheça os principais times do futebol feminino
          </p>
        </header>

        {/* Grid TOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TOP.map((t) => (
            <TeamCard key={t.slug} item={t} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button className="mt-8 bg-[#7B3AF5] text-white rounded-2xl px-6 py-3 font-extrabold tracking-wide hover:brightness-95">
            Ver Todos os Times →
          </button>
        </div>

        {/* Grid BOTTOM */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {BOTTOM.map((t) => (
            <TeamCard key={t.slug} item={t} />
          ))}
        </div>
      </section>
    </main>
  );
}
