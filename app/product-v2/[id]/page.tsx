'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Star, ShoppingCart, Check, ChevronRight, Package, Shield, Truck, ArrowLeft, Info } from 'lucide-react';
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

// Dummy product data (same as v1)
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
  { id: 6, name: 'Competition Spring Kit', price: 34.99, image: '/images/products/spring-kit.jpg' },
];

export default function ProductPageV2() {
  const params = useParams();
  const productId = params.id as string;
  const product = PRODUCTS[productId as keyof typeof PRODUCTS];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.value || '');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeTab, setActiveTab] = useState<'features' | 'specs'>('features');

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
    <main className={`min-h-screen bg-gray-50 ${oswald.variable}`}>
      <AnnouncementBar />
      <HeaderWP />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/wordpress-style" className="hover:text-[#556b2f]">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/shop" className="hover:text-[#556b2f]">Shop</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <Link
              href="/wordpress-style"
              className="inline-flex items-center gap-2 text-[#556b2f] hover:text-[#6b8739] font-medium mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: Image Gallery */}
              <div className="space-y-4">
                {/* Main Image */}
                <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600"%3E%3Crect fill="%23f3f4f6" width="600" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%239ca3af"%3EProduct Image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>

                {/* Thumbnails */}
                {product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-3">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === index
                            ? 'border-[#556b2f] ring-2 ring-[#556b2f]/30'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`View ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: Product Info */}
              <div className="space-y-6">
                {/* Badge & Category */}
                <div className="flex items-center gap-3">
                  {product.badge && (
                    <Badge className="bg-[#556b2f] text-white hover:bg-[#6b8739] text-xs">
                      {product.badge}
                    </Badge>
                  )}
                  <span className="text-sm text-gray-500 uppercase tracking-wider">{product.category}</span>
                </div>

                {/* Product Name */}
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-[family-name:var(--font-oswald)] uppercase tracking-tight mb-2">
                    {product.name}
                  </h1>
                  <p className="text-gray-600 text-sm">SKU: {product.sku}</p>
                </div>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#556b2f] text-[#556b2f]" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price & Stock */}
                <div className="space-y-3">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-gray-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-2xl text-gray-400 line-through">${product.originalPrice}</span>
                    )}
                  </div>

                  {/* Stock Status */}
                  <div className="flex items-center gap-2">
                    {product.inStock ? (
                      <>
                        <div className="w-2.5 h-2.5 bg-[#556b2f] rounded-full animate-pulse" />
                        <span className="text-[#556b2f] font-medium text-sm">In Stock - Ships in 1-3 days</span>
                      </>
                    ) : (
                      <>
                        <div className="w-2.5 h-2.5 bg-gray-400 rounded-full" />
                        <span className="text-gray-600 font-medium text-sm">On Backorder</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-base">{product.description}</p>

                {/* Compatibility */}
                <div className="bg-[#556b2f]/5 border-l-4 border-[#556b2f] p-4 rounded-r">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-[#556b2f] mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-900">Fits: </span>
                      <span className="text-gray-700">{product.compatibility}</span>
                    </div>
                  </div>
                </div>

                {/* Color Selection */}
                {product.colors && (
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-900">
                      Finish: <span className="font-normal text-gray-600">{product.colors.find(c => c.value === selectedColor)?.name}</span>
                    </label>
                    <div className="flex gap-2">
                      {product.colors.map((color) => (
                        <button
                          key={color.value}
                          onClick={() => color.available && setSelectedColor(color.value)}
                          disabled={!color.available}
                          className={`w-14 h-14 rounded-lg border-2 transition-all ${
                            selectedColor === color.value
                              ? 'border-[#556b2f] ring-2 ring-[#556b2f]/30 scale-105'
                              : 'border-gray-300 hover:border-gray-400'
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

                {/* Quantity & Add to Cart */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-semibold text-gray-900">Quantity:</label>
                    <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-5 py-3 hover:bg-gray-100 transition-colors font-semibold text-gray-700"
                      >
                        −
                      </button>
                      <span className="px-6 py-3 font-semibold text-gray-900 min-w-[60px] text-center border-x-2 border-gray-300">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-5 py-3 hover:bg-gray-100 transition-colors font-semibold text-gray-700"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm text-gray-600">
                      Total: <span className="font-bold text-gray-900 text-lg">${(product.price * quantity).toFixed(2)}</span>
                    </span>
                  </div>

                  <Button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    size="lg"
                    className="w-full bg-[#556b2f] hover:bg-[#6b8739] text-white text-lg py-7 font-[family-name:var(--font-oswald)] uppercase tracking-wider"
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
                <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-200">
                  <div className="text-center space-y-2">
                    <Shield className="w-7 h-7 text-[#556b2f] mx-auto" />
                    <p className="text-xs text-gray-700 font-medium">Limited Lifetime Warranty</p>
                  </div>
                  <div className="text-center space-y-2">
                    <Truck className="w-7 h-7 text-[#556b2f] mx-auto" />
                    <p className="text-xs text-gray-700 font-medium">Local & International</p>
                  </div>
                  <div className="text-center space-y-2">
                    <Package className="w-7 h-7 text-[#556b2f] mx-auto" />
                    <p className="text-xs text-gray-700 font-medium">1-3 Day Shipping</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Section - Tabbed */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tabs */}
            <div className="flex gap-4 border-b-2 border-gray-200 mb-8">
              <button
                onClick={() => setActiveTab('features')}
                className={`px-6 py-3 font-[family-name:var(--font-oswald)] uppercase tracking-wide text-sm transition-colors ${
                  activeTab === 'features'
                    ? 'text-[#556b2f] border-b-2 border-[#556b2f] -mb-0.5 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Key Features
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-6 py-3 font-[family-name:var(--font-oswald)] uppercase tracking-wide text-sm transition-colors ${
                  activeTab === 'specs'
                    ? 'text-[#556b2f] border-b-2 border-[#556b2f] -mb-0.5 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Specifications
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              {activeTab === 'features' ? (
                <ul className="grid md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#556b2f] mt-0.5 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <dl className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between py-3 border-b border-gray-200">
                      <dt className="font-semibold text-gray-900">{spec.label}</dt>
                      <dd className="text-gray-700">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-[family-name:var(--font-oswald)] uppercase tracking-wide">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {RELATED_PRODUCTS.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/product-v2/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23f3f4f6" width="300" height="300"/%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2 group-hover:text-[#556b2f] transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-lg font-bold text-gray-900">${relatedProduct.price}</p>
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
