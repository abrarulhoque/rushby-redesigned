'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Tag, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AnnouncementBar from '@/components/wordpress/AnnouncementBar';
import HeaderWP from '@/components/wordpress/HeaderWP';
import Footer from '@/components/Footer';
import FloatingCurrencySwitcher from '@/components/wordpress/FloatingCurrencySwitcher';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  variant?: string;
  sku: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'The Jackal Flat Trigger',
      price: 89.99,
      quantity: 1,
      image: '/images/products/jackal-trigger.jpg',
      variant: 'Black Anodized',
      sku: 'JFT-BLK-001',
    },
    {
      id: 2,
      name: 'CZ P07/P09 Magwell',
      price: 64.99,
      quantity: 2,
      image: '/images/products/magwell.jpg',
      variant: 'Red Anodized',
      sku: 'MAG-RED-002',
    },
    {
      id: 3,
      name: 'Competition Spring Kit',
      price: 34.99,
      quantity: 1,
      image: '/images/products/spring-kit.jpg',
      sku: 'SPR-KIT-003',
    },
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);

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

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'SAVE10') {
      setAppliedCoupon(couponCode);
      setDiscount(0.1); // 10% discount
      setCouponCode('');
    } else if (couponCode.toUpperCase() === 'FREESHIP') {
      setAppliedCoupon(couponCode);
      setDiscount(0);
      setCouponCode('');
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setDiscount(0);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discountAmount = subtotal * discount;
  const shippingCost = appliedCoupon?.toUpperCase() === 'FREESHIP' ? 0 : 15.00;
  const tax = (subtotal - discountAmount) * 0.15; // 15% tax
  const total = subtotal - discountAmount + shippingCost + tax;

  return (
    <main className="min-h-screen bg-gray-100">
      <AnnouncementBar />
      <HeaderWP />

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          // Empty Cart State
          <div className="bg-white rounded-lg shadow p-8 md:p-12 text-center">
            <ShoppingBag className="w-20 h-20 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Add some products to get started
            </p>
            <Button
              asChild
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow p-4 md:p-6"
                >
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="128" height="128"%3E%3Crect fill="%23f3f4f6" width="128" height="128"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14" fill="%239ca3af"%3ENo Image%3C/text%3E%3C/svg%3E';
                        }}
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-4 mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-base md:text-lg mb-1">
                            {item.name}
                          </h3>
                          {item.variant && (
                            <p className="text-sm text-gray-600 mb-1">{item.variant}</p>
                          )}
                          <p className="text-xs text-gray-500">SKU: {item.sku}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-600 transition-colors h-fit"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-base font-medium text-gray-900 w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <div className="text-lg md:text-xl font-bold text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          {item.quantity > 1 && (
                            <div className="text-xs text-gray-600">
                              ${item.price.toFixed(2)} each
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Continue Shopping Link */}
              <div className="pt-4">
                <Link
                  href="/shop"
                  className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2"
                >
                  ← Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                {/* Coupon Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Discount Code
                  </label>
                  {appliedCoupon ? (
                    <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-900">
                          {appliedCoupon}
                        </span>
                      </div>
                      <button
                        onClick={removeCoupon}
                        className="text-green-600 hover:text-green-800"
                        aria-label="Remove coupon"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        placeholder="Enter code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="flex-1"
                      />
                      <Button
                        onClick={applyCoupon}
                        variant="outline"
                        className="border-gray-300"
                      >
                        Apply
                      </Button>
                    </div>
                  )}
                  <p className="text-xs text-gray-500 mt-2">
                    Try: SAVE10 or FREESHIP
                  </p>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (10%)</span>
                      <span className="font-medium">-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-medium">
                      {shippingCost === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `$${shippingCost.toFixed(2)}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-700">
                    <span>Tax (15%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between text-lg font-bold text-gray-900 mb-6">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                {/* Checkout Button */}
                <Button
                  asChild
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold group mb-3"
                >
                  <Link href="/checkout">
                    PROCEED TO CHECKOUT
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                {/* Trust Badges */}
                <div className="pt-4 border-t border-gray-200 space-y-2 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Free shipping over $150</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>Lifetime warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-black">
        <Footer />
      </div>
      <FloatingCurrencySwitcher />
    </main>
  );
}
