import HeroSection from '@/components/HeroSection/HeroSection';
import Categories from '@/components/Categories/Categories';
import '../../styles/global.scss';

export default function Home() {
  return (
    <main className='wrapper'>
        <HeroSection />
        <Categories />
    </main>
  );
};