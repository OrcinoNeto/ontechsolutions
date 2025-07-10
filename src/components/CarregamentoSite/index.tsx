import React, { useEffect, useRef, useState } from "react";
import estilos from "./carregamento.module.css";
import logo from "../../assets/LogoOntech.png";

const TEMPO_CARREGAMENTO = 1000;

const CarregamentoSite: React.FC<{ aoFinalizar: () => void }> = ({ aoFinalizar }) => {
  const [animandoZoom, setAnimandoZoom] = useState(false);
  const [visivel, setVisivel] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setAnimandoZoom(true);
      setTimeout(() => {
        setVisivel(false);
        aoFinalizar();
      }, 300);
    }, TEMPO_CARREGAMENTO);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [aoFinalizar]);

  if (!visivel) return null;

  return (
    <div className={estilos["container-carregamento"]}>
      <div className={estilos["spinners"]}>
        <div className={estilos["spinner-linha"] + " " + estilos["azul"]}></div>
        <div className={estilos["spinner-linha"] + " " + estilos["verde"]}></div>
        <div className={estilos["spinner-linha"] + " " + estilos["vermelho"]}></div>
        <div className={estilos["spinner-linha"] + " " + estilos["ciano"]}></div>
        <img
          src={logo}
          alt="Logo Ontech Solutions"
          className={
            estilos["logo-central"] +
            (animandoZoom ? " " + estilos["zoom-logo"] : "")
          }
        />
      </div>
    </div>
  );
};

export default CarregamentoSite; 
