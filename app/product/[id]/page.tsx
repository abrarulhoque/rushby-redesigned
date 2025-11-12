'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Star, ShoppingCart, Check, ChevronRight, Package, Shield, Truck, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnnouncementBar from '@/components/wordpress/AnnouncementBar';
import HeaderWP from '@/components/wordpress/HeaderWP';
import Footer from '@/components/Footer';
import FloatingCurrencySwitcher from '@/components/wordpress/FloatingCurrencySwitcher';
import { motion } from 'framer-motion';
import { Oswald } from 'next/font/google';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald'
});

// Dummy product data
const PRODUCTS = {
  '1': {
    id: 1,
    name: 'The Jackal - CZ Flat Trigger',
    category: 'Triggers',
    price: 89.99,
    originalPrice: 109.99,
    rating: 5.0,
    reviews: 22,
    badge: 'Best Seller',
    compatibility: 'CZ P07/P09/Omega',
    sku: 'JFT-001',
    inStock: true,
    images: [
      '/images/products/jackal-trigger.jpg',
      '/images/products/jackal-trigger.jpg',
      '/images/products/jackal-trigger.jpg',
    ],
    colors: [
      { name: 'Black Anodized', value: 'black', available: true },
      { name: 'Red Anodized', value: 'red', available: true },
      { name: 'Blue Anodized', value: 'blue', available: true },
      { name: 'Gold Anodized', value: 'gold', available: false },
    ],
    description: 'The Jackal flat trigger is precision-engineered from aerospace-grade 7075 T6 aluminum. Designed to reduce trigger pull weight while maintaining safety and reliability. Perfect for competition shooting and EDC.',
    features: [
      'Drop-in installation - no gunsmithing required',
      'Reduces trigger pull by 30%',
      'Aircraft-grade 7075 T6 aluminum construction',
      'Hard anodized finish for durability',
      'Fits CZ P07, P09, and Omega trigger systems',
      'Made in South Africa',
    ],
    specifications: [
      { label: 'Material', value: '7075 T6 Aluminum' },
      { label: 'Finish', value: 'Type III Hard Anodized' },
      { label: 'Weight', value: '8.5g' },
      { label: 'Installation', value: 'Drop-in (No gunsmithing)' },
      { label: 'Warranty', value: 'Lifetime' },
      { label: 'Origin', value: 'Made in South Africa' },
    ],
  },
  '2': {
    id: 2,
    name: 'CZ P07/P09C Magwell',
    category: 'Magwells',
    price: 64.99,
    originalPrice: undefined,
    rating: 5.0,
    reviews: 11,
    badge: 'Popular',
    compatibility: 'CZ P07/P09',
    sku: 'MAG-002',
    inStock: true,
    images: [
      '/images/products/magwell.jpg',
      '/images/products/magwell.jpg',
    ],
    colors: [
      { name: 'Black Anodized', value: 'black', available: true },
      { name: 'Red Anodized', value: 'red', available: true },
      { name: 'Blue Anodized', value: 'blue', available: true },
    ],
    description: 'Competition-grade magwell designed for lightning-fast reloads. Precision-machined to exact tolerances for a perfect fit on CZ P07 and P09 models.',
    features: [
      'Beveled design for faster reloads',
      'Secure mounting system',
      '7075 T6 aluminum construction',
      'Multiple color options',
      'Competition approved',
      'Lifetime warranty',
    ],
    specifications: [
      { label: 'Material', value: '7075 T6 Aluminum' },
      { label: 'Finish', value: 'Type III Hard Anodized' },
      { label: 'Weight', value: '32g' },
      { label: 'Installation', value: 'Simple bolt-on' },
      { label: 'Warranty', value: 'Lifetime' },
    ],
  },
};

const RELATED_PRODUCTS = [
  { id: 3, name: 'Shadow 2 Flat Trigger Kit', price: 139.99, image: '/images/products/shadow-2-trigger.jpg' },
  { id: 4, name: 'Valhalla - CZ Hammer', price: 165.99, image: '/images/products/valhalla-hammer.jpg' },
  { id: 5, name: 'Extended Slide Stop', price: 151.00, image: '/images/products/slide-stop.jpg' },
];

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = PRODUCTS[productId as keyof typeof PRODUCTS];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.value || '');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <main className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <Button asChild>
            <Link href="/wordpress-style">Back to Home</Link>
          </Button>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <main className={`min-h-screen bg-gray-100 ${oswald.variable}`}>
      <AnnouncementBar />
      <HeaderWP />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/wordpress-style" className="hover:text-[#556b2f]">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/shop" className="hover:text-[#556b2f]">Shop</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Back Button */}
        <Link
          href="/wordpress-style"
          className="inline-flex items-center gap-2 text-[#556b2f] hover:text-[#6b8739] font-medium mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600"%3E%3Crect fill="%23f3f4f6" width="600" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%239ca3af"%3EProduct Image%3C/text%3E%3C/svg%3E';
                }}
              />
            </motion.div>

            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-[#556b2f] ring-2 ring-[#556b2f]/30'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badge & Category */}
            <div className="flex items-center gap-3">
              {product.badge && (
                <Badge className="bg-[#556b2f] text-white hover:bg-[#6b8739]">{product.badge}</Badge>
              )}
              <span className="text-sm text-gray-600 uppercase tracking-wide">{product.category}</span>
            </div>

            {/* Product Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-[family-name:var(--font-oswald)] uppercase tracking-wide">{product.name}</h1>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#556b2f] text-[#556b2f]"
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              {product.inStock ? (
                <>
                  <div className="w-3 h-3 bg-[#556b2f] rounded-full animate-pulse" />
                  <span className="text-[#556b2f] font-medium">In Stock - Ships in 1-3 days</span>
                </>
              ) : (
                <>
                  <div className="w-3 h-3 bg-gray-500 rounded-full" />
                  <span className="text-gray-700 font-medium">On Backorder</span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            {/* Compatibility */}
            <div className="bg-[#556b2f]/10 border border-[#556b2f]/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#556b2f] mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">Fits: </span>
                  <span className="text-gray-700">{product.compatibility}</span>
                </div>
              </div>
            </div>

            {/* Color Selection */}
            {product.colors && (
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-900">
                  Color: <span className="text-gray-600">{product.colors.find(c => c.value === selectedColor)?.name}</span>
                </label>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => color.available && setSelectedColor(color.value)}
                      disabled={!color.available}
                      className={`w-12 h-12 rounded-full border-2 transition-all ${
                        selectedColor === color.value
                          ? 'border-[#556b2f] ring-2 ring-[#556b2f]/30'
                          : 'border-gray-300 hover:border-gray-400'
                      } ${!color.available && 'opacity-30 cursor-not-allowed'}`}
                      style={{
                        backgroundColor:
                          color.value === 'black' ? '#000' :
                          color.value === 'red' ? '#dc2626' :
                          color.value === 'blue' ? '#2563eb' :
                          color.value === 'gold' ? '#f59e0b' : '#6b7280',
                      }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-900">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 font-medium border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  Total: <span className="font-bold text-gray-900">${(product.price * quantity).toFixed(2)}</span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-[#556b2f] hover:bg-[#6b8739] text-white text-lg py-6 font-[family-name:var(--font-oswald)] uppercase tracking-wide"
              >
                {addedToCart ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </>
                )}
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Shield className="w-8 h-8 text-[#556b2f] mx-auto mb-2" />
                <p className="text-xs font-medium text-gray-900">Limited Lifetime Warranty</p>
              </div>
              <div className="text-center">
                <Truck className="w-8 h-8 text-[#556b2f] mx-auto mb-2" />
                <p className="text-xs font-medium text-gray-900">Local & International</p>
              </div>
              <div className="text-center">
                <Package className="w-8 h-8 text-[#556b2f] mx-auto mb-2" />
                <p className="text-xs font-medium text-gray-900">1-3 Day Shipping</p>
              </div>
            </div>

            {/* SKU */}
            <p className="text-sm text-gray-600">SKU: {product.sku}</p>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-oswald)] uppercase tracking-wide">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#556b2f] mt-0.5 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-oswald)] uppercase tracking-wide">Specifications</h2>
              <dl className="space-y-3">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-gray-200">
                    <dt className="font-medium text-gray-700">{spec.label}</dt>
                    <dd className="text-gray-900">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-oswald)] uppercase tracking-wide">You May Also Like</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {RELATED_PRODUCTS.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/product/${relatedProduct.id}`}
                className="bg-white rounded-lg shadow overflow-hidden group hover:shadow-xl transition-all"
              >
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23f3f4f6" width="300" height="300"/%3E%3C/svg%3E';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{relatedProduct.name}</h3>
                  <p className="text-xl font-bold text-gray-900">${relatedProduct.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black mt-12">
        <Footer />
      </div>
      <FloatingCurrencySwitcher />
    </main>
  );
}
