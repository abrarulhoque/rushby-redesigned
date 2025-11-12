'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'The Jackal - CZ Flat Trigger',
    category: 'Triggers',
    price: 'R920.00',
    rating: 5.0,
    reviews: 22,
    badge: 'Best Seller',
    compatibility: 'P07/P09/Omega',
    image: '/images/products/jackal-trigger.jpg',
  },
  {
    id: 2,
    name: 'CZ P07/P09C Magwell',
    category: 'Magwells',
    price: 'R1,365.00',
    rating: 5.0,
    reviews: 11,
    badge: 'Popular',
    compatibility: 'P07/P09',
    image: '/images/products/magwell.jpg',
  },
  {
    id: 3,
    name: 'Shadow 2 Flat Trigger Kit',
    category: 'Triggers',
    price: 'R1,400.00',
    rating: 5.0,
    reviews: 8,
    compatibility: 'Shadow 2',
    image: '/images/products/shadow-2-trigger.jpg',
  },
  {
    id: 4,
    name: 'Valhalla - CZ Hammer',
    category: 'Performance Upgrades',
    price: 'R1,660.00',
    rating: 5.0,
    reviews: 4,
    badge: 'Premium',
    compatibility: 'P07/P09/P01 Omega',
    image: '/images/products/valhalla-hammer.jpg',
  },
  {
    id: 5,
    name: 'CZ P07/P09C Extended Slide Stop',
    category: 'EDC Performance',
    price: 'R1,510.00',
    rating: 5.0,
    reviews: 5,
    compatibility: 'P07/P09',
    image: '/images/products/slide-stop.jpg',
  },
  {
    id: 6,
    name: 'Shadow 2 Extended Slide Stop',
    category: 'EDC Performance',
    price: 'R1,540.00',
    rating: 5.0,
    reviews: 1,
    compatibility: 'Shadow 2',
    image: '/images/products/shadow-2-slide-stop.jpg',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ProductGridWP() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              Premium Products
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Precision-engineered CZ accessories crafted from aircraft-grade materials.
              Every product comes with our lifetime warranty.
            </p>
          </motion.div>
        </div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Link href={`/product/${product.id}`}>
                <Card className="bg-white border-gray-200 overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer">
                  {/* Product Image */}
                  <div className="relative aspect-square bg-gray-50 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-red-600 text-white hover:bg-red-700 font-semibold shadow-lg">
                          {product.badge}
                        </Badge>
                      </div>
                    )}

                    {/* Quick View Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button className="bg-white text-gray-900 hover:bg-gray-100">
                        View Product
                      </Button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5 space-y-3">
                  {/* Category & Rating */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-red-600 font-medium">{product.category}</span>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Star className="w-4 h-4 fill-red-500 text-red-500" />
                      <span className="font-medium text-gray-900">{product.rating}</span>
                      <span>({product.reviews})</span>
                    </div>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Compatibility */}
                  <p className="text-sm text-gray-600">
                    Fits: <span className="text-gray-800 font-medium">{product.compatibility}</span>
                  </p>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      <p className="text-xs text-gray-500">Inclusive of Tax</p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-red-600 hover:bg-red-700 text-white"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // Add to cart logic here
                      }}
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Add
                    </Button>
                  </div>

                  {/* Stock Status */}
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-gray-600">In Stock - Ships in 2-3 days</span>
                  </div>
                </div>
              </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" variant="outline" className="border-gray-400 bg-white text-gray-900 hover:bg-gray-50 hover:text-gray-900 shadow">
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
