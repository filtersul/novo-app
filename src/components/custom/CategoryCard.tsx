'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Category } from '@/lib/types';
import { Fuel, Tractor, Truck, Filter, Package } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

const iconMap: Record<string, any> = {
  Fuel,
  Tractor,
  Truck,
  Filter,
  Package,
};

export default function CategoryCard({ category }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Package;

  return (
    <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#003366] bg-gradient-to-br from-white to-gray-50">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="bg-gradient-to-br from-[#003366] to-[#004488] p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="font-bold text-lg text-gray-900 mb-2">
          {category.name}
        </h3>
        <p className="text-sm text-gray-600">
          {category.productCount} produtos
        </p>
      </CardContent>
    </Card>
  );
}
