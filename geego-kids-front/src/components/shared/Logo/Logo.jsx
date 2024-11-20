"use client";

import Image from "next/image";
import logo from '../../../../public/images/logo.svg';
import MainLink from "../MainLink/MainLink";

export default function Logo() {

  return (
    <MainLink url="/">
      <Image  src={logo} alt="company logo image" width={120}  priority />
    </MainLink>

  );
}