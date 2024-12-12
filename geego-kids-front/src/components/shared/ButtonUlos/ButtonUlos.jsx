"use client";

import MainButton from '../MainButton/MainButton';
import { useRouter } from "@/navigation"


export default function ControlBtnModalPayment({ children, className, onClick}) {
  const router = useRouter();
  const url='/login';
  const handleClick=()=>{
    router.push(url)
  }
 
  return <MainButton 
    className={className} 
    onClick={handleClick}
>
      {children}
  </MainButton>
}