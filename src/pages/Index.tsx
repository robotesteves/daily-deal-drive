import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Hero Component
const Hero = () => (
  <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700">
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
        K'importa
      </h1>
      <p className="text-xl md:text-2xl text-white/90 mb-8">
        O site que importa para quem importa
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6 text-white/95">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm md:text-base font-medium">Viaturas desde 2019</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm md:text-base font-medium">Os melhores stands</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm md:text-base font-medium">Os melhores negócios</span>
        </div>
      </div>
    </div>
  </section>
);

// Filter Bar Component
const FilterBar = ({ priceRange, onPriceRangeChange, sortBy, onSortChange, totalResults }) => (
  <div className="py-1">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

        
        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <Select value={priceRange} onValueChange={onPriceRangeChange}>
            <SelectTrigger className="w-full md:w-[200px] bg-white">
              <SelectValue placeholder="Intervalo de Preço" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os Preços</SelectItem>
              <SelectItem value="0-15000">Até €15.000</SelectItem>
              <SelectItem value="15000-25000">€15.000 - €25.000</SelectItem>
              <SelectItem value="25000-35000">€25.000 - €35.000</SelectItem>
              <SelectItem value="35000-50000">€35.000 - €50.000</SelectItem>
              <SelectItem value="50000+">Mais de €50.000</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-full md:w-[200px] bg-white">
              <SelectValue placeholder="Ordenar Por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-low">Preço: Baixo a Alto</SelectItem>
              <SelectItem value="price-high">Preço: Alto a Baixo</SelectItem>
              <SelectItem value="mileage">Menor Quilometragem</SelectItem>
              <SelectItem value="year">Ano Mais Recente</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  </div>
);

// Car Card Component
const CarCard = ({ car }) => {
  const basePrice = parseFloat(car.preco_base) || 0;
  const isv = parseFloat(car.isv) || 0;
  const serviceFee = 2500;
  const subtotal = isv + serviceFee + basePrice;
  const finalPrice = parseFloat(car.preco_final) || subtotal;
  const olxPrice = parseFloat(car.preco_olx) - subtotal 

  return (
    <Card className="group overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 bg-white">
      <div className="grid md:grid-cols-[380px,1fr] gap-0">
        {/* Image Section - Clicável */}
        <a 
          href={car.link || '#'} 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative overflow-hidden bg-gray-100 block"
          title={`Ver detalhes de ${car.marca} ${car.modelo}`}
        >
          <img 
            src={car.imagem} 
            alt={`${car.marca} ${car.modelo} ${car.ano} - ${car.versao}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 bg-blue-900 text-white px-3 py-1.5 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
            Ver Detalhes
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
              <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
            </svg>
          </div>
        </a>
        
        {/* Details Section */}
        <div className="p-6 flex flex-col">
          <div className="mb-6">
            <a 
              href={car.link || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors block"
            >
              <h3 className="text-lg font-bold text-gray-900 uppercase mb-1 hover:underline">
                {car.marca} {car.modelo} {car.versao}
              </h3>
            </a>
            <p className="text-sm text-gray-500">Importado da Alemanha</p>
          </div>

          {/* Specs Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-500 mb-1 text-xs">Quilómetros</p>
              <p className="font-semibold text-gray-900">{parseInt(car.quilometros).toLocaleString('pt-PT')} km</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-500 mb-1 text-xs">Potência</p>
              <p className="font-semibold text-gray-900">{car.potencia}cv</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-500 mb-1 text-xs">Cilindrada</p>
              <p className="font-semibold text-gray-900">{car.cilindrada}cc</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-500 mb-1 text-xs">Ano</p>
              <p className="font-semibold text-gray-900">{car.ano}</p>
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg mb-4 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
              Simulação de Custos
            </h4>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center py-1">
                <span className="text-gray-600">Valor da Viatura</span>
                <span className="font-bold text-gray-900">{basePrice.toLocaleString('pt-PT', {minimumFractionDigits: 2, maximumFractionDigits: 2})} €</span>
              </div>
              
              <div className="flex justify-between items-center py-1">
                <span className="text-gray-600">ISV</span>
                <span className="font-bold text-gray-900">{isv.toLocaleString('pt-PT', {minimumFractionDigits: 2, maximumFractionDigits: 2})} €</span>
              </div>
              
              <div className="flex justify-between items-center py-1">
                <span className="text-gray-600">Legalização & Transporte (custo médio)</span>
                <span className="font-bold text-gray-900">{serviceFee.toLocaleString('pt-PT', {minimumFractionDigits: 2, maximumFractionDigits: 2})} €</span>
              </div>
              
              <div className="flex justify-between items-center pt-3 border-t-2 border-gray-300 mt-2">
                <span className="text-gray-700 font-semibold">Subtotal</span>
                <span className="font-bold text-gray-900">{subtotal.toLocaleString('pt-PT', {minimumFractionDigits: 2, maximumFractionDigits: 2})} €</span>
              </div>
            </div>
          </div>

          {/* Final Price - Call to Action */}
          <a 
            href={car.link || '#'} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-4 rounded-lg flex justify-between items-center hover:from-blue-800 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <span className="font-bold text-base">Poupança Total:</span>
            <span className="font-bold text-2xl">{olxPrice.toLocaleString('pt-PT', {minimumFractionDigits: 2, maximumFractionDigits: 2})} €</span>
          </a>
        </div>
      </div>
    </Card>
  );
};

// Main App Component
const App = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('price-low');
  const [loading, setLoading] = useState(true);

  // Função para parsear CSV
  const parseCSV = (text) => {
    const lines = text.split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    
    return lines.slice(1)
      .filter(line => line.trim())
      .map(line => {
        const values = line.split(',').map(v => v.trim());
        const car = {};
        headers.forEach((header, index) => {
          car[header] = values[index] || '';
        });
        return car;
      });
  };

  // Carregar dados do CSV
  useEffect(() => {
  const loadCSV = async () => {
    try {
      const res = await fetch('/cars.csv');  // caminho real
      const text = await res.text();
      const parsed = parseCSV(text);

      setCars(parsed);
      setFilteredCars(parsed);
      setLoading(false);
    } catch (err) {
      console.error('Erro ao carregar CSV:', err);
    }
  };

  loadCSV();
}, []);

  // Filtrar e ordenar carros
  useEffect(() => {
    let result = [...cars];

    // Aplicar filtro de preço
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(p => p.replace('+', ''));
      result = result.filter(car => {
        const price = parseFloat(car.preco_final) || 0;
        if (max) {
          return price >= parseFloat(min) && price <= parseFloat(max);
        } else {
          return price >= parseFloat(min);
        }
      });
    }

    // Aplicar ordenação
    result.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return (parseFloat(a.preco_final) || 0) - (parseFloat(b.preco_final) || 0);
        case 'price-high':
          return (parseFloat(b.preco_final) || 0) - (parseFloat(a.preco_final) || 0);
        case 'mileage':
          return (parseInt(a.quilometros) || 0) - (parseInt(b.quilometros) || 0);
        case 'year':
          return (parseInt(b.ano) || 0) - (parseInt(a.ano) || 0);
        default:
          return 0;
      }
    });

    setFilteredCars(result);
  }, [cars, priceRange, sortBy]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-900 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-semibold">A carregar ofertas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Ofertas em Destaque
          </h2>
          <p className="text-gray-600 mb-4">
            {filteredCars.length} {filteredCars.length === 1 ? 'oferta disponível' : 'ofertas disponíveis'} • Atualizadas diariamente
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-900 p-4 rounded-lg shadow-sm">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-900 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-gray-700">
                <strong className="text-blue-900 font-semibold">Garantia de Qualidade:</strong> Selecionamos apenas stands certificados e veículos com histórico completo. Todos os preços incluem ISV e taxas de importação.
              </p>
            </div>
          </div>
        </div>
      <FilterBar 
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        sortBy={sortBy}
        onSortChange={setSortBy}
        totalResults={filteredCars.length}
      />
        {filteredCars.length > 0 ? (
          <div className="space-y-6">
            {filteredCars.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-600 text-lg mb-4">Nenhuma oferta encontrada com os filtros selecionados.</p>
            <button 
              onClick={() => {
                setPriceRange('all');
                setSortBy('price-low');
              }}
              className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16 py-8 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">K'importa</h3>
            <p className="text-sm">O site que importa para quem importa</p>
          </div>
          <p className="font-semibold text-gray-900">© 2024 K'importa. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">Ofertas atualizadas diariamente • Relatórios de histórico • Garantia incluída</p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <a href="#" className="text-blue-900 hover:underline">Sobre Nós</a>
            <a href="#" className="text-blue-900 hover:underline">Contacto</a>
            <a href="#" className="text-blue-900 hover:underline">Termos e Condições</a>
            <a href="#" className="text-blue-900 hover:underline">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
