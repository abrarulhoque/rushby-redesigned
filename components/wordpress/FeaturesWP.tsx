'use client';

import { Card } from '@/components/ui/card';
import { Shield, Truck, Wrench, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Shield,
    title: 'Lifetime Warranty',
    description: 'Every product is backed by our comprehensive lifetime warranty.',
  },
  {
    icon: Truck,
    title: 'Worldwide Shipping',
    description: 'Fast and reliable shipping to 50+ countries globally.',
  },
  {
    icon: Wrench,
    title: 'Drop-In Installation',
    description: 'No gunsmith required. Easy installation at home.',
  },
  {
    icon: Award,
    title: 'Premium Materials',
    description: '7075 T6 Aircraft-grade aluminum with Type III anodizing.',
  },
];

export default function FeaturesWP() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Rushby Industries
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Premium CZ firearm accessories engineered in Cape Town, South Africa.
            Trusted by shooters in over 50 countries worldwide.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white border-gray-200 p-6 h-full hover:shadow-lg transition-all duration-300 group text-center">
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-red-600 transition-colors">
                      <Icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                10K+
              </div>
              <div className="text-gray-700 text-sm">Parts Shipped Globally</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                50+
              </div>
              <div className="text-gray-700 text-sm">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                4.9
              </div>
              <div className="text-gray-700 text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                100%
              </div>
              <div className="text-gray-700 text-sm">Satisfaction Guarantee</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
