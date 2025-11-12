'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Star, ShoppingCart, Check, ChevronRight, Package, Shield, Truck, ArrowLeft, Info, ChevronDown, ChevronLeft, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnnouncementBar from '@/components/wordpress/AnnouncementBar';
import HeaderWP from '@/components/wordpress/HeaderWP';
import Footer from '@/components/Footer';
import FloatingCurrencySwitcher from '@/components/wordpress/FloatingCurrencySwitcher';
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
      { label: 'Warranty', value: 'Limited Lifetime' },
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
      'Limited lifetime warranty',
    ],
    specifications: [
      { label: 'Material', value: '7075 T6 Aluminum' },
      { label: 'Finish', value: 'Type III Hard Anodized' },
      { label: 'Weight', value: '32g' },
      { label: 'Installation', value: 'Simple bolt-on' },
      { label: 'Warranty', value: 'Limited Lifetime' },
    ],
  },
};

const RELATED_PRODUCTS = [
  { id: 3, name: 'Shadow 2 Flat Trigger Kit', price: 139.99, image: '/images/products/shadow-2-trigger.jpg' },
  { id: 4, name: 'Valhalla - CZ Hammer', price: 165.99, image: '/images/products/valhalla-hammer.jpg' },
  { id: 5, name: 'Extended Slide Stop', price: 151.00, image: '/images/products/slide-stop.jpg' },
];

export default function ProductPageV3() {
  const params = useParams();
  const productId = params.id as string;
  const product = PRODUCTS[productId as keyof typeof PRODUCTS];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.value || '');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>('features');

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

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <main className={`min-h-screen bg-white overflow-x-hidden ${oswald.variable}`}>
      <AnnouncementBar />
      <HeaderWP />

      {/* Hero Image Section - Full Width */}
      <div className="relative h-[60vh] md:h-[70vh] bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover opacity-40"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"%3E%3Crect fill="%23374151" width="1200" height="800"/%3E%3C/svg%3E';
            }}
          />
        </div>

        {/* Image Navigation */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <Link
              href="/wordpress-style"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>

            <div className="max-w-4xl">
              {product.badge && (
                <Badge className="bg-[#556b2f] text-white hover:bg-[#6b8739] text-sm mb-4">
                  {product.badge}
                </Badge>
              )}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white font-[family-name:var(--font-oswald)] uppercase tracking-tight mb-4 break-words">
                {product.name}
              </h1>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white" />
                    ))}
                  </div>
                  <span className="text-sm sm:text-lg">({product.reviews} reviews)</span>
                </div>
                <span className="text-sm sm:text-lg">SKU: {product.sku}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Dots */}
        {product.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentImageIndex === index ? 'bg-white w-8' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6 md:space-y-8">
              {/* Price & Stock */}
              <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 md:p-8">
                <div className="flex flex-wrap items-end gap-3 sm:gap-6 mb-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Price</p>
                    <div className="flex items-baseline gap-2 sm:gap-3">
                      <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xl sm:text-2xl md:text-3xl text-gray-400 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  {product.originalPrice && (
                    <Badge className="bg-red-600 text-white text-sm sm:text-base md:text-lg px-3 sm:px-4 py-1.5 sm:py-2">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </Badge>
                  )}
                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-2">
                  {product.inStock ? (
                    <>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-green-700 font-semibold">In Stock - Ships in 1-3 days</span>
                    </>
                  ) : (
                    <>
                      <div className="w-3 h-3 bg-gray-400 rounded-full" />
                      <span className="text-gray-600 font-semibold">On Backorder</span>
                    </>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-oswald)] uppercase">
                  About This Product
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{product.description}</p>
              </div>

              {/* Compatibility */}
              <div className="bg-[#556b2f]/10 border-2 border-[#556b2f]/30 rounded-xl p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Info className="w-5 h-5 sm:w-6 sm:h-6 text-[#556b2f] mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1">Compatibility</h3>
                    <p className="text-gray-700 text-base sm:text-lg break-words">Fits: {product.compatibility}</p>
                  </div>
                </div>
              </div>

              {/* Accordion Sections */}
              <div className="space-y-3">
                {/* Features */}
                <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleSection('features')}
                    className="w-full flex items-center justify-between p-4 sm:p-6 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 font-[family-name:var(--font-oswald)] uppercase">
                      Key Features
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 transition-transform shrink-0 ${
                        expandedSection === 'features' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedSection === 'features' && (
                    <div className="p-4 sm:p-6 pt-0 bg-white">
                      <ul className="space-y-3">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#556b2f] mt-0.5 shrink-0" />
                            <span className="text-gray-700 text-sm sm:text-base md:text-lg">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Specifications */}
                <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleSection('specs')}
                    className="w-full flex items-center justify-between p-4 sm:p-6 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 font-[family-name:var(--font-oswald)] uppercase">
                      Technical Specifications
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 transition-transform shrink-0 ${
                        expandedSection === 'specs' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedSection === 'specs' && (
                    <div className="p-4 sm:p-6 pt-0 bg-white">
                      <dl className="space-y-3">
                        {product.specifications.map((spec, index) => (
                          <div key={index} className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 py-3 border-b border-gray-200 last:border-0">
                            <dt className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">{spec.label}</dt>
                            <dd className="text-gray-700 text-sm sm:text-base md:text-lg break-words">{spec.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}
                </div>

                {/* Warranty */}
                <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleSection('warranty')}
                    className="w-full flex items-center justify-between p-4 sm:p-6 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 font-[family-name:var(--font-oswald)] uppercase">
                      Warranty & Shipping
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 transition-transform shrink-0 ${
                        expandedSection === 'warranty' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedSection === 'warranty' && (
                    <div className="p-6 pt-0 bg-white space-y-4">
                      <div className="flex items-start gap-3">
                        <Shield className="w-6 h-6 text-[#556b2f] mt-0.5 shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Limited Lifetime Warranty</h4>
                          <p className="text-gray-700">All Rushby Industries products are covered by our limited lifetime warranty against manufacturing defects.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Truck className="w-6 h-6 text-[#556b2f] mt-0.5 shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Fast Shipping</h4>
                          <p className="text-gray-700">Local orders ship within 1-3 days. International shipping available worldwide.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Package className="w-6 h-6 text-[#556b2f] mt-0.5 shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Secure Packaging</h4>
                          <p className="text-gray-700">Every product is carefully packaged to ensure it arrives in perfect condition.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Buy Box */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Buy Box */}
                <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 md:p-8 text-white shadow-2xl">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 font-[family-name:var(--font-oswald)] uppercase">
                    Configure Your Order
                  </h3>

                  {/* Color Selection */}
                  {product.colors && (
                    <div className="mb-6">
                      <label className="block text-sm font-semibold mb-3">
                        Finish: <span className="font-normal text-gray-300">{product.colors.find(c => c.value === selectedColor)?.name}</span>
                      </label>
                      <div className="flex gap-3">
                        {product.colors.map((color) => (
                          <button
                            key={color.value}
                            onClick={() => color.available && setSelectedColor(color.value)}
                            disabled={!color.available}
                            className={`w-14 h-14 rounded-lg border-2 transition-all ${
                              selectedColor === color.value
                                ? 'border-white ring-4 ring-white/30 scale-110'
                                : 'border-gray-600 hover:border-gray-400'
                            } ${!color.available && 'opacity-30 cursor-not-allowed'}`}
                            style={{
                              backgroundColor:
                                color.value === 'black' ? '#1a1a1a' :
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

                  {/* Quantity */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold mb-3">Quantity</label>
                    <div className="flex items-center border-2 border-gray-700 rounded-lg overflow-hidden bg-gray-800">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 sm:px-6 py-3 sm:py-4 hover:bg-gray-700 transition-colors font-bold text-lg sm:text-xl"
                      >
                        −
                      </button>
                      <span className="flex-1 py-3 sm:py-4 font-bold text-lg sm:text-xl text-center border-x-2 border-gray-700">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 sm:px-6 py-3 sm:py-4 hover:bg-gray-700 transition-colors font-bold text-lg sm:text-xl"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Total Price */}
                  <div className="mb-6 pb-6 border-b border-gray-700">
                    <div className="flex justify-between items-baseline gap-2">
                      <span className="text-gray-400">Total:</span>
                      <span className="text-2xl sm:text-3xl md:text-4xl font-bold">${(product.price * quantity).toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    size="lg"
                    className="w-full bg-[#556b2f] hover:bg-[#6b8739] text-white text-lg py-8 font-[family-name:var(--font-oswald)] uppercase tracking-wider mb-3"
                  >
                    {addedToCart ? (
                      <>
                        <Check className="w-6 h-6 mr-2" />
                        Added to Cart!
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-6 h-6 mr-2" />
                        Add to Cart
                      </>
                    )}
                  </Button>

                  <button className="w-full py-4 border-2 border-gray-700 hover:border-gray-600 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5" />
                    Add to Wishlist
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-[#556b2f]" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Limited Lifetime Warranty</p>
                      <p className="text-xs text-gray-600">Against manufacturing defects</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Truck className="w-8 h-8 text-[#556b2f]" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Fast Shipping</p>
                      <p className="text-xs text-gray-600">Local & International delivery</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Package className="w-8 h-8 text-[#556b2f]" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Secure Packaging</p>
                      <p className="text-xs text-gray-600">Arrives in perfect condition</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-gray-100 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 font-[family-name:var(--font-oswald)] uppercase tracking-wide">
              Complete Your Setup
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {RELATED_PRODUCTS.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/product-v3/${relatedProduct.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all"
                >
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f3f4f6" width="400" height="400"/%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#556b2f] transition-colors line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-2xl font-bold text-gray-900">${relatedProduct.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <Footer />
      </div>
      <FloatingCurrencySwitcher />
    </main>
  );
}
