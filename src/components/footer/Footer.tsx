// Importações de ícones de redes sociais removidas conforme solicitado.


function Footer() {
  // Ano atual
  let data = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--primary)] text-white py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Informações da farmácia */}
        <h3 className="text-xl font-bold mb-2">Veg Farma</h3>
        <p className="mb-2">Cuidando de você com carinho desde 2025</p>
        <p className="text-green-200 mb-4">Oferecemos produtos farmacêuticos de qualidade com atendimento personalizado.</p>

        {/* Redes sociais */}
        <p className="text-lg mb-2">Acesse nossas redes sociais</p>
        <div className="flex gap-4 mb-4">
            {/* Redes sociais removidas conforme solicitado */}
        </div>

        {/* Contato */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Contato</h4>
          <ul className="space-y-1">
            <li>(XX) XXXX-XXXX</li>
            <li>contato@veg-farma.com</li>
            <li>Av. Principal, 123 - Cidade</li>
          </ul>
        </div>

        {/* Horário de funcionamento */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Horário de Funcionamento</h4>
          <ul className="space-y-1">
            <li>Seg - Sex: 08h - 20h</li>
            <li>Sábado: 09h - 18h</li>
            <li>Domingo: 10h - 14h</li>
          </ul>
        </div>

        <div className="border-t border-green-600 mt-4 pt-4 text-center w-full">
          <span className="block font-semibold">© {data} Veg Farma. Todos os direitos reservados.</span>
          <span className="block text-sm mt-2 text-green-200">Atenção: Consulte sempre um profissional de saúde. Os medicamentos sob prescrição médica serão dispensados mediante a apresentação da receita.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;