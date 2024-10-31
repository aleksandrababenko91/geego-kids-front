"use client";
import styles from "./ContactLinks.module.scss";
import Image from "next/image";
import phone from '../../../../public/images/phone.svg';
import mail from '../../../../public/images/mail.svg';

const ContactLinks = () => {

  return (
    <div className={styles.contacts}>
      <div className={styles.contact}>
        <Image src={phone} alt="phone image" height={29} />
        <p className={styles.text}>
        +358 40 5213 914
        </p>
      </div>
      <div className={styles.contact}>
        <Image src={mail} alt="mail image" width={25} height={29} className={styles.mail} />
        <p className={styles.text}>
        info@geegokids.com
        </p>
      </div>
      <div className={styles.contact}>
        <p className={styles.text}>
          Rautatienkatu 21 B<br />
          33100 Tampere <br />
          Finland
        </p>
      </div>
    </div>
  );
};

export default ContactLinks;