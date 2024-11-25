import HeroSection from '@/components/HeroSection/HeroSection';
import Categories from '@/components/Categories/Categories';    
import '../../styles/global.scss';
import { useTranslations } from 'next-intl';

export default function Home() {

const t = useTranslations("Header")
  return (
    <main>
      <HeroSection />
      <Categories />

      <p>{t("geegocity")}</p>
      <p>hghghghghghhggh</p>
      <p>{t("koulu")}</p>
      <p>{t("sporttiparkki")}</p>
      <p>{t("ladata")}</p>
      <p>{t("tietosuoja")}</p>
      <p>{t("btn_support_project")}</p>
    </main>
  );
}
