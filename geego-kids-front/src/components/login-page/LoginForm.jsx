"use client";

import { useTranslations } from 'next-intl';
import styles from './LoginForm.module.scss';
import { useState } from 'react';
import ButtonUlos from '@/components/shared/ButtonUlos/ButtonUlos';
import MainLink from '../shared/MainLink/MainLink';

const LoginForm = (props) => {

  const t = useTranslations("Login");

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const loginUser = async (credentials) => {
    return fetch(`${process.env.NEXT_APP_API_ENDPOINT}/rest-auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    props.setToken(token);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <h3 className={styles.title}>{t('login')}</h3>
        <p className={styles.item}>
          {t('login-code')}
          <MainLink
            href="http://app.geegokids.com/koodi"
            target="_blank"
            rel="noreferrer"
          > {t('login-code-link')}
          </MainLink>
        </p>
        <p className={styles.item}>
          {t('login-note')}
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <ul className={styles.list}>
              <p className={styles.item}>{t('login-username')}</p>
              <li>
                <input
                type="text"
                name="username"
                className={styles.input}
                onChange={(e) => setUsername(e.target.value)}
                />
              </li>
              <p className={styles.item}>{t('login-password')}</p>
              {showPassword ? (
                <>
                  <li>
                  <input
                    type="text"
                    name="password"
                    className={styles.input}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  </li>
                  <i className="fa-solid fa-eye" onClick={handleShowPassword}></i>
                </>
              ) : (
                <>
                  <li>
                  <input
                    type="text"
                    name="password"
                    className={styles.input}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  </li>
                  <i
                    className="fa-solid fa-eye-slash"
                    onClick={handleShowPassword}
                  ></i>
                </>
              )}
          </ul>
        <ButtonUlos 
        >
          {t('login-submit')}
        </ButtonUlos>
        <MainLink className="privacy-policy"
          href="https://www.geegokids.com/fi/tietosuojaseloste/"
          target="_blank"
          rel="noreferrer"
        >
          {t('login-privacy')}
        </MainLink>
        </form>
    </div>
    </div>

  );
};


export default LoginForm;
