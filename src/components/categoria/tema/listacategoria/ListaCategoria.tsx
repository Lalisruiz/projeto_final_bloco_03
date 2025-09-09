const categorias = [
  { id: 1, nome: 'Medicamentos sem receita' },
  { id: 2, nome: 'Medicamentos sob receita' },
  { id: 3, nome: 'Dermocosméticos' },
  { id: 4, nome: 'Vitaminas e Suplementos' },
  { id: 5, nome: 'Higiene Pessoal' },
  { id: 6, nome: 'Primeiros Socorros' },
  { id: 7, nome: 'Saúde Sexual' },
  { id: 8, nome: 'Saúde e higiene Infantil' }
];

const ListaCategoria: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-8 bg-gradient-to-br from-green-50 via-green-100 to-green-200 rounded-xl shadow-lg">
      <h2 className="text-3xl font-extrabold text-green-700 mb-6 drop-shadow">Lista de Categorias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        {categorias.map((cat) => (
          <div key={cat.id} className="flex flex-col items-center bg-white rounded-xl p-6 shadow hover:scale-105 transition-transform">
            <span className="font-semibold text-green-700 text-lg">{cat.nome}</span>
            <span className="mt-2 text-xs text-green-500">100% vegano</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListaCategoria;
