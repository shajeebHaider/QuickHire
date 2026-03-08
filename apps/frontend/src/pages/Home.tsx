import BrandsSection from '../features/home/BrandsSection';
import Category from '../features/home/Category';
import CtaSection from '../features/home/CtaSection';
import FeaturedJob from '../features/home/FeaturedJob';
import HeroSection from '../features/home/HeroSection';
import LatestJobOpen from '../features/home/LatestJobOpen';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BrandsSection />
      <Category />
      <CtaSection />
      <FeaturedJob />
      <LatestJobOpen />
    </div>
  );
};

export default Home;
