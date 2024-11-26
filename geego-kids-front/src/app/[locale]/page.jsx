import HeroSection from '@/components/HeroSection/HeroSection';
import Categories from '@/components/Categories/Categories';    
import '../../styles/global.scss';
// import Loader from '@/components/shared/Loader/Loader';


export default function Home() {

  return (
    <main>
      <HeroSection />
      <Categories />
      {/* <Loader /> */}
    </main>
  );
}
