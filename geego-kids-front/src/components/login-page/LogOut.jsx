import React from "react";
import { useTranslations } from 'next-intl';


const Logout = (props) => {
  const handleLogout = () => {
    var currentLanguage = localStorage.getItem('lang');
    localStorage.clear(props.token);
    localStorage.setItem('lang', currentLanguage);
    window.location.reload();
  };

  const t = useTranslations("Login");
  
  return (
    <div className="Logout" onClick={handleLogout}>
      <i className="fa-solid fa-user"></i>
      {t('login')}
    </div>
  );
};

export default Logout;
