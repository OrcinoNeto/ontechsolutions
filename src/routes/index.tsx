import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Sobre from "../pages/Sobre";
import Servicos from "../pages/Servicos";
import Contato from "../pages/Contato";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/sobre" element={<Sobre />} />
    <Route path="/servicos" element={<Servicos />} />
    <Route path="/contato" element={<Contato />} />
  </Routes>
);

export default AppRoutes; 