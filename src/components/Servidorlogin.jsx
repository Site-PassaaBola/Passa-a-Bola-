import { usersSeed } from "../data/usersSeed";

// Servidor simulado sem dependências externas
export function ServidorLogin({ username, password }) {
  const user = usersSeed.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const token = btoa(`${username}:${Date.now()}`); // Token simples
    return { ok: true, token, role: user.role };
  } else {
    return { ok: false, message: "Credenciais inválidas." };
  }
}
