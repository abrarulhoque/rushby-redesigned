'use client';

import Image from 'next/image';
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

export default function ProductGrid() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-amber-600/20 text-amber-500 border-amber-600/30 mb-4">
              Premium Products
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Featured Products
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
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
              <Card className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-amber-600/50 transition-all duration-300">
                {/* Product Image */}
                <div className="relative aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 overflow-hidden">
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
                      <Badge className="bg-amber-600 text-black hover:bg-amber-700 font-semibold">
                        {product.badge}
                      </Badge>
                    </div>
                  )}

                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      Quick View
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5 space-y-3">
                  {/* Category & Rating */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-amber-600 font-medium">{product.category}</span>
                    <div className="flex items-center gap-1 text-zinc-400">
                      <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                      <span className="font-medium text-white">{product.rating}</span>
                      <span>({product.reviews})</span>
                    </div>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-lg font-semibold text-white group-hover:text-amber-500 transition-colors line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Compatibility */}
                  <p className="text-sm text-zinc-500">
                    Fits: <span className="text-zinc-400">{product.compatibility}</span>
                  </p>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
                    <div>
                      <span className="text-2xl font-bold text-white">{product.price}</span>
                      <p className="text-xs text-zinc-500">Inclusive of Tax</p>
                    </div>
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-black">
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Add
                    </Button>
                  </div>

                  {/* Stock Status */}
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-zinc-400">In Stock - Ships in 2-3 days</span>
                  </div>
                </div>
              </Card>
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
          <Button size="lg" variant="outline" className="border-zinc-700 bg-transparent text-white hover:bg-zinc-900 hover:border-amber-600 hover:text-white">
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
