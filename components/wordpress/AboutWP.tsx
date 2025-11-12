'use client';

import { motion } from 'framer-motion';
import { MapPin, Award, Globe, Wrench } from 'lucide-react';

export default function AboutWP() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            About Us
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Rushby Industries
          </h2>
          <p className="text-xl text-red-600 font-medium">
            Precision CZ Parts and Accessories
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about/cz-p07.jpg"
                alt="CZ P07 with Rushby Industries accessories"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23f3f4f6" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%239ca3af"%3ECZ P07 Pistol%3C/text%3E%3C/svg%3E';
                }}
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <div>
                    <div className="text-xs text-gray-600">Made in</div>
                    <div className="font-bold text-gray-900">South Africa</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-600/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-red-600/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Paragraph 1 */}
            <p className="text-gray-700 leading-relaxed text-lg">
              Rushby Industries is a dynamic parts designing and manufacturing firm nestled in the heart of{' '}
              <span className="font-semibold text-gray-900">Cape Town, South Africa</span>. Our journey began with a simple aspiration: to create parts that elevated our EDC pistols, particularly focusing on{' '}
              <span className="font-semibold text-gray-900">CZ P07/P09 accessories</span>. Over time, our passion and dedication have seen our product line expand, reflecting our company's growth and evolution.
            </p>

            {/* Paragraph 2 */}
            <p className="text-gray-700 leading-relaxed text-lg">
              At Rushby Industries, CZ P07/P09 accessories remain at the forefront of our endeavors. However, our commitment to innovation and excellence has propelled us to diversify our offerings. From our humble beginnings as a grassroots South African initiative, we have expanded our reach, now{' '}
              <span className="font-semibold text-gray-900">shipping our meticulously crafted parts worldwide</span>.
            </p>

            {/* Paragraph 3 */}
            <p className="text-gray-700 leading-relaxed text-lg">
              We take immense pride in the reputation we have garnered for delivering{' '}
              <span className="font-semibold text-gray-900">top-tier, precision-engineered CZ accessories</span>. Our relentless pursuit of quality and attention to detail underscore every facet of our work, ensuring that each product bearing the Rushby Industries name meets the highest standards.
            </p>

            {/* Call to Action */}
            <div className="pt-4">
              <p className="text-gray-900 font-semibold text-lg italic border-l-4 border-red-600 pl-4">
                Join us on our journey as we continue to push boundaries, innovate, and set new benchmarks in the realm of CZ accessories. Experience the Rushby Industries difference today.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats/Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Stat 1 */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Precision Engineering</h3>
            <p className="text-gray-600">
              Every product crafted with meticulous attention to detail
            </p>
          </div>

          {/* Stat 2 */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Shipping</h3>
            <p className="text-gray-600">
              Delivering quality CZ accessories to shooters worldwide
            </p>
          </div>

          {/* Stat 3 */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Lifetime Warranty</h3>
            <p className="text-gray-600">
              Standing behind every product with confidence
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
