import React, { useState, useEffect } from "react";

const faqData = [
  {
    pergunta: "Quanto tempo leva para desenvolver um site?",
    resposta: "O prazo médio para desenvolvimento de um site institucional é de 2 a 4 semanas, dependendo da complexidade e dos requisitos do projeto."
  },
  {
    pergunta: "Vocês fazem sistemas sob medida para empresas?",
    resposta: "Sim! Desenvolvemos sistemas personalizados conforme as necessidades do seu negócio, desde automação de processos até integrações específicas."
  },
  {
    pergunta: "É possível integrar automação com sistemas já existentes?",
    resposta: "Sim, analisamos a estrutura atual e propomos soluções de automação que se integram aos sistemas que sua empresa já utiliza."
  },
  {
    pergunta: "Desenvolvem aplicativos para Android e iOS?",
    resposta: "Sim, criamos aplicativos nativos e híbridos para Android e iOS, sempre focando na melhor experiência para o usuário."
  },
  {
    pergunta: "Como funciona o suporte após a entrega do projeto?",
    resposta: "Oferecemos suporte pós-projeto para ajustes, dúvidas e manutenção, garantindo o funcionamento contínuo da solução entregue."
  },
  {
    pergunta: "Quais são as formas de pagamento?",
    resposta: "Trabalhamos com diversas formas de pagamento, incluindo parcelamento, para facilitar a contratação dos nossos serviços."
  },
  {
    pergunta: "Posso solicitar alterações após o projeto ser entregue?",
    resposta: "Sim! Após a entrega, você pode solicitar ajustes e melhorias. Temos planos de manutenção e também realizamos orçamentos para demandas pontuais."
  },
  {
    pergunta: "Vocês oferecem hospedagem e domínio?",
    resposta: "Sim, oferecemos orientação e suporte para contratação de hospedagem e domínio, além de planos completos para que você não precise se preocupar com a parte técnica."
  }
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="w-full md:w-[600px] md:max-w-[600px] bg-[#202443] rounded-2xl shadow-2xl p-6 text-white max-h-[600px] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-400 text-center">Perguntas Frequentes</h2>
      <ul className="space-y-3">
        {faqData.map((item, idx) => (
          <li key={idx}>
            <button
              className="w-full text-left font-semibold flex justify-between items-center py-2 px-3 rounded-lg bg-[#23284a] hover:bg-[#23284a]/80 transition"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
            >
              <span>{item.pergunta}</span>
              <span className={`ml-2 transition-transform ${open === idx ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {open === idx && (
              <div className="mt-2 px-3 py-3 rounded-lg bg-gradient-to-r from-blue-900/70 to-blue-600/30 text-gray-100 animate-fade-in border-l-4 border-blue-400 shadow-md">
                {item.resposta}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Contato: React.FC = () => {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);
  const [faqMobileOpen, setFaqMobileOpen] = useState(false);
  const [faqMobileExiting, setFaqMobileExiting] = useState(false);

  const closeFaqMobile = () => {
    setFaqMobileExiting(true);
    setTimeout(() => {
      setFaqMobileOpen(false);
      setFaqMobileExiting(false);
    }, 300);
  };

  useEffect(() => {
    if (faqMobileOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [faqMobileOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
  };

  const isFilled = (field: keyof typeof form) => form[field].length > 0;

  return (
    <section id="contato" className="py-16 bg-[#131628] flex items-center justify-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-[1600px] mx-auto relative">
        <div className="w-full md:w-[600px] max-w-[800px] z-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-[#23284a]/80 rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-400 text-center">Contato</h2>
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
        <div className="hidden md:block w-full md:w-[600px] max-w-[700px]">
          <FAQ />
        </div>
        <button
          type="button"
          className="fixed bottom-14 left-6 z-[100] md:hidden bg-blue-700 text-white font-bold px-4 py-3 rounded-full shadow-lg"
          onClick={() => setFaqMobileOpen(true)}
        >
          Perguntas Frequentes
        </button>
        {(faqMobileOpen || faqMobileExiting) && (
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 md:hidden transition-opacity duration-300 animate-fade-in"
            onClick={closeFaqMobile}
          >
            <div
              className={`relative w-[98vw] max-w-lg mx-auto bg-[#202443] rounded-2xl p-4 transition-all duration-300 transform ${faqMobileExiting ? 'animate-slide-down' : 'animate-slide-up'}`}
              onClick={e => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute top-2 right-2 text-white text-2xl font-bold z-50"
                onClick={closeFaqMobile}
                aria-label="Fechar FAQ"
              >
                ×
              </button>
              <FAQ />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contato;
