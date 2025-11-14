'use client';

import { useState } from 'react';
import { Menu, X, Search, Heart, User, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#003366] text-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-[#002244] py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">📍 São Miguel das Missões - RS</span>
            <span className="hidden md:inline">CNPJ: 37.848.045/0001-20</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="text-xs sm:text-sm">Contato via WhatsApp</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg">
              <span className="text-[#003366] font-bold text-xl sm:text-2xl">FILTERSUL</span>
            </div>
            <div className="hidden md:block">
              <p className="text-xs text-gray-300">Filtragem de Diesel</p>
              <p className="text-xs text-gray-400">Qualidade e Confiança</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#catalog" className="hover:text-gray-300 transition-colors">Catálogo</a>
            <a href="#categories" className="hover:text-gray-300 transition-colors">Categorias</a>
            <a href="#videos" className="hover:text-gray-300 transition-colors">Vídeos</a>
            <a href="#about" className="hover:text-gray-300 transition-colors">Sobre</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contato</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-[#004488]">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-[#004488] hidden sm:flex">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-[#004488] hidden sm:flex">
              <User className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-4 hidden md:block">
          <div className="relative max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Buscar produtos por nome, modelo, categoria ou código..."
              className="w-full pl-10 pr-4 py-2 bg-white text-gray-900"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#002244] border-t border-[#003366]">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <a href="#catalog" className="py-2 hover:text-gray-300 transition-colors">📦 Catálogo de Produtos</a>
            <a href="#categories" className="py-2 hover:text-gray-300 transition-colors">📂 Categorias</a>
            <a href="#favorites" className="py-2 hover:text-gray-300 transition-colors">❤️ Favoritos</a>
            <a href="#videos" className="py-2 hover:text-gray-300 transition-colors">🎥 Vídeos dos Produtos</a>
            <a href="#about" className="py-2 hover:text-gray-300 transition-colors">ℹ️ Sobre a Empresa</a>
            <a href="#contact" className="py-2 hover:text-gray-300 transition-colors">📞 Contato</a>
            <a href="#account" className="py-2 hover:text-gray-300 transition-colors">👤 Minha Conta</a>
          </nav>
        </div>
      )}
    </header>
  );
}
