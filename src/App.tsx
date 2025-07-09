import * as React from "react";
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

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Inicio />
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
  );
};

export default App;
