'use client';

import { useState } from 'react';
import { Heart, MessageCircle, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(product.isFavorite || false);

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de solicitar uma cotação para o produto: ${product.name} - ${product.model}`;
    const whatsappUrl = `https://wa.me/5555999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-gray-200">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </button>

        {/* Category Badge */}
        <Badge className="absolute top-3 left-3 bg-[#003366] text-white">
          {product.category}
        </Badge>
      </div>

      <CardContent className="p-4">
        {/* Product Name */}
        <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-[#003366] font-semibold mb-3">
          Modelo: {product.model}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {product.description}
        </p>

        {/* Technical Specs */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {product.technicalSpecs.micronage && (
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-xs text-gray-500">Micragem</p>
              <p className="text-sm font-semibold text-gray-900">{product.technicalSpecs.micronage}</p>
            </div>
          )}
          {product.technicalSpecs.flow && (
            <div className="bg-gray-50 p-2 rounded">
              <p className="text-xs text-gray-500">Vazão</p>
              <p className="text-sm font-semibold text-gray-900">{product.technicalSpecs.flow}</p>
            </div>
          )}
          {product.technicalSpecs.capacity && (
            <div className="bg-gray-50 p-2 rounded col-span-2">
              <p className="text-xs text-gray-500">Capacidade</p>
              <p className="text-sm font-semibold text-gray-900">{product.technicalSpecs.capacity}</p>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white"
        >
          <Eye className="w-4 h-4 mr-2" />
          Detalhes
        </Button>
        <Button
          size="sm"
          className="flex-1 bg-green-600 hover:bg-green-700 text-white"
          onClick={handleWhatsApp}
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Cotação
        </Button>
      </CardFooter>
    </Card>
  );
}
