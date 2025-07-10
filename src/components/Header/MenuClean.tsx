import * as React from "react";
import "./menuClean.css";

const itensMenu = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Blog", href: "#blog" },
  { label: "Contato", href: "#contato" },
];

const MenuClean: React.FC = () => (
  <ul className="menu-clean">
    {itensMenu.map((item) => (
      <li key={item.label}>
        <a href={item.href}>{item.label}</a>
      </li>
    ))}
  </ul>
);

export default MenuClean;
