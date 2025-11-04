import HeaderPremium from '@/components/premium/HeaderPremium';
import HeroPremium from '@/components/premium/HeroPremium';
import FeaturesPremium from '@/components/premium/FeaturesPremium';
import ProductGridPremium from '@/components/premium/ProductGridPremium';
import Footer from '@/components/Footer';

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeaderPremium />
      <HeroPremium />
      <FeaturesPremium />
      <ProductGridPremium />
      <div className="bg-black">
        <Footer />
      </div>
    </main>
  );
}
