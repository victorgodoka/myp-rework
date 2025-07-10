import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import BannersSection from './components/BannersSection';
import HowItWorks from './components/HowItWorks';
import BestSellersCarousel from './components/BestSellersCarousel';
import LatestReleases from './components/LatestReleases';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroBanner />
      <BannersSection />
      <HowItWorks />
      <BestSellersCarousel />
      <LatestReleases />
      <Footer />
    </main>
  );
}
