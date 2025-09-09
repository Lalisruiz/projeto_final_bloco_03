
const ModalProduto: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="font-bold mb-2">Modal Produto</h3>
        {/* Conteúdo do modal aqui */}
      </div>
    </div>
  );
};

export default ModalProduto;
