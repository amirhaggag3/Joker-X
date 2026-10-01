'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/store';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-ink flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
          <Link href="/shop" className="btn-primary inline-block">
            <span className="flex items-center gap-2">
              <ArrowLeft size={20} /> Back to Shop
            </span>
          </Link>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-ink flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-6xl mb-6">✓</div>
          <h1 className="text-4xl font-bold mb-4 text-green-400">Order Placed Successfully!</h1>
          <p className="text-gray-400 mb-4">Thank you for your purchase. Your order has been received.</p>
          <p className="text-gray-500 mb-8">Order ID: #JKX{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          <div className="space-y-3 mb-8">
            <p className="text-gray-300">A confirmation email has been sent to {formData.email}</p>
            <p className="text-gray-300">You can track your order status in your account.</p>
          </div>
          <Link href="/" className="btn-primary inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setOrderPlaced(true);
    clearCart();
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-ink">
      <div className="container-custom section-padding">
        <Link href="/cart" className="flex items-center gap-2 text-primary hover:text-purple-400 mb-8">
          <ArrowLeft size={20} /> Back to Cart
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Shipping Information */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 text-white p-3 rounded focus-ring"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 text-white p-3 rounded focus-ring"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 text-white p-3 rounded focus-ring"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 text-white p-3 rounded focus-ring"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 text-white p-3 rounded focus-ring md:col-span-2"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 text-white p-3 rounded focus-ring"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 text-white p-3 rounded focus-ring"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 text-white p-3 rounded focus-ring"
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="cardName"
                    placeholder="Name on Card"
                    value={formData.cardName}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 text-white p-3 rounded focus-ring"
                  />
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number (4532 1234 5678 9010)"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 text-white p-3 rounded focus-ring"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="expiry"
                      placeholder="MM/YY"
                      value={formData.expiry}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 text-white p-3 rounded focus-ring"
                    />
                    <input
                      type="text"
                      name="cvc"
                      placeholder="CVC"
                      value={formData.cvc}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 text-white p-3 rounded focus-ring"
                    />
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-4">🔒 Your payment information is secure and encrypted</p>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Processing...' : 'Place Order'}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6 sticky top-20">
              <h2 className="text-2xl font-bold mb-6">Order Review</h2>
              <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-gray-300">
                    <span className="truncate">{item.name} x{item.quantity}</span>
                    <span className="flex-shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-800 pt-4 space-y-2">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${(total / 1.1).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400 text-sm">
                  <span>Tax</span>
                  <span>${(total * 0.1 / 1.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-800 pt-4 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="gradient-text">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
