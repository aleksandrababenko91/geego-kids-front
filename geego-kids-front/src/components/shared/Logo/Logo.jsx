"use client";

import Image from "next/image";
import logo from '../../../../public/images/logo.svg';

export default function Logo() {

  return (
      <Image  src={logo} alt="company logo image" width={120}  priority

      />
  );
}