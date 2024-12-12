import HeroSection from '@/components/HeroSection/HeroSection';
import Categories from '@/components/Categories/Categories';    
import '../../styles/global.scss';
// import Loader from '@/components/shared/Loader/Loader';
import WithAuthProvider from '@/components/providers/WithAuthProvider'
export default function Home() {

  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

  return (
    <main>
      <WithAuthProvider>
      <HeroSection />
      <Categories />
      {/* <Loader /> */}
      </WithAuthProvider>
    </main>
  );
}
