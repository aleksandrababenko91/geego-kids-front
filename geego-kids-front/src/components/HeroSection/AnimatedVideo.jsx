import styles from './HeroSection.module.scss';
import logo from '../../../public/images/logo.svg';
import Image from 'next/image';

const AnimatedVideo = () => {
  return (
    <div className={styles.videoContainer}>
      {/* <video  width="778" height="334" loop  autoPlay  muted playsInline>
        <source src="/videos/logo_white_fade.webm" type="video/webm" />
      </video> */}
      <Image  width="778" height="334" src={logo} alt="logopic"></Image>
    </div>
  );
};

export default AnimatedVideo;

