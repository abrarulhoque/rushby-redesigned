import HeaderWP from '@/components/wordpress/HeaderWP';
import HeroWP from '@/components/wordpress/HeroWP';
import FeaturesWP from '@/components/wordpress/FeaturesWP';
import ProductGridWP from '@/components/wordpress/ProductGridWP';
import Footer from '@/components/Footer';

export default function WordPressStylePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <HeaderWP />
      <HeroWP />
      <FeaturesWP />
      <ProductGridWP />
      <div className="bg-black">
        <Footer />
      </div>
    </main>
  );
}
