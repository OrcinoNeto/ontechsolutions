import React from "react";
import ImgSites from "../../assets/sitesresponsivos.webp";
import ImgSistemas from "../../assets/sistemas.webp";
import ImgApps from "../../assets/apps.webp";
import ImgAutomacao from "../../assets/automacao.webp";

const servicos = [
  {
    titulo: "Criação de Sites",
    descricao: "Sites institucionais, landing pages e lojas virtuais com design moderno, responsivo e otimizado para o Google.",
    imagem: ImgSites,
    alt: "sites responsivos"
  },
  {
    titulo: "Sistemas Personalizados",
    descricao: "Desenvolvimento de sistemas sob medida para automatizar processos e aumentar a eficiência do seu negócio.",
    imagem: ImgSistemas,
    alt: "sistemas"
  },
  {
    titulo: "Aplicativos Mobile",
    descricao: "Apps Android e iOS para aproximar sua empresa dos clientes e ampliar sua presença digital.",
    imagem: ImgApps,
    alt: "apps"
  },
  {
    titulo: "Automação & Consultoria",
    descricao: "Soluções inteligentes para otimizar operações, integrar sistemas e consultoria em tecnologia.",
    imagem: ImgAutomacao,
    alt: "automacao"
  },
];

const Servicos: React.FC = () => {
  return (
    <section id="servicos" className="py-12 bg-[#1a233a]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Nossos Serviços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {servicos.map((serv) => (
            <div key={serv.titulo} className="bg-[#121727] rounded-2xl shadow-xl text-white text-center flex flex-col items-center p-6 relative overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(0,183,255,0.5)]">
              <img src={serv.imagem} alt={serv.alt} className="w-65 h-48 object-contain mx-auto mb-2" />
              <h5 className="text-lg font-semibold mt-3 mb-2">{serv.titulo}</h5>
              <p className="text-gray-300 text-lg">{serv.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos; 