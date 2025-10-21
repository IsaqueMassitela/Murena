export default function Sobre() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      {/* Cabeçalho */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Condomínio Circular Residence
        </h1>
        <p className="text-xl text-gray-600 italic">
          Bem-vindo ao seu novo lar na Matola!
        </p>
      </div>

      {/* Introdução */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sobre Nós</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          O <strong>Condomínio Circular Residence</strong> representa a perfeita 
          combinação entre conforto, segurança e localização privilegiada. Situado 
          estrategicamente na Circular, Matola, junto à paragem de autocarros "2 Quartos", 
          oferecemos moradias modernas que se adaptam ao seu estilo de vida.
        </p>
      </div>

      {/* Localização */}
      <div className="mb-12 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📍 Localização Estratégica</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Localizado a apenas <strong>100 metros da Estrada Circular</strong> com 
          acesso direto à <strong>N4</strong>, o nosso condomínio oferece-lhe:
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 mt-1">✓</span>
            <span><strong>Acessibilidade incomparável</strong> - transportes públicos à porta</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 mt-1">✓</span>
            <span><strong>Conectividade rápida</strong> - ligação imediata às principais vias de Maputo e Matola</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 mt-1">✓</span>
            <span><strong>Proximidade a serviços essenciais</strong> - supermercados, farmácias, escolas e hospitais nas redondezas</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-3 mt-1">✓</span>
            <span><strong>Facilidade de deslocação</strong> - ideal para quem trabalha em Maputo ou Matola</span>
          </li>
        </ul>
      </div>

      {/* Tipologias */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Moradias Disponíveis</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Tipo 1 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-3">🏠</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">TIPO 1 - Conforto Essencial</h3>
            <p className="text-gray-700 leading-relaxed">
              Moradias elegantes e funcionais, perfeitas para jovens casais, profissionais 
              ou pequenas famílias que valorizam praticidade sem abrir mão da qualidade.
            </p>
          </div>

          {/* Tipo 2 */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-3">🏡</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">TIPO 2 - Espaço e Sofisticação</h3>
            <p className="text-gray-700 leading-relaxed">
              Moradias amplas com design contemporâneo, ideais para famílias que procuram 
              mais espaço, conforto e privacidade.
            </p>
          </div>
        </div>
      </div>

      {/* Diferenciais */}
      <div className="mb-12 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Diferenciais do Condomínio</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <span className="text-green-600 text-xl mr-3">✓</span>
            <div>
              <strong className="text-gray-800">Segurança 24 horas</strong>
              <p className="text-gray-600">Vigilância permanente e controle de acesso</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-green-600 text-xl mr-3">✓</span>
            <div>
              <strong className="text-gray-800">Arquitetura moderna</strong>
              <p className="text-gray-600">Acabamentos de primeira qualidade</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-green-600 text-xl mr-3">✓</span>
            <div>
              <strong className="text-gray-800">Pavimento em calçada decorativa</strong>
              <p className="text-gray-600">Beleza e durabilidade</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-green-600 text-xl mr-3">✓</span>
            <div>
              <strong className="text-gray-800">Espaço para estacionamento</strong>
              <p className="text-gray-600">Vagas privativas</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-green-600 text-xl mr-3">✓</span>
            <div>
              <strong className="text-gray-800">Ambiente familiar</strong>
              <p className="text-gray-600">Comunidade tranquila e segura</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-green-600 text-xl mr-3">✓</span>
            <div>
              <strong className="text-gray-800">Infraestrutura completa</strong>
              <p className="text-gray-600">Água, energia e saneamento</p>
            </div>
          </div>
          <div className="flex items-start md:col-span-2">
            <span className="text-green-600 text-xl mr-3">✓</span>
            <div>
              <strong className="text-gray-800">Proximidade ao centro</strong>
              <p className="text-gray-600">O melhor dos dois mundos: tranquilidade e acessibilidade</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Invista no Seu Futuro</h2>
        <p className="text-lg leading-relaxed mb-6">
          Mais do que um imóvel, o <strong>Circular Residence</strong> oferece qualidade 
          de vida, valorização patrimonial e a realização do sonho da casa própria num 
          dos locais mais promissores da Matola.
        </p>
      </div>

      {/* Contato */}
      <div className="border-t-2 border-gray-200 pt-8">
        <div className="text-center space-y-4">
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">📍 Localização:</span> Circular, Matola - Paragem "2 Quartos"
          </p>
          <p className="text-gray-700 text-lg mb-6">
            <span className="font-semibold">📞 Contacte-nos</span> para agendar, reservar ou uma visita e conhecer o seu futuro lar!
          </p>
          
          {/* Botão WhatsApp */}
          <div className="flex justify-center">
            <a 
              href="https://wa.me/258SEUNUMERO?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Condomínio%20Circular%20Residence" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Fale Connosco
            </a>
          </div>

          <p className="text-xl font-bold text-blue-600 mt-8">
            Condomínios Murena - Onde a sua família merece viver!
          </p>
        </div>
      </div>
    </section>
  );
}