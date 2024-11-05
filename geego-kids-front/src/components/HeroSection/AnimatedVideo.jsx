import styles from './HeroSection.module.scss';

const AnimatedVideo = () => {
  return (
    <div className={styles.videoContainer}>
      <video  width="778" height="334" loop  autoPlay  muted playsInline>
        <source src="/videos/logo_white_fade.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default AnimatedVideo;

