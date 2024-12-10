"use client";

// import { useTranslations } from 'next-intl';
import styles from './LoginForm.module.scss';
import { useState } from 'react';
import MainLink from '../shared/MainLink/MainLink';
import useToken from '@/lib/hooks/useToken'; 

const LoginForm = () => {
  // const t = useTranslations("Login");

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { setToken } = useToken();

  const loginUser = async (credentials) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/rest-auth/login/`, 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      if (!response.ok) {
        throw new Error('login-error'); 
      }

      const data = await response.json();
      return data;
      
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await loginUser({ username, password });

      // Логируем токен, полученный от сервера
    console.log("Token received from server:", userData);

    // Сохраняем токен в localStorage
    localStorage.setItem("token", JSON.stringify({ key: userData }));

    // Логируем сохраненный токен в localStorage
    console.log("Token saved to localStorage:", JSON.parse(localStorage.getItem("token")));

      setToken(userData);
      setError("");
    } catch (err) {
      if (err.message === "login-error") {
        setError("Неверное имя пользователя или пароль."); // Локализуйте это сообщение
      } else {
        setError("Произошла ошибка. Повторите попытку позже."); // Для непредвиденных ошибок
      }
    }
  };
  

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <h3 className={styles.title}>Kirjaudu sisään</h3>
        <p className={styles.item}>
          {'Rekisteröityminen:'}
          <MainLink
            href="http://app.geegokids.com/koodi"
            target="_blank"
            rel="noreferrer"
          >
            {'Luo tunnukset ja aktivoi koodi tästä!'}
          </MainLink>
        </p>
        <p className={styles.item}>{'Tämä sovellus on tarkoitettu ohjaajien käytettäväksi työasemilla.'}</p>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit} className={styles.form}>
          <ul className={styles.list}>
            <p className={styles.item}>{'Sähköposti / Käyttäjätunnus'}</p>
            <li>
              <input
                type="text"
                name="username"
                className={styles.input}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </li>
            <p className={styles.item}>{'Salasana'}</p>
            <li>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i
                className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                onClick={handleShowPassword}
              ></i>
            </li>
          </ul>
          <button type="submit">Login</button>

          <MainLink
            className="privacy-policy"
            href="https://www.geegokids.com/fi/tietosuojaseloste/"
            target="_blank"
            rel="noreferrer"
          >
            {'Geego Kids Tietosuojaseloste"'}
          </MainLink>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;