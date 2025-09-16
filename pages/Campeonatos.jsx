import React from "react";

// ===== IMPORTS (de src/pages -> ../assets) =====
import Flamengo         from "../assets/Flamengo.png";
import Corinthians      from "../assets/Corinthians.png";
import Palmeiras        from "../assets/Palmeiras.png";
import SaoPaulo         from "../assets/Brasao_do_Sao_Paulo_Futebol_Clube.svg.png";
import Gremio           from "../assets/Gremio.png";
import Internacional    from "../assets/Internacional.png";

import Cruzeiro         from "../assets/Cruzeiro.png";
import Ferroviaria      from "../assets/Ferroviaria.png";

import Botafogo         from "../assets/Botafogo.png";
import TunaLuso         from "../assets/TunaLuso.png";
import Coritiba         from "../assets/Coritiba.png";
import RolimDeMoura     from "../assets/RolimDeMoura.png";
import Santos           from "../assets/Santos.png";
import PerolasNegras    from "../assets/PerolasNegras.png";
import PindaSP          from "../assets/PindaSP.png";
import DoceMel          from "../assets/DoceMel.png";

// logos pequenos dos chips de título
import BrasileiraoFeminino from "../assets/BrasileiraoFeminino.png";
import CopaBrasilLogo       from "../assets/CopaBrasil.png";

// fallback
import Generic from "../assets/logo.png";

// Escudo com fallback automático
function Crest({ src, alt, sm = false }) {
  return (
    <span className={`inline-block ${sm ? "w-6 h-6" : "w-10 h-10"} mr-2`}>
      <img
        src={src || Generic}
        alt={alt}
        className="object-contain w-full h-full"
        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = Generic; }}
      />
    </span>
  );
}

export default function Campeonatos() {
  const classificacaoMock = [
    { pos: 1, time: "Cruzeiro",    pts: 35, vit: 10, e: 2,  d: 0, sg: 13, pj: 13, logo: Cruzeiro },
    { pos: 2, time: "Corinthians", pts: 27, vit: 8,  e: 3,  d: 2, sg: 10, pj: 13, logo: Corinthians },
    { pos: 3, time: "São Paulo",   pts: 25, vit: 7,  e: 4,  d: 2, sg: 10, pj: 13, logo: SaoPaulo },
    { pos: 4, time: "Ferroviária", pts: 24, vit: 7,  e: 3,  d: 3, sg: 17, pj: 12, logo: Ferroviaria },
    { pos: 5, time: "Flamengo",    pts: 24, vit: 7,  e: 3,  d: 3, sg: 15, pj: 13, logo: Flamengo },
    { pos: 6, time: "Palmeiras",   pts: 20, vit: 6,  e: 2,  d: 5, sg: 10, pj: 13, logo: Palmeiras },
  ];

  const copaDoBrasil = [
    { data: "09/06", hora: "15:00", casa: "Doce Mel",   casaLogo: DoceMel,      fora: "Pinda-SP",       foraLogo: PindaSP,       estadio: "Waldomirão" },
    { data: "10/06", hora: "10:00", casa: "Botafogo",   casaLogo: Botafogo,     fora: "Tuna Luso",      foraLogo: TunaLuso,      estadio: "NILTON SANTOS" },
    { data: "11/06", hora: "15:30", casa: "Coritiba",   casaLogo: Coritiba,     fora: "Rolim de Moura", foraLogo: RolimDeMoura,  estadio: "Ct Bayard Osna" },
    { data: "11/06", hora: "20:00", casa: "Santos",     casaLogo: Santos,       fora: "Pérolas Negras", foraLogo: PerolasNegras, estadio: "VILA BELMIRO" },
  ];

  const resultadosRecentes = [
    { data: "22/05", casa: "Palmeiras",   casaLogo: Palmeiras,    placar: "0x1", fora: "Cruzeiro",   foraLogo: Cruzeiro },
    { data: "26/05", casa: "Ferroviária", casaLogo: Ferroviaria,  placar: "1x0", fora: "São Paulo",  foraLogo: SaoPaulo },
    { data: "26/05", casa: "Corinthians", casaLogo: Corinthians,  placar: "0x1", fora: "Flamengo",   foraLogo: Flamengo },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-ink">CAMPEONATOS EM ANDAMENTO</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Tabela Brasileiro Feminino */}
        <div className="bg-panel-soft rounded-xl shadow p-4">
          <div className="bg-yellow text-ink font-bold p-3 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={BrasileiraoFeminino} alt="Brasileirão Feminino" className="w-8 h-8"/>
              Campeonato Brasileiro de Futebol Feminino A1
            </div>
            <span>Rodada 18 • Classificação</span>
          </div>

          <table className="w-full mt-4 table-auto text-sm">
            <thead className="text-left border-b border-line">
              <tr>
                <th>POS</th>
                <th>TIME</th>
                <th>PTS</th>
                <th>VIT</th>
                <th>E</th>
                <th>D</th>
                <th>SG</th>
                <th>PJ</th>
              </tr>
            </thead>
            <tbody>
              {classificacaoMock.map(t => (
                <tr key={t.pos} className="border-b border-line2">
                  <td>{t.pos}</td>
                  <td className="flex items-center">
                    <Crest src={t.logo} alt={t.time} />
                    {t.time}
                  </td>
                  <td>{t.pts}</td>
                  <td>{t.vit}</td>
                  <td>{t.e}</td>
                  <td>{t.d}</td>
                  <td>{t.sg}</td>
                  <td>{t.pj}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-3 text-right">
            <a className="text-purple font-semibold hover:underline" href="#tabela">
              Ver Tabela Completa →
            </a>
          </div>
        </div>

        {/* Copa do Brasil */}
        <div className="bg-panel-soft rounded-xl shadow p-4">
          <div className="bg-purple text-white font-bold p-3 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={CopaBrasilLogo} alt="Copa do Brasil Feminina" className="w-8 h-8"/>
              Copa do Brasil Feminina
            </div>
            <span>Quartas de Final • Próximos Jogos</span>
          </div>

          <ul className="mt-4 space-y-3">
            {copaDoBrasil.map((j, i) => (
              <li key={i} className="flex justify-between items-center border-b border-line2 pb-2">
                <div className="flex items-center gap-2">
                  <Crest sm src={j.casaLogo} alt={j.casa} />
                  {j.casa}
                </div>
                <div className="text-center">
                  <div>{j.data}</div>
                  <div>{j.hora}</div>
                  <div className="text-xs">{j.estadio}</div>
                </div>
                <div className="flex items-center gap-2">
                  {j.fora}
                  <Crest sm src={j.foraLogo} alt={j.fora} />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-3 text-right">
            <a className="text-yellow font-semibold hover:underline" href="#chaveamento">
              Ver Chaveamento Completo →
            </a>
          </div>
        </div>
      </div>

      {/* RESULTADOS RECENTES */}
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">⏱️ RESULTADOS RECENTES</h3>
        <div className="flex overflow-x-auto gap-3">
          {resultadosRecentes.map((r, i) => (
            <div key={i} className="bg-panel rounded-lg p-3 flex-shrink-0 w-60">
              <div className="text-sm mb-1">{r.data}</div>
              <div className="flex items-center gap-2">
                <Crest sm src={r.casaLogo} alt={r.casa} />
                <span>{r.casa} <strong>{r.placar}</strong> {r.fora}</span>
                <Crest sm src={r.foraLogo} alt={r.fora} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
