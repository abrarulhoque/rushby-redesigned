'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Michael Thompson',
    location: 'Texas, USA',
    rating: 5,
    product: 'The Jackal Flat Trigger',
    text: 'The Jackal trigger completely transformed my P07. The pull is smooth, consistent, and significantly lighter. Installation was straightforward - took me about 15 minutes. Best upgrade I\'ve made!',
    verified: true,
  },
  {
    id: 2,
    name: 'Jan Kowalski',
    location: 'Warsaw, Poland',
    rating: 5,
    product: 'CZ P09C Magwell',
    text: 'Outstanding quality and precision. The magwell fits perfectly and looks fantastic. Shipping to Poland was faster than expected. Highly recommend Rushby Industries for CZ upgrades.',
    verified: true,
  },
  {
    id: 3,
    name: 'David Chen',
    location: 'Singapore',
    rating: 5,
    product: 'The Kit - Spring Kit',
    text: 'The spring kit made a noticeable difference in my trigger pull. The quality is exceptional and the price is very competitive. Customer service was excellent throughout.',
    verified: true,
  },
  {
    id: 4,
    name: 'Marcus Williams',
    location: 'California, USA',
    rating: 5,
    product: 'Valhalla Hammer',
    text: 'Incredible craftsmanship. The Valhalla hammer is a work of art that performs flawlessly. The anodizing finish is perfect and it dropped right in without any fitting required.',
    verified: true,
  },
  {
    id: 5,
    name: 'Johan van der Merwe',
    location: 'Johannesburg, SA',
    rating: 5,
    product: 'Extended Slide Stop',
    text: 'Local pride! Amazing to see such high-quality work coming out of SA. The slide stop is perfectly machined and the extended paddle makes manipulation so much easier.',
    verified: true,
  },
  {
    id: 6,
    name: 'Robert Klein',
    location: 'Munich, Germany',
    rating: 5,
    product: 'Spitfire Compensator',
    text: 'The comp reduced muzzle flip significantly. Very noticeable improvement in split times. Build quality is top-tier. Will definitely be ordering more Rushby parts.',
    verified: true,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="bg-amber-600/20 text-amber-500 border-amber-600/30 mb-4">
            Customer Reviews
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Trusted by Shooters Worldwide
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about
            their experience with Rushby Industries.
          </p>

          {/* Overall Rating */}
          <div className="mt-8 inline-flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-full px-6 py-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <div className="text-white font-semibold">4.9 out of 5</div>
            <div className="text-zinc-500">•</div>
            <div className="text-zinc-400">Based on 60+ reviews</div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900 border-zinc-800 p-6 h-full hover:border-amber-600/50 transition-all duration-300 group">
                <div className="flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-amber-600/30" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  {/* Product */}
                  <div className="mb-3">
                    <Badge variant="outline" className="border-zinc-700 text-zinc-400 text-xs">
                      {testimonial.product}
                    </Badge>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6 flex-grow">
                    "{testimonial.text}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        {testimonial.verified && (
                          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        )}
                      </div>
                      <div className="text-xs text-zinc-500">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Join Thousands of Satisfied Customers
            </h3>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              Experience the Rushby Industries difference. Premium CZ accessories with
              worldwide shipping and lifetime warranty.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-zinc-300">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm">Lifetime Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm">Free Shipping Over R500</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm">100% Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
