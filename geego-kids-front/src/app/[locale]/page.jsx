import HeroSection from '@/components/HeroSection/HeroSection';
import Categories from '@/components/Categories/Categories';    
import '../../styles/global.scss';
// import Loader from '@/components/shared/Loader/Loader';

export default function Home() {

  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

  return (
    <main>
      <HeroSection />
      <Categories />
      {/* <Loader /> */}
    </main>
  );
}
