import React from "react";

const posts = [
  {
    titulo: "Como escolher a melhor plataforma para seu site?",
    resumo: "Veja dicas essenciais para decidir entre WordPress, sistemas próprios e outras opções.",
    data: "10/06/2024",
  },
  {
    titulo: "Tendências de tecnologia para 2024",
    resumo: "Descubra as principais novidades em desenvolvimento web, mobile e automação.",
    data: "02/06/2024",
  },
  {
    titulo: "Por que investir em automação?",
    resumo: "Entenda como a automação pode aumentar a eficiência e reduzir custos na sua empresa.",
    data: "25/05/2024",
  },
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-16 bg-[#181c2f]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {posts.map((post) => (
            <div key={post.titulo} className="bg-[#23284a] rounded-2xl shadow-lg text-white p-8 flex flex-col items-start hover:scale-105 transition-transform duration-300">
              <span className="text-xs text-gray-400 mb-2">{post.data}</span>
              <h3 className="text-lg font-semibold mb-2">{post.titulo}</h3>
              <p className="text-gray-200 text-base mb-4">{post.resumo}</p>
              <button className="mt-auto bg-gradient-to-r from-blue-500 to-green-400 text-white px-4 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition">Ler mais</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
