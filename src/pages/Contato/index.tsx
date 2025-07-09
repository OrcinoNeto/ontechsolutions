import React, { useState } from "react";

const Contato: React.FC = () => {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
  };

  // Função para verificar se o campo está preenchido
  const isFilled = (field: keyof typeof form) => form[field].length > 0;

  return (
    <section id="contato" className="py-16" style={{ backgroundColor: '#131628' }}>
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Fale Conosco</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-[#23284a]/80 rounded-2xl shadow-2xl p-8">
          {/* Nome */}
          <div className="input-group relative">
            <input
              id="nome"
              name="nome"
              type="text"
              required
              value={form.nome}
              onChange={handleChange}
              className={`input block w-full rounded-xl border border-gray-500 bg-transparent px-4 py-4 text-white text-base transition-colors duration-200 focus:border-blue-500 focus:ring-0 peer ${isFilled("nome") ? "border-blue-500" : ""}`}
              autoComplete="name"
            />
            <label
              htmlFor="nome"
              className={`user-label absolute left-4 top-0 px-1 text-gray-200 pointer-events-none transition-all duration-200 bg-[#202443]
                ${isFilled("nome") ? "-translate-y-1/2 scale-90 text-blue-400" : "translate-y-4"}
                peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:text-blue-400`}
              style={{ backgroundColor: '#202443' }}
            >
              Nome
            </label>
          </div>
          {/* Email */}
          <div className="input-group relative">
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className={`input block w-full rounded-xl border border-gray-500 bg-transparent px-4 py-4 text-white text-base transition-colors duration-200 focus:border-blue-500 focus:ring-0 peer ${isFilled("email") ? "border-blue-500" : ""}`}
              autoComplete="email"
            />
            <label
              htmlFor="email"
              className={`user-label absolute left-4 top-0 px-1 text-gray-200 pointer-events-none transition-all duration-200 bg-[#131628]
                ${isFilled("email") ? "-translate-y-1/2 scale-90 text-blue-400" : "translate-y-4"}
                peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:text-blue-400`}
              style={{ backgroundColor: '#202443' }}
            >
              E-mail
            </label>
          </div>
          {/* Mensagem */}
          <div className="input-group relative">
            <textarea
              id="mensagem"
              name="mensagem"
              required
              value={form.mensagem}
              onChange={handleChange}
              className={`input block w-full rounded-xl border border-gray-500 bg-transparent px-4 py-4 text-white text-base transition-colors duration-200 focus:border-blue-500 focus:ring-0 peer min-h-[120px] resize-none ${isFilled("mensagem") ? "border-blue-500" : ""}`}
            />
            <label
              htmlFor="mensagem"
              className={`user-label absolute left-4 top-0 px-1 text-gray-200 pointer-events-none transition-all duration-200 bg-[#131628]
                ${isFilled("mensagem") ? "-translate-y-1/2 scale-90 text-blue-400" : "translate-y-4"}
                peer-focus:-translate-y-1/2 peer-focus:scale-90 peer-focus:text-blue-400`}
              style={{ backgroundColor: '#202443' }}
            >
              Mensagem
            </label>
          </div>
          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-blue-500 to-green-400 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition"
            disabled={enviado}
          >
            {enviado ? "Mensagem enviada!" : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contato; 