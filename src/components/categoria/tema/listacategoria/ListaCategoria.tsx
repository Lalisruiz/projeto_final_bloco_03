import type Categoria from '../../../../models/Categoria';
import React, { useEffect, useState } from 'react';
import CardCategoria from '../cardcategoria/CardCategoria';
import { getCategorias } from '../../../../services/Service';

const ListaCategoria: React.FC = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    getCategorias().then(setCategorias);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center py-8 bg-gradient-to-br from-green-50 via-green-100 to-green-200 rounded-xl shadow-lg">
      <h2 className="text-3xl font-extrabold text-green-700 mb-6 drop-shadow">Lista de Categorias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        {categorias.map((cat) => (
          <CardCategoria key={cat.id} categoria={cat} />
        ))}
      </div>
    </section>
  );
};

export default ListaCategoria;
