"use client"
// import { useTranslations } from 'next-intl';
import styles from './UseAlert.module.scss';
import clsx from 'clsx';
import CloseButton from '../CloseButton/CloseButton';
import stateUseAlert from '../../../state/stateUseAlert';
import { useEffect } from 'react';
import { createPortal } from "react-dom";

export default function UseAlert({title='', text='', handleClose=()=>{}}){
  // const t = useTranslations("Alert");
  const isOpen = stateUseAlert(state => state.isOpen);
  const type = stateUseAlert(state => state.type);
  const autoClose = stateUseAlert(state => state.autoClose);
  const close = stateUseAlert(state => state.close);

  const closeModall=()=>{
    close()
    handleClose()
  }

  useEffect(()=>{
    if(isOpen && autoClose){
      const timeoutId = setTimeout(()=>{
        closeModall()
      },5000)
      return () => clearTimeout(timeoutId);
    }
  },[isOpen, autoClose])

  const isText = (type) => {
    if(type === 'info'|| type === 'success'){return false}else return true
  }

  if(!isOpen){return null}

  return createPortal(
    <div className={styles.wrapper}>
    <div className={clsx(styles.alert, styles[type])}>
        <h2>{title ? title : t(`title_${type}`)}</h2> 
        { isText(type) && <p>{text ? text : t(`text_${type}`)}</p> }

      <CloseButton className={styles.close_btn} onClick={closeModall}/>
    </div>
  </div>, document?.body
  );
}