'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, ArrowRight } from 'lucide-react';
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
    badgeColor: 'from-amber-500 to-orange-500',
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
    badgeColor: 'from-violet-500 to-purple-500',
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
    badgeColor: 'from-sky-500 to-cyan-500',
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
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ProductGridPremium() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-100 to-cyan-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 fill-sky-600" />
            Premium Collection
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Featured Products
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Precision-engineered accessories crafted from aircraft-grade materials.
            Every product includes our lifetime warranty.
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <div className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/10">
                {/* Product Image */}
                <div className="relative aspect-square bg-gradient-to-br from-slate-50 to-white overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out p-8"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <div className={`bg-gradient-to-r ${product.badgeColor} text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg`}>
                        {product.badge}
                      </div>
                    </div>
                  )}

                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                    <Button className="bg-white text-slate-900 hover:bg-slate-100 font-semibold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Quick View
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  {/* Category & Rating */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-sky-600 font-semibold">{product.category}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-slate-900">{product.rating}</span>
                      <span className="text-slate-500">({product.reviews})</span>
                    </div>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-lg font-bold text-slate-900 leading-tight line-clamp-2 group-hover:text-sky-600 transition-colors">
                    {product.name}
                  </h3>

                  {/* Compatibility */}
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-slate-600">Fits:</span>
                    <span className="text-slate-900 font-semibold">{product.compatibility}</span>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{product.price}</div>
                      <div className="text-xs text-slate-500">Incl. Tax</div>
                    </div>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white shadow-lg shadow-sky-500/30"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add
                    </Button>
                  </div>

                  {/* Stock Status */}
                  <div className="flex items-center gap-2 text-xs pt-2">
                    <div className="relative">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <div className="absolute inset-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                    </div>
                    <span className="text-slate-600 font-medium">In Stock • Ships in 2-3 days</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-slate-300 bg-white text-slate-900 hover:bg-slate-50 hover:border-slate-400 font-semibold px-8 group"
          >
            View All Products
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
