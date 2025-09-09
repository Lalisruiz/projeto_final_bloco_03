import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-veg-100 text-veg-900 py-3 px-6 flex flex-col md:flex-row md:justify-between md:items-center shadow-lg sticky top-0 z-50">
      {/* Primeira linha: Logo e ícones mobile */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center gap-x-3">
          <div className="bg-veg-300 rounded-full w-10 h-10 flex items-center justify-center shadow-md">
            <span className="font-bold text-xl text-veg-900">V</span>
          </div>
          <span className="font-bold text-2xl tracking-wide text-veg-700">Veg Farma</span>
        </div>
        
        {/* Menu mobile */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-veg-200 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Segunda linha: Search e ícones - visível sempre no desktop, condicional no mobile */}
      <div className={`flex flex-col md:flex-row items-center w-full md:w-auto mt-4 md:mt-0 ${isMenuOpen ? 'flex' : 'hidden md:flex'}`}>
        <div className="flex-1 md:flex-none md:mx-6 mb-4 md:mb-0 w-full">
          <div className="relative max-w-xl mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Buscar produtos, saúde e bem-estar..."
              className="w-full px-4 py-2 pl-10 rounded-full text-veg-900 focus:outline-none focus:ring-2 focus:ring-veg-400 border border-veg-300 bg-veg-50 shadow-sm"
            />
            <svg 
              className="absolute left-3 top-2.5 w-4 h-4 text-veg-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-x-5 md:gap-x-6 w-full justify-center md:justify-end">
          <Link to="/" className="flex items-center gap-x-1 hover:text-veg-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="hidden sm:inline">Home</span>
          </Link>
          <div className="flex gap-4">
            <Link to="/categorias" className="hover:text-veg-700 transition-colors">Lista de Categorias</Link>
            <Link to="/categorias/cadastro" className="hover:text-veg-700 transition-colors">Cadastrar Categorias</Link>
          </div>
          {/* Adicione outros Links para rotas futuras */}
          <span className="relative cursor-pointer hover:text-veg-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full w-4 h-4 flex items-center justify-center">3</span>
          </span>
          
          <span className="relative cursor-pointer hover:text-veg-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h10a1 1 0 00.95-.68L19 13M7 13V6h13" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full w-4 h-4 flex items-center justify-center">2</span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;