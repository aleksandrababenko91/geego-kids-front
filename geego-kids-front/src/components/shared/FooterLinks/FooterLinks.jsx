import MainLink from "../MainLink/MainLink";
import { navigationLinks } from "./constants";
import styles from "./FooterLinks.module.scss";
import { createKey } from '../../../lib/createKey';

const FooterLinks = () => {
  return (
    <div className={styles.list}>
      {navigationLinks.map(({ url, name, type }) => (
        <MainLink url={url} key={createKey()} type={type}>
          {(name)}
        </MainLink>
      ))}
    </div>
  );
};

export default FooterLinks;