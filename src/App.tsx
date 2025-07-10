import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";
import Clientes from "./pages/Clientes";
import Blog from "./pages/Blog";
import Divisor from "./components/Divisor";
import WhatsappButton from "./components/WhatsappButton";
import CarregamentoSite from "./components/CarregamentoSite";

const App: React.FC = () => {
  const [carregando, setCarregando] = useState(true);

  return (
    <>
      {carregando && (
        <CarregamentoSite aoFinalizar={() => setCarregando(false)} />
      )}
      {!carregando && (
        <>
          <Header />
          <main>
            <Inicio />
            <Divisor sobreposicao="ambos" />
            <Sobre />
            <Servicos />
            <Divisor sobreposicao="ambos" />
            <Clientes />
            <Blog />
            <Divisor sobreposicao="ambos" />
            <Contato />
          </main>
          <Footer />
          <WhatsappButton />
        </>
      )}
    </>
  );
};

export default App;
