import React from "react";
import ImgSites from "../../assets/sitesresponsivos.webp";
import ImgSistemas from "../../assets/sistemas.webp";
import ImgApps from "../../assets/apps.webp";
import ImgAutomacao from "../../assets/automacao.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const servicos = [
  {
    titulo: "Criação de Sites",
    descricao: "Sites institucionais, landing pages e lojas virtuais com design moderno, responsivo e otimizado.",
    imagem: ImgSites,
    alt: "sites responsivos"
  },
  {
    titulo: "Sistemas Personalizados",
    descricao: "Desenvolvimento de sistemas para automatizar processos e aumentar a eficiência do seu negócio.",
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
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          centeredSlides
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          style={{ padding: '20px 0' }}
        >
          {servicos.map((serv) => (
            <SwiperSlide key={serv.titulo}>
              <div className="bg-[#121727] rounded-2xl shadow-xl text-white text-center flex flex-col items-center p-6 relative overflow-hidden transition-transform duration-300">
                <img src={serv.imagem} alt={serv.alt} className="w-65 h-48 object-contain mx-auto mb-2" />
                <h3 className="text-lg font-semibold mt-3 mb-2">{serv.titulo}</h3>
                <p className="text-gray-300 text-lg">{serv.descricao}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Servicos;
