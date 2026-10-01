'use client';

import { CartItem as CartItemType } from '@/lib/store';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';

interface Props {
  item: CartItemType;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, qty: number) => void;
}

export default function CartItem({ item, onRemove, onUpdateQuantity }: Props) {
  return (
    <div className="flex gap-6 p-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
        <Image
          src={item.image}
          alt={item.name}
          width={96}
          height={96}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
        <p className="mt-1 text-sm text-gray-400">{item.selectedColor} / {item.selectedSize}</p>
        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center gap-2 rounded border border-gray-700">
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="px-3 py-1 hover:bg-gray-800"
            >
              −
            </button>
            <span className="px-3 py-1 text-white">{item.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="px-3 py-1 hover:bg-gray-800"
            >
              +
            </button>
          </div>
          <p className="text-lg font-bold text-white">${(item.price * item.quantity).toFixed(2)}</p>
          <button
            onClick={() => onRemove(item.id)}
            className="ml-auto text-gray-400 hover:text-red-400"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
