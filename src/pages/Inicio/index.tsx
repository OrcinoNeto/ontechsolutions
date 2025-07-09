import * as React from "react";
import styles from "./styles.module.css";
import "./botaoOrcamento.css";
import bgGif from "../../assets/bginicio.gif";

const Inicio: React.FC = () => {
  const IconeExemplo = (
    <svg
      className="w-8 h-8 text-green-500 fill-current group-hover:text-green-400 transition-colors duration-300 filter drop-shadow-lg"
      viewBox="0 0 496 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 30.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z" />
    </svg>
  );

  return (
    <section
      id="home"
      className="flex items-center min-h-screen relative overflow-hidden bg-gray-900 max-h-screen"
      style={{ position: "relative" }}
    >
      {/* Fundo animado com GIF */}
      <img
        className={styles.bgVideo}
        src={bgGif}
        alt="Fundo animado"
      />

      {/* Camada de vidro */}
      <div className="w-full flex flex-col items-center justify-center min-h-screen">
        <div className={`${styles.glass} container mx-auto text-center relative z-10 px-4 pt-20`}>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow max-w-2xl mx-auto px-2">
            Impulsione seu negócio com soluções digitais sob medida
          </h1>
          <div className="grid grid-cols-1 min-[470px]:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center mb-8">
            {/* Card 1 */}
            <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
              <div className="text-white rounded-3xl border border-green-500/20 bg-gradient-to-tr from-[#0F0F0F] to-[#0B0B0B] shadow-2xl duration-700 z-10 relative backdrop-blur-xl hover:border-green-500/40 overflow-hidden hover:shadow-green-500/10 hover:shadow-3xl w-full min-w-[220px] max-w-[350px] mx-auto">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-green-400/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-green-500/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce delay-500"></div>
                  <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-green-500/5 blur-xl animate-ping"></div>
                  <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-green-500/5 blur-lg animate-ping delay-1000"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </div>
                <div className="p-4 sm:p-6 md:p-8 relative z-10 flex flex-col items-center text-center">
                  <h5 className="text-base sm:text-lg md:text-2xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent animate-pulse mb-2">Criação de Sites</h5>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">Sites modernos, rápidos e otimizados, perfeitos para destacar sua marca.</p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
              <div className="text-white rounded-3xl border border-green-500/20 bg-gradient-to-tr from-[#0F0F0F] to-[#0B0B0B] shadow-2xl duration-700 z-10 relative backdrop-blur-xl hover:border-green-500/40 overflow-hidden hover:shadow-green-500/10 hover:shadow-3xl w-full min-w-[220px] max-w-[350px] mx-auto">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-green-400/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-green-500/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce delay-500"></div>
                  <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-green-500/5 blur-xl animate-ping"></div>
                  <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-green-500/5 blur-lg animate-ping delay-1000"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </div>
                <div className="p-4 sm:p-6 md:p-8 relative z-10 flex flex-col items-center text-center">
                  <h5 className="text-base sm:text-lg md:text-2xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent animate-pulse mb-2">Sistemas Personalizados</h5>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">Automatize processos e ganhe eficiência com sistemas sob medida.</p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
              <div className="text-white rounded-3xl border border-green-500/20 bg-gradient-to-tr from-[#0F0F0F] to-[#0B0B0B] shadow-2xl duration-700 z-10 relative backdrop-blur-xl hover:border-green-500/40 overflow-hidden hover:shadow-green-500/10 hover:shadow-3xl w-full min-w-[220px] max-w-[350px] mx-auto">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-green-400/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-green-500/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce delay-500"></div>
                  <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-green-500/5 blur-xl animate-ping"></div>
                  <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-green-500/5 blur-lg animate-ping delay-1000"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </div>
                <div className="p-4 sm:p-6 md:p-8 relative z-10 flex flex-col items-center text-center">
                  <h5 className="text-base sm:text-lg md:text-2xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent animate-pulse mb-2">Aplicativos Mobile</h5>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">Leve sua empresa para a palma da mão dos seus clientes com apps Android e iOS.</p>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 esconder-tela-pequena">
              <div className="text-white rounded-3xl border border-green-500/20 bg-gradient-to-tr from-[#0F0F0F] to-[#0B0B0B] shadow-2xl duration-700 z-10 relative backdrop-blur-xl hover:border-green-500/40 overflow-hidden hover:shadow-green-500/10 hover:shadow-3xl w-full min-w-[220px] max-w-[350px] mx-auto">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-green-400/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-green-500/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce delay-500"></div>
                  <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-green-500/5 blur-xl animate-ping"></div>
                  <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-green-500/5 blur-lg animate-ping delay-1000"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </div>
                <div className="p-4 sm:p-6 md:p-8 relative z-10 flex flex-col items-center text-center">
                  <h5 className="text-base sm:text-lg md:text-2xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent animate-pulse mb-2">Automação</h5>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">Soluções inteligentes para otimizar operações e consultoria em tecnologia.</p>
                </div>
              </div>
            </div>
          </div>
          <a href="#contato" className="button mt-4" role="button">
            <span className="fold"></span>
            <div className="points_wrapper">
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
            </div>
            <span className="inner">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}>
                <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
              </svg>
              Solicite um Orçamento
            </span>
          </a>         
        </div>
      </div>
    </section>
  );
};

export default Inicio;