'use client';

import React from "react";
import { useTranslations } from 'next-intl';
import useToken from '@/lib/hooks/useToken'; 
import { useRouter } from '../../navigation';
import MainLink from '../shared/MainLink/MainLink';
import { useState } from 'react';
import ButtonUlos from '../../components/shared/ButtonUlos/ButtonUlos';

const Logout = (props) => {
  const t = useTranslations("Login");
  const handleLogout = () => {
    var currentLanguage = localStorage.getItem('lang');
    localStorage.clear(props.token);
    localStorage.setItem('lang', currentLanguage);
    window.location.reload();
  };

  
  return (
    <ButtonUlos onClick={handleLogout}>
      {t('logout')}
    </ButtonUlos>
  );
};

export default Logout;
