import React from "react";
import { useParams, Link } from "react-router-dom";

/* === Varredura de assets (minúsculos e MAIÚSCULOS) === */
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

  // match exato
  for (const key of keys) {
    if (!key) continue;
    const want = norm(key);
    for (const [path, src] of Object.entries(allAssets)) {
      const base = path.split("/").pop().split(".")[0];
      if (norm(base) === want) return src;
    }
  }
  // match parcial
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

/* === Metadados por time === */
const TEAM_META = {
  flamengo: {
    nome: "Flamengo",
    cidade: "Rio de Janeiro",
    fundacao: 1995,
    banner: ["TimeFlamengo", "Flamengo"],
    crest: ["Flamengo", "escudo-flamengo"],
    cor: "#C00",
  },
  santos: {
    nome: "Santos",
    cidade: "Santos",
    fundacao: 1997,
    banner: ["TimeSantos", "SantosTime"],
    crest: ["Santos", "escudo-santos"],
    cor: "#000",
  },
  palmeiras: {
    nome: "Palmeiras",
    cidade: "São Paulo",
    fundacao: 2019,
    banner: ["TimaPalmeira", "TimePalmeiras", "Palmeiras"], // <- cobre TimaPalmeira.jpg
    crest: ["Palmeiras", "escudo-palmeiras"],
    cor: "#1B7D2B",
  },
  corinthians: {
    nome: "Corinthians",
    cidade: "São Paulo",
    fundacao: 2016,
    banner: ["TimeCorinthians", "Corinthians"],
    crest: ["Corinthians", "escudo-corinthians"],
    cor: "#000",
  },
  "sao-paulo": {
    nome: "São Paulo",
    cidade: "São Paulo",
    fundacao: 1997,
    banner: ["TimeSaoPaulo", "SaoPaulo", "SPFC"],
    crest: ["São Paulo", "SaoPaulo", "SPFC"],
    cor: "#000",
  },
  cruzeiro: {
    nome: "Cruzeiro",
    cidade: "Belo Horizonte",
    fundacao: 2019,
    banner: ["TimeCruzeiro", "Cruzeiro"],
    crest: ["Cruzeiro", "escudo-cruzeiro"],
    cor: "#0A3D91",
  },
};

/* === Números da tabela (das telas que você mandou) === */
const TEAM_STATS = {
  cruzeiro: { pos: 1, pontos: 35, saldoGols: 10 },
  corinthians: { pos: 2, pontos: 27, saldoGols: 10 },
  "sao-paulo": { pos: 3, pontos: 25, saldoGols: 10 },
  flamengo: { pos: 5, pontos: 24, saldoGols: 15 },
  palmeiras: { pos: 6, pontos: 20, saldoGols: 10 },
  // Santos não estava na tabela do seu print — valores indicativos para não deixar vazio:
  santos: { pos: 8, pontos: 18, saldoGols: 7 },
};

/* === Elenco atual (contagem por setor) === */
const ROSTERS = {
  flamengo: { gk: 3, def: 7, mid: 9, fwd: 6 },
  santos: { gk: 3, def: 8, mid: 8, fwd: 6 },
  palmeiras: { gk: 3, def: 8, mid: 8, fwd: 6 },
  corinthians: { gk: 3, def: 8, mid: 8, fwd: 7 },
  "sao-paulo": { gk: 3, def: 8, mid: 8, fwd: 6 },
  cruzeiro: { gk: 3, def: 8, mid: 8, fwd: 6 },
};

export default function TimePerfil() {
  const { slug } = useParams();
  const meta = TEAM_META[slug];
  const stats = TEAM_STATS[slug];
  const roster = ROSTERS[slug];

  if (!meta) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold">Time não encontrado</h1>
        <p className="mt-2 text-gray-600">Verifique o link ou volte para a lista de times.</p>
        <Link to="/times" className="inline-block mt-4 text-purple-600 hover:underline">
          ← Voltar para Times
        </Link>
      </div>
    );
  }

  const banner = getAsset(meta.banner) || "";
  const crest = getAsset(meta.crest) || "";

  return (
    <div className="bg-[#F5F6FF]">
      {/* HERO */}
      <section className="relative w-full h-[380px] md:h-[420px] overflow-hidden">
        {banner ? (
          <img
            src={banner}
            alt={`Banner do ${meta.nome}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-300" />
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-8 flex items-end pb-10">
          <div className="flex items-center gap-4">
            {crest && (
              <img
                src={crest}
                alt={`${meta.nome} escudo`}
                className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow"
              />
            )}
            {/* TÍTULO: apenas o nome branco */}
            <h1
              className="text-white font-black leading-none"
              style={{
                fontFamily: '"Bebas Neue", Inter, ui-sans-serif',
                fontSize: "clamp(40px, 6vw, 72px)",
              }}
            >
              {meta.nome}
            </h1>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 -mt-8 md:-mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard titulo="Posição Atual" valor={stats?.pos ?? "—"} cor={meta.cor} />
          <StatCard titulo="Pontos" valor={stats?.pontos ?? "—"} cor={meta.cor} />
          <StatCard titulo="Saldo de Gols" valor={stats?.saldoGols ?? "—"} cor={meta.cor} />
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mt-10">
        <div className="bg-white rounded-2xl shadow-[0_10px_24px_rgba(10,10,20,.06)] p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center">
            História do {meta.nome}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div>
              <h3 className="font-semibold mb-2">Fundação e Início</h3>
              <p className="text-gray-700 leading-relaxed">
                O {meta.nome} (cidade: {meta.cidade}) tem trajetória marcante no futebol feminino
                brasileiro. Fundado em {meta.fundacao}, consolidou-se com estrutura competitiva e
                desenvolvimento de talentos.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Conquistas Importantes</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Participações no Brasileiro Feminino</li>
                <li>Campanhas de destaque em torneios nacionais</li>
                <li>Formação de atletas para Seleções de base</li>
                <li>Projetos sólidos de categorias de base</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ELENCO ATUAL */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 mt-8 mb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-[0_10px_24px_rgba(10,10,20,.06)] p-6">
            <h3 className="font-semibold text-lg mb-4">Elenco Atual</h3>
            <ul className="space-y-3">
              <ElencoItem label="Goleiras" qtd={roster?.gk} />
              <ElencoItem label="Defensoras" qtd={roster?.def} />
              <ElencoItem label="Meio-campo" qtd={roster?.mid} />
              <ElencoItem label="Atacantes" qtd={roster?.fwd} />
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_10px_24px_rgba(10,10,20,.06)] p-6">
            <h3 className="font-semibold text-lg mb-4">Comissão Técnica</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Técnico Principal</span> — experiência no futebol
                feminino
              </li>
              <li>
                <span className="font-medium">Preparador Físico</span> — especialista em
                condicionamento
              </li>
              <li>
                <span className="font-medium">Analista de Desempenho</span> — análise tática e
                técnica
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/times"
            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:underline"
          >
            ← Voltar para os Times
          </Link>
        </div>
      </section>
    </div>
  );
}

/* === Componentes auxiliares === */
function StatCard({ titulo, valor, cor = "#7B3AF5" }) {
  return (
    <div className="bg-white rounded-2xl shadow-[0_10px_24px_rgba(10,10,20,.06)] p-6 text-center">
      <div
        className="mx-auto mb-3 h-1.5 w-16 rounded-full"
        style={{ backgroundColor: cor }}
        aria-hidden
      />
      <div className="text-sm uppercase tracking-wide text-gray-500">{titulo}</div>
      <div className="mt-1 text-3xl md:text-4xl font-extrabold">{valor}</div>
    </div>
  );
}

function ElencoItem({ label, qtd }) {
  return (
    <li className="flex items-center justify-between">
      <span className="text-gray-700">{label}</span>
      <span className="text-gray-900 font-semibold">
        {qtd ?? "—"} {qtd === 1 ? "jogadora" : "jogadoras"}
      </span>
    </li>
  );
}
