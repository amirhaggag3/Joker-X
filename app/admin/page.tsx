'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/lib/data';
import Image from 'next/image';
import { Trash2, Edit2 } from 'lucide-react';

export default function AdminPage() {
  const [products] = useState(PRODUCTS);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'essentials',
    stock: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Product "${formData.name}" would be added to the system. (Demo - data would persist in DB)`);
    setFormData({ name: '', price: '', category: 'essentials', stock: '' });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-ink">
      <div className="container-custom section-padding">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-400 mt-2">Manage products and orders</p>
          </div>
          <Link href="/" className="btn-secondary">
            Back to Store
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <p className="text-gray-400 text-sm">Total Products</p>
            <p className="text-3xl font-bold mt-2">{products.length}</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <p className="text-gray-400 text-sm">Total Stock</p>
            <p className="text-3xl font-bold mt-2">{products.reduce((sum, p) => sum + p.stock, 0)}</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <p className="text-gray-400 text-sm">Total Value</p>
            <p className="text-3xl font-bold mt-2">${(products.reduce((sum, p) => sum + p.price * p.stock, 0) / 100).toFixed(0)}K</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <p className="text-gray-400 text-sm">Avg Rating</p>
            <p className="text-3xl font-bold mt-2">{(products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(1)}</p>
          </div>
        </div>

        {/* Add Product Button */}
        <div className="mb-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-primary"
          >
            {showForm ? 'Cancel' : '+ Add New Product'}
          </button>
        </div>

        {/* Add Product Form */}
        {showForm && (
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleFormChange}
                required
                className="w-full bg-gray-800 text-white p-3 rounded focus-ring"
              />
              <input
                type="number"
                name="price"
                placeholder="Price ($)"
                value={formData.price}
                onChange={handleFormChange}
                required
                className="w-full bg-gray-800 text-white p-3 rounded focus-ring"
              />
              <select
                name="category"
                value={formData.category}
                onChange={handleFormChange}
                className="w-full bg-gray-800 text-white p-3 rounded focus-ring"
              >
                <option value="essentials">Essentials</option>
                <option value="outerwear">Outerwear</option>
                <option value="apparel">Apparel</option>
                <option value="accessories">Accessories</option>
                <option value="footwear">Footwear</option>
              </select>
              <input
                type="number"
                name="stock"
                placeholder="Stock Quantity"
                value={formData.stock}
                onChange={handleFormChange}
                required
                className="w-full bg-gray-800 text-white p-3 rounded focus-ring"
              />
              <button type="submit" className="btn-primary w-full">
                Add Product
              </button>
            </form>
          </div>
        )}

        {/* Products Table */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Stock</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Rating</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded bg-gray-700 flex-shrink-0 overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="font-medium">{product.name}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-400 capitalize">{product.category}</td>
                    <td className="px-6 py-4 font-semibold">${product.price}</td>
                    <td className="px-6 py-4">{product.stock}</td>
                    <td className="px-6 py-4">{product.rating} ★</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-700 rounded text-gray-400 hover:text-white">
                          <Edit2 size={16} />
                        </button>
                        <button className="p-2 hover:bg-gray-700 rounded text-gray-400 hover:text-red-400">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
