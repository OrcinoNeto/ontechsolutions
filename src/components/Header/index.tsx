import { useState } from "react";
import "./menuHamburguer.css";
import MenuClean from "./MenuClean";

const itensMenu = [
  { rotulo: "Início", href: "#home" },
  { rotulo: "Sobre", href: "#sobre" },
  { rotulo: "Serviços", href: "#servicos" },
  { rotulo: "Clientes", href: "#clientes" },
  { rotulo: "Blog", href: "#blog" },
  { rotulo: "Contato", href: "#contato" },
];

const MenuHamburguer: React.FC = () => {
  const [aberto, setAberto] = useState(false);

  const alternarMenu = () => {
    setAberto((prev) => !prev);
  };

  return (
    <>
      <div id="menu" className="menu" style={{ zIndex: 20 }}>
        <div
          id="menu-bar"
          className={`menu-bar${aberto ? " ativo" : ""}`}
          onClick={alternarMenu}
        >
          <div id="barra1" className="barra"></div>
          <div id="barra2" className="barra"></div>
          <div id="barra3" className="barra"></div>
        </div>
        <nav className={`navegacao${aberto ? " ativo" : ""}`} id="navegacao">
          <ul>
            {itensMenu.map((item) => (
              <li key={item.rotulo}>
                <a href={item.href} onClick={() => setAberto(false)}>
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className={`fundo-menu${aberto ? " ativo" : ""}`}
        id="fundo-menu"
        style={{ zIndex: 10 }}
      ></div>
    </>
  );
};

const Header: React.FC = () => {
  return (
    <header className="w-full flex justify-center items-center py-4 bg-transparent z-20 absolute top-0 left-0 px-4">
      {/* Menu Hamburguer customizado - só mobile */}
      <div className="block sm:hidden absolute left-0 top-0">
        <MenuHamburguer />
      </div>
      {/* Menu tradicional - só desktop, centralizado */}
      <nav className="hidden sm:flex gap-8 text-lg font-medium text-white drop-shadow">
        <MenuClean />
      </nav>
    </header>
  );
};

export default Header;
