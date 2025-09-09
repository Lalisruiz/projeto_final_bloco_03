import React, { useState } from 'react';
import { createCategoria, updateCategoria } from '../../../../services/Service';

const FormCategoria: React.FC = () => {
  const [id, setId] = useState<number | null>(null);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [precisaReceita, setPrecisaReceita] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await updateCategoria(id, { categoria_nome: nome, descricao, precisaReceita });
        setMensagem('Categoria atualizada com sucesso!');
      } else {
  await createCategoria({
    categoria_nome: nome, descricao, precisaReceita,
    produtos: null
  });
        setMensagem('Categoria cadastrada com sucesso!');
      }
      setId(null);
      setNome('');
      setDescricao('');
      setPrecisaReceita(false);
    } catch (error) {
      setMensagem('Erro ao salvar categoria.');
    }
  };

  return (
    <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="ID para atualizar (opcional)"
        className="border rounded p-2"
        value={id ?? ''}
        onChange={e => setId(e.target.value ? Number(e.target.value) : null)}
      />
      <input
        type="text"
        placeholder="Nome da categoria"
        className="border rounded p-2"
        value={nome}
        onChange={e => setNome(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descrição"
        className="border rounded p-2"
        value={descricao}
        onChange={e => setDescricao(e.target.value)}
        required
      />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={precisaReceita}
          onChange={e => setPrecisaReceita(e.target.checked)}
        />
        Necessita receita?
      </label>
      <button className="bg-green-500 text-white rounded px-4 py-2">
        {id ? 'Atualizar' : 'Cadastrar'}
      </button>
      {mensagem && <span className="text-green-700 mt-2">{mensagem}</span>}
    </form>
  );
};

export default FormCategoria;
