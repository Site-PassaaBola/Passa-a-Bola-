import React, { useMemo } from "react";
import TEAMS from "../data/teams.js";
import '../App.css';
import '../index.css';
export default function TeamProfile({ slug }) {
  // fallback: se não vier por props, pega do hash
  const effectiveSlug = useMemo(() => {
    if (slug) return slug;
    const h = window.location.hash || "#/";
    const parts = (h.startsWith("#/") ? h.slice(2) : h.replace(/^#/, "")).split("/");
    return parts[1] || "";
  }, [slug]);

  const team = TEAMS.find((t) => t.slug === effectiveSlug);

  if (!team) {
    return (
      <section className="container" style={{ paddingBlock: 24 }}>
        <p>Time não encontrado.</p>
        <a href="#/times" style={{ color: "#7B3AF5", fontWeight: 800 }}>
          ← Voltar para os times
        </a>
      </section>
    );
  }

  return (
    <section className="container" style={{ paddingBlock: 24 }}>
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 6px 18px rgba(17,17,17,0.08)",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: 260 }}>
          <img
            src={team.foto}
            alt={team.nome}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 35%",
              display: "block",
            }}
          />
        </div>

        <div style={{ padding: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <img src={team.escudo} alt="" style={{ width: 28, height: 28, objectFit: "contain" }} />
            <h1 style={{ margin: 0 }}>{team.nome}</h1>
          </div>

          <p style={{ color: "#666", margin: "0 0 16px 0" }}>{team.descricao}</p>

          <a href="#/times" style={{ color: "#7B3AF5", fontWeight: 800 }}>
            ← Voltar para os times
          </a>
        </div>
      </div>
    </section>
  );
}
