import type { FC } from "react";

const FormProduto: FC = () => {
  return (
    <form className="flex flex-col gap-4 p-4">
      <input type="text" placeholder="Nome do produto" className="border rounded p-2" />
      <input type="number" placeholder="Preço" className="border rounded p-2" />
      <button className="bg-green-500 text-white rounded px-4 py-2">Cadastrar</button>
    </form>
  );
};

export default FormProduto;
