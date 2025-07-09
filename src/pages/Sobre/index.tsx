import React from "react";
import LogoOntech from "../../assets/LogoOntech.png";

const Sobre: React.FC = () => {
  return (
    <section id="sobre" className="flex flex-col md:flex-row items-center justify-center md:max-h-[50vh] py-7" style={{ backgroundColor: '#131628' }}>
      {/* Imagem */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={LogoOntech}
          alt="Equipe Ontech Solution"
          className="max-w-xs md:max-w-md w-full h-auto rounded-2xl shadow-lg"
        />
      </div>
      {/* Conteúdo texto */}
      <div className="w-full md:w-1/2 px-6 md:px-12 mb-8 md:mb-0">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Sobre a Ontech Solution</h2>
        <p className="text-gray-200 mb-4">
          Somos apaixonados por tecnologia e inovação! Nossa missão é impulsionar o crescimento de empresas por meio de soluções digitais personalizadas, sempre com foco em resultados reais para nossos clientes.
        </p>
        <ul className="list-none space-y-3 mt-6">
          <li className="flex items-start gap-2">
            <span className="text-green-400 font-bold text-lg">✔</span>
            <span className="text-white"><strong>Experiência multidisciplinar:</strong> Equipe especializada em desenvolvimento web, sistemas, apps e automação.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 font-bold text-lg">✔</span>
            <span className="text-white"><strong>Atendimento consultivo:</strong> Entendemos a fundo o seu negócio para entregar a melhor solução.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 font-bold text-lg">✔</span>
            <span className="text-white"><strong>Compromisso com resultados:</strong> Seu sucesso é o nosso maior objetivo.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 font-bold text-lg">✔</span>
            <span className="text-white"><strong>Transparência e parceria:</strong> Relacionamento próximo e comunicação clara em todas as etapas.</span>
          </li>
        </ul>
      </div>      
    </section>
  );
};

export default Sobre; 