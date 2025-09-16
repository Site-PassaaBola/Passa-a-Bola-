import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ServidorLogin } from "../components/Servidorlogin"; 

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const response = ServidorLogin({ username, password });

    if (response.ok) {
      localStorage.setItem("token", response.token);
      setMessage("✅ Login bem-sucedido!");
      console.log("Usuário logado:", username); // Debug
      navigate("/"); // Redireciona para a página inicial
    } else {
      setMessage(response.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Usuário: admin"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-4 border p-2 rounded placeholder-gray-400"
            required
          />
          <input
            type="password"
            placeholder="Senha: senha123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 border p-2 rounded placeholder-gray-400"
            required
          />

          {message && (
            <p
              className={`mb-4 text-center ${
                message.includes("bem")
                  ? "text-green-600 font-semibold"
                  : "text-red-600 font-semibold"
              }`}
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
