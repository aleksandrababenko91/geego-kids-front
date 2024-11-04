import styles from '../CloseButton/CloseButton.module.scss';
import clsx from "clsx";
import Image from "next/image";
import close from '../../../../public/images/close.svg';

export default function CloseButton({ ariaLabel, onClick, className }) {
  return <button 
    type='button' 
    aria-label={ariaLabel} 
    onClick={onClick} 
    className={clsx(styles.btn, className)}>
      <Image alt="close btn image" src={close} width={40} height={40} />
  </button>
}