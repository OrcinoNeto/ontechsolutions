import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 text-center text-gray-300" style={{ backgroundColor: '#131628' }}>
      <div className="container mx-auto px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Ontech Solutions. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer; 