import React from 'react';
import type Categoria from '../../../../models/Categoria';

interface CardCategoriaProps {
  categoria: Categoria;
}

const CardCategoria: React.FC<CardCategoriaProps> = ({ categoria }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <span className="font-bold text-green-700">{categoria.categoria_nome}</span>
      <span className="text-sm text-green-500 mt-1">{categoria.descricao}</span>
      <span className="text-xs text-gray-500 mt-1">{categoria.precisaReceita ? 'Necessita receita' : 'Venda livre'}</span>
    </div>
  );
};

export default CardCategoria;
