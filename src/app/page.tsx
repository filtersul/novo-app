'use client';

import { useState } from 'react';
import Header from '@/components/custom/Header';
import ProductCard from '@/components/custom/ProductCard';
import CategoryCard from '@/components/custom/CategoryCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { products, categories } from '@/lib/data';
import { ArrowRight, Filter, Star, TrendingUp } from 'lucide-react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#003366] via-[#004488] to-[#003366] text-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">🏆 Líder em Filtragem de Diesel</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Catálogo Digital
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                FILTERSUL
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Soluções completas em filtragem de diesel para tanques, máquinas agrícolas e frotas industriais.
              Qualidade, durabilidade e tecnologia de ponta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#003366] hover:bg-gray-100 font-semibold text-lg px-8"
              >
                Explorar Catálogo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8"
              >
                Solicitar Cotação
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">60+</div>
                <div className="text-sm text-gray-200">Produtos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-sm text-gray-200">Anos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">1000+</div>
                <div className="text-sm text-gray-200">Clientes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Categorias de Produtos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore nossa linha completa de produtos organizados por categoria
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === category.name ? null : category.name
                  )
                }
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="catalog" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                {selectedCategory || 'Produtos em Destaque'}
              </h2>
              <p className="text-gray-600">
                {selectedCategory
                  ? `${filteredProducts.length} produtos encontrados`
                  : 'Conheça nossa linha premium de produtos'}
              </p>
            </div>
            {selectedCategory && (
              <Button
                variant="outline"
                onClick={() => setSelectedCategory(null)}
                className="border-[#003366] text-[#003366]"
              >
                Limpar Filtro
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                Nenhum produto encontrado nesta categoria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#003366] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Qualidade Garantida</h3>
              <p className="text-gray-200">
                Produtos certificados e testados para máxima eficiência
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tecnologia Avançada</h3>
              <p className="text-gray-200">
                Inovação constante em sistemas de filtragem
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Suporte Especializado</h3>
              <p className="text-gray-200">
                Equipe técnica pronta para auxiliar você
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#003366] to-[#004488] rounded-2xl p-8 sm:p-12 text-white text-center shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Precisa de uma Solução Personalizada?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para desenvolver a solução ideal para suas necessidades específicas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-white text-gray-900 max-w-xs"
              />
              <Button size="lg" className="bg-white text-[#003366] hover:bg-gray-100 font-semibold">
                Solicitar Contato
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-[#002244] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">FILTERSUL</h3>
              <p className="text-gray-300 text-sm">
                Especialistas em filtragem de diesel desde 2010. Qualidade e confiança para seu negócio.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produtos</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Tanques de Abastecimento</li>
                <li>Filtros Industriais</li>
                <li>Elementos Filtrantes</li>
                <li>Máquinas Agrícolas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Sobre Nós</li>
                <li>Política de Privacidade</li>
                <li>Termos de Uso</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>📍 São Miguel das Missões - RS</li>
                <li>📞 WhatsApp: (55) 99999-9999</li>
                <li>✉️ contato@filtersul.com.br</li>
                <li>🏢 CNPJ: 37.848.045/0001-20</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 FILTERSUL - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
