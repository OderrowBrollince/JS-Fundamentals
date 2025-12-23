import React from 'react';
import { Calendar, Factory, Package } from 'lucide-react';

interface ProductCardProps {
  product: {
    name: string;
    brand: string;
    type: string;
    batchNumber: string;
    manufactureDate: string;
    expiryDate: string;
    manufacturer: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h4 className="text-gray-900 mb-2">{product.name}</h4>
          <p className="text-gray-600">{product.brand}</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">
          <Package size={16} />
          <span>{product.type}</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-accent-50 text-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Package size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Batch Number</p>
            <p className="font-mono text-gray-900">{product.batchNumber}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-secondary-50 text-secondary-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Calendar size={20} />
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Manufactured</p>
                <p className="text-gray-900">{product.manufactureDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Expires</p>
                <p className="text-gray-900">{product.expiryDate}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Factory size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Manufacturer</p>
            <p className="text-gray-900">{product.manufacturer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
