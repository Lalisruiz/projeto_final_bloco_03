import React, { useState } from 'react';
import { deleteCategoria } from '../../../../services/Service';


const DeletarCategoria: React.FC = () => {
  const [id, setId] = useState<number | null>(null);
  const [mensagem, setMensagem] = useState('');

  const handleDelete = async () => {
    if (!id) return;
    try {
      await deleteCategoria(id);
      setMensagem('Categoria deletada com sucesso!');
      setId(null);
    } catch (error) {
      setMensagem('Erro ao deletar categoria.');
    }
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <input
        type="number"
        placeholder="ID da categoria para deletar"
        className="border rounded p-2"
        value={id ?? ''}
        onChange={e => setId(e.target.value ? Number(e.target.value) : null)}
      />
      <button className="bg-red-600 text-white rounded px-4 py-2" onClick={handleDelete} disabled={!id}>
        Deletar Categoria
      </button>
      {mensagem && <span className="text-red-700 mt-2">{mensagem}</span>}
    </div>
  );
};

export default DeletarCategoria;
