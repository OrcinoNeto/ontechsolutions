import React from "react";

const depoimentos = [
  {
    nome: "João Silva",
    empresa: "AgroTech",
    texto: "A Ontech Solutions transformou nosso site e aumentou nossos leads em 40%. Atendimento excelente!",
  },
  {
    nome: "Maria Oliveira",
    empresa: "Clínica Vida",
    texto: "Equipe muito profissional, entregaram nosso sistema antes do prazo e com qualidade.",
  },
  {
    nome: "Carlos Souza",
    empresa: "Loja Rápida",
    texto: "O app ficou incrível, fácil de usar e nossos clientes adoraram! Recomendo muito.",
  },
];

const Clientes: React.FC = () => {
  return (
    <section id="clientes" className="py-16 bg-[#131628]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Nossos Clientes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {depoimentos.map((dep) => (
            <div key={dep.nome} className="bg-[#23284a] rounded-2xl shadow-lg text-white p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 flex items-center justify-center text-2xl font-bold mb-4">
                {dep.nome[0]}
              </div>
              <p className="text-lg font-medium mb-2">{dep.nome}</p>
              <p className="text-sm text-green-300 mb-4">{dep.empresa}</p>
              <p className="text-gray-200 text-base italic">“{dep.texto}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clientes; 