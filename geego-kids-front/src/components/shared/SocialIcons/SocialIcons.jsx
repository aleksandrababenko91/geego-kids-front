import clsx from "clsx";
import Image from "next/image";
import styles from "./SocialIcons.module.scss";
import instagram from '../../../../public/images/instagram.svg';
import facebook from '../../../../public/images/facebook.svg';
import youtube from '../../../../public/images/youtube.svg';


const SocialIcons = ({ classNameCustom }) => {
  return (
    <div className={clsx(styles.list, classNameCustom)}>
      <a
        href="https://www.instagram.com/geegokids_fi/"
        target="_blank"
        className={styles.link}
      >
        <Image src={instagram} alt="instagram image" width={48} height={48} className={styles.icon} />
      </a>
      <a href="https://www.facebook.com/geegokids" target="_blank">
        <Image src={facebook} alt="instagram image" width={48} height={48} className={styles.icon} />
      </a>
      <a href="https://www.youtube.com/channel/UCBvf4ff8Y_QpF3OPaH8K6Xw" target="_blank">
        <Image src={youtube} alt="youtube image" width={48} height={48} className={styles.icon} />
      </a>
    </div>
  );
};

export default SocialIcons;