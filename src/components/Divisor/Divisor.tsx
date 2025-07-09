import * as React from "react";
// @ts-ignore
import "./divisor.css";

type Sobreposicao = "topo" | "base" | "ambos" | undefined;

interface DivisorProps {
  sobreposicao?: Sobreposicao;
  className?: string;
  style?: React.CSSProperties;
}

const classeSobreposicao = (sobreposicao?: Sobreposicao) => {
  switch (sobreposicao) {
    case "topo":
      return "divisor-sobreposicao-topo";
    case "base":
      return "divisor-sobreposicao-base";
    case "ambos":
      return "divisor-sobreposicao-ambos";
    default:
      return "";
  }
};

const Divisor: React.FC<DivisorProps> = ({
  sobreposicao,
  className = "",
  style = {},
}: DivisorProps) => (
  <div
    className={`divisor-onda-wrapper ${classeSobreposicao(sobreposicao)} ${className}`}
    style={style}
  >
    <svg
      className="divisor-onda"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <path
          id="onda-suave"
          d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
        />
      </defs>
      <g className="paralaxe1">
        <use xlinkHref="#onda-suave" x="50" y="3" fill="#3DB163" />
      </g>
      <g className="paralaxe2">
        <use xlinkHref="#onda-suave" x="50" y="0" fill="#2A61B6" />
      </g>
      <g className="paralaxe3">
        <use xlinkHref="#onda-suave" x="50" y="9" fill="#0a3255" />
      </g>
      <g className="paralaxe4">
        <use xlinkHref="#onda-suave" x="50" y="6" fill="#121727" />
      </g>
    </svg>
  </div>
);

export default Divisor; 