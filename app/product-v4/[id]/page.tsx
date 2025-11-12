'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Star, ShoppingCart, Check, ChevronRight, ChevronDown, Package, Shield, Truck, Globe, Mail, Heart, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnnouncementBar from '@/components/wordpress/AnnouncementBar';
import HeaderWP from '@/components/wordpress/HeaderWP';
import Footer from '@/components/Footer';
import FloatingCurrencySwitcher from '@/components/wordpress/FloatingCurrencySwitcher';

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
    stockStatus: 'instock', // instock, onbackorder, outofstock
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
    shortDescription: 'The Jackal flat trigger is precision-engineered from aerospace-grade 7075 T6 aluminum. Designed to reduce trigger pull weight while maintaining safety and reliability. Perfect for competition shooting and EDC.',
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
    stockStatus: 'instock',
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
    shortDescription: 'Competition-grade magwell designed for lightning-fast reloads. Precision-machined to exact tolerances for a perfect fit on CZ P07 and P09 models.',
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
  { id: 3, name: 'Shadow 2 Flat Trigger Kit', price: 139.99, image: '/images/products/shadow-2-trigger.jpg', stockStatus: 'instock' },
  { id: 4, name: 'Valhalla - CZ Hammer', price: 165.99, image: '/images/products/valhalla-hammer.jpg', stockStatus: 'instock' },
  { id: 5, name: 'Extended Slide Stop', price: 151.00, image: '/images/products/slide-stop.jpg', stockStatus: 'onbackorder' },
];

export default function ProductPageV4() {
  const params = useParams();
  const productId = params.id as string;
  const product = PRODUCTS[productId as keyof typeof PRODUCTS];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.value || '');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string>('about');
  const [showStickyATC, setShowStickyATC] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyATC(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setExpandedSection(expandedSection === section ? '' : section);
  };

  const getStockBadge = () => {
    switch (product.stockStatus) {
      case 'instock':
        return { text: 'In Stock', color: 'bg-green-100 text-green-800 border-green-200' };
      case 'onbackorder':
        return { text: 'Backorder (ships in 1-3 days)', color: 'bg-amber-100 text-amber-800 border-amber-200' };
      case 'outofstock':
        return { text: 'Out of Stock', color: 'bg-red-100 text-red-800 border-red-200' };
      default:
        return { text: 'In Stock', color: 'bg-green-100 text-green-800 border-green-200' };
    }
  };

  const stockBadge = getStockBadge();

  return (
    <main className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      <AnnouncementBar />
      <HeaderWP />

      {/* Breadcrumbs */}
      <div className="border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/wordpress-style" className="hover:text-[#556b2f] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/shop" className="hover:text-[#556b2f] transition-colors">Shop</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section - Two Column Hero */}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-8 md:py-12">
          <div className="max-w-[1240px] mx-auto">
            <div className="grid lg:grid-cols-[0.6fr_0.4fr] gap-8 lg:gap-16">
              {/* Left Column - Gallery */}
              <div className="flex flex-col-reverse sm:flex-row gap-4">
                {/* Thumbnails */}
                {product.images.length > 1 && (
                  <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden transition-all ${
                          selectedImage === index
                            ? 'border-[#556b2f] ring-2 ring-[#556b2f]/20'
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

                {/* Main Image */}
                <div className="flex-1 aspect-[4/3] bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23f8fafc" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%239ca3af"%3EProduct Image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
              </div>

              {/* Right Column - Purchase Panel */}
              <div className="space-y-6">
            {/* Title Block */}
            <div>
              {product.badge && (
                <Badge className="bg-[#E3E8D9] text-[#556b2f] hover:bg-[#E3E8D9] border-0 mb-3">
                  {product.badge}
                </Badge>
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#556b2f] text-[#556b2f]" />
                  ))}
                  <span className="text-gray-600 ml-1">({product.reviews} reviews)</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">SKU: {product.sku}</span>
              </div>
            </div>

            {/* Compatibility Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E3E8D9] rounded-full text-sm">
              <Check className="w-4 h-4 text-[#556b2f]" />
              <span className="text-[#556b2f] font-medium">Fits: {product.compatibility}</span>
            </div>

            {/* Purchase Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              {/* Price */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-[#0f172a]">${product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
                      <Badge className="bg-red-100 text-red-700 border-0">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </Badge>
                    </>
                  )}
                </div>
              </div>

              {/* Stock Badge */}
              <div className="mb-4">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-sm font-medium ${stockBadge.color}`}>
                  <div className={`w-2 h-2 rounded-full ${product.stockStatus === 'instock' ? 'bg-green-600 animate-pulse' : product.stockStatus === 'onbackorder' ? 'bg-amber-600' : 'bg-red-600'}`} />
                  {stockBadge.text}
                </div>
              </div>

              {/* Color Selection */}
              {product.colors && (
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Finish: <span className="font-normal text-gray-600">{product.colors.find(c => c.value === selectedColor)?.name}</span>
                  </label>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => color.available && setSelectedColor(color.value)}
                        disabled={!color.available}
                        aria-label={color.name}
                        className={`w-12 h-12 rounded-lg border-2 transition-all ${
                          selectedColor === color.value
                            ? 'border-[#556b2f] ring-2 ring-[#556b2f]/20 scale-105'
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

              {/* Quantity */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-900 mb-2">Quantity</label>
                <div className="inline-flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2.5 hover:bg-gray-100 transition-colors font-semibold text-gray-700"
                  >
                    −
                  </button>
                  <span className="px-6 py-2.5 font-semibold text-gray-900 min-w-[60px] text-center border-x-2 border-gray-300">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2.5 hover:bg-gray-100 transition-colors font-semibold text-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total Line */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-gray-600">Total:</span>
                  <span className="text-2xl font-bold text-[#0f172a]">${(product.price * quantity).toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Inclusive of VAT where applicable</p>
              </div>

              {/* CTAs */}
              <div className="space-y-2 mb-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={product.stockStatus === 'outofstock'}
                  className="w-full bg-[#556b2f] hover:bg-[#465824] text-white py-6 text-base font-semibold"
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
                <button className="w-full py-3 border-2 border-gray-300 hover:border-gray-400 rounded-lg transition-colors flex items-center justify-center gap-2 text-gray-700 font-medium">
                  <Heart className="w-4 h-4" />
                  Add to Wishlist
                </button>
              </div>

              {/* Shipping Note */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Truck className="w-4 h-4 text-[#556b2f]" />
                <span>Ships in 1-3 days</span>
                <Link href="/shipping" className="text-[#556b2f] hover:underline">Learn more</Link>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assurance Icons */}
      <div className="bg-[#f8fafc] border-y border-gray-200 py-8">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/shipping" className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-10 h-10 bg-[#E3E8D9] rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-[#556b2f]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Worldwide Shipping</h3>
                <p className="text-sm text-gray-600">Local & international</p>
              </div>
            </Link>
            <Link href="/quality-guarantee" className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-10 h-10 bg-[#E3E8D9] rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#556b2f]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Quality Guarantee</h3>
                <p className="text-sm text-gray-600">Limited lifetime warranty</p>
              </div>
            </Link>
            <Link href="/contact-us" className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-10 h-10 bg-[#E3E8D9] rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#556b2f]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Contact Us</h3>
                <p className="text-sm text-gray-600">Sales & dealer enquiries</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Product Information - Accordions */}
      <div className="max-w-[1240px] mx-auto px-4 py-12">
        <div className="max-w-4xl">
          <div className="space-y-2">
            {/* About */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection('about')}
                className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-lg font-semibold text-gray-900">About this product</h2>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    expandedSection === 'about' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedSection === 'about' && (
                <div className="p-5 pt-0 bg-white">
                  <p className="text-gray-700 leading-relaxed">{product.shortDescription}</p>
                </div>
              )}
            </div>

            {/* Features */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection('features')}
                className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-lg font-semibold text-gray-900">Key features</h2>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    expandedSection === 'features' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedSection === 'features' && (
                <div className="p-5 pt-0 bg-white">
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#556b2f] mt-0.5 shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Specifications */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection('specs')}
                className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-lg font-semibold text-gray-900">Technical specifications</h2>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    expandedSection === 'specs' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedSection === 'specs' && (
                <div className="p-5 pt-0 bg-white">
                  <dl className="space-y-3">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                        <dt className="font-semibold text-gray-900">{spec.label}</dt>
                        <dd className="text-gray-700">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>

            {/* Warranty */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection('warranty')}
                className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors"
              >
                <h2 className="text-lg font-semibold text-gray-900">Warranty & shipping</h2>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    expandedSection === 'warranty' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedSection === 'warranty' && (
                <div className="p-5 pt-0 bg-white space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Limited Lifetime Warranty</h3>
                    <p className="text-gray-700">All Rushby Industries products are covered by our limited lifetime warranty against manufacturing defects. We stand behind the quality of our work.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Shipping Information</h3>
                    <p className="text-gray-700">Local orders ship within 1-3 days. International shipping available worldwide. All products are carefully packaged to ensure safe delivery.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-[#f8fafc] py-12">
        <div className="max-w-[1240px] mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Compatible accessories for this pistol</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {RELATED_PRODUCTS.map((relatedProduct) => {
              const relatedStockBadge = relatedProduct.stockStatus === 'instock'
                ? { text: 'In Stock', color: 'bg-green-100 text-green-700' }
                : { text: 'Backorder', color: 'bg-amber-100 text-amber-700' };

              return (
                <Link
                  key={relatedProduct.id}
                  href={`/product-v4/${relatedProduct.id}`}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f8fafc" width="400" height="300"/%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#556b2f] transition-colors line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900">${relatedProduct.price}</span>
                      <span className={`text-xs px-2 py-1 rounded ${relatedStockBadge.color}`}>
                        {relatedStockBadge.text}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sticky Add to Cart - Mobile */}
      {showStickyATC && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
          <div className="flex items-center gap-3">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-12 h-12 object-cover rounded-lg"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">{product.name}</p>
              <p className="text-lg font-bold text-[#0f172a]">${product.price}</p>
            </div>
            <Button
              onClick={handleAddToCart}
              className="bg-[#556b2f] hover:bg-[#465824] text-white px-6 py-3"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add
            </Button>
          </div>
        </div>
      )}

      <div className="bg-black">
        <Footer />
      </div>
      <FloatingCurrencySwitcher />
    </main>
  );
}
