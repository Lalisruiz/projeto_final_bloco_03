
const FormCategoria: React.FC = () => {
  return (
    <form className="flex flex-col gap-4 p-4">
      <input type="text" placeholder="Nome da categoria" className="border rounded p-2" />
      <button className="bg-green-500 text-white rounded px-4 py-2">Cadastrar</button>
    </form>
  );
};

export default FormCategoria;
