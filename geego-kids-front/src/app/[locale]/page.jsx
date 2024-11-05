import HeroSection from '@/components/HeroSection/HeroSection';
import Challenges from '@/components/Challenges/Challenges';
import '../../styles/global.scss';


export default function Home() {
  return (
    <main className='wrapper'>
        <HeroSection />
        <Challenges />
    </main>
  );
}