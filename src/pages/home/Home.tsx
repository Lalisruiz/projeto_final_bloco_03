import React from 'react';

const Home: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-300">
      <div className="bg-green-50 rounded-2xl shadow-2xl p-10 flex flex-col items-center max-w-xl w-full">
        <h1 className="text-5xl font-extrabold mb-4 text-green-700 drop-shadow-lg">Veg Farma</h1>
        <p className="text-lg text-green-700 mb-6 text-center">
          Bem-vindo à Veg Farma! Aqui você encontra cuidado, confiança e os melhores produtos para sua saúde e bem-estar.<br />
          <span className="font-bold text-green-800 text-xl block mt-2">
            Todos os nossos produtos são <span className="bg-green-200 px-2 py-1 rounded text-green-900">100% veganos</span> e pensados para o seu bem-estar.
          </span>
        </p>
        <div className="flex gap-4 mb-8">
          <a href="/produtos" className="bg-green-400 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-green-500 transition">Ver Produtos Veganos</a>
          <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-green-700 transition">Fale com o farmacêutico</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
