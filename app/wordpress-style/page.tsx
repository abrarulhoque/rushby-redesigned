import AnnouncementBar from '@/components/wordpress/AnnouncementBar';
import HeaderWP from '@/components/wordpress/HeaderWP';
import HeroWP from '@/components/wordpress/HeroWP';
import FeaturesWP from '@/components/wordpress/FeaturesWP';
import AboutWP from '@/components/wordpress/AboutWP';
import ProductGridWP from '@/components/wordpress/ProductGridWP';
import Footer from '@/components/Footer';
import FloatingCurrencySwitcher from '@/components/wordpress/FloatingCurrencySwitcher';

export default function WordPressStylePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <AnnouncementBar />
      <HeaderWP />
      <HeroWP />
      <FeaturesWP />
      <AboutWP />
      <ProductGridWP />
      <div className="bg-black">
        <Footer />
      </div>
      <FloatingCurrencySwitcher />
    </main>
  );
}
