'use client';

import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  variant?: string;
}

interface SideCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideCart({ isOpen, onClose }: SideCartProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'The Jackal Flat Trigger',
      price: 89.99,
      quantity: 1,
      image: '/images/products/jackal-trigger.jpg',
      variant: 'Black Anodized',
    },
    {
      id: 2,
      name: 'CZ P07/P09 Magwell',
      price: 64.99,
      quantity: 2,
      image: '/images/products/magwell.jpg',
      variant: 'Red Anodized',
    },
    {
      id: 3,
      name: 'Competition Spring Kit',
      price: 34.99,
      quantity: 1,
      image: '/images/products/spring-kit.jpg',
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />
        )}
      </AnimatePresence>

      {/* Side Cart Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-gray-900" />
                <h2 className="text-lg font-bold text-gray-900">
                  Shopping Cart ({cartItems.length})
                </h2>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Add some products to get started
                  </p>
                  <Button
                    onClick={onClose}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                    >
                      {/* Product Image */}
                      <div className="relative w-20 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80"%3E%3Crect fill="%23f3f4f6" width="80" height="80"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="12" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';
                          }}
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                          {item.name}
                        </h3>
                        {item.variant && (
                          <p className="text-xs text-gray-600 mb-2">{item.variant}</p>
                        )}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-medium text-gray-900 w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="font-bold text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors self-start"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-200 p-6 space-y-4 bg-gray-50">
                {/* Subtotal */}
                <div className="flex items-center justify-between text-lg font-bold">
                  <span className="text-gray-900">Subtotal:</span>
                  <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                </div>

                {/* Shipping Note */}
                <p className="text-xs text-gray-600 text-center">
                  Shipping and taxes calculated at checkout
                </p>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button
                    asChild
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold group"
                  >
                    <Link href="/checkout">
                      CHECKOUT
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-gray-300 hover:bg-gray-100"
                  >
                    <Link href="/cart">View Full Cart</Link>
                  </Button>
                </div>

                {/* Continue Shopping */}
                <button
                  onClick={onClose}
                  className="w-full text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
