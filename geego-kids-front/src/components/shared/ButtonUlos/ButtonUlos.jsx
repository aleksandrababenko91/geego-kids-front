"use client";

import MainButton from '../MainButton/MainButton';

export default function ControlBtnModalPayment({ children, className, onClick}) {
  return <MainButton 
    className={className} 
    onClick={()=>{
      onClick()
    }}>
      {children}
  </MainButton>
}