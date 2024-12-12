"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useToken from '@/lib/hooks/useToken';

const WithAuthProvider = ({ children }) => {
  const { token } = useToken();
  const router = useRouter();
  const [loading, setLoading] = useState(true); // Флаг загрузки для предотвращения преждевременных редиректов

  useEffect(() => {
    // Если токен отсутствует, выполняем редирект на страницу логина
    if (token === null) {
      console.log('Redirecting to /login');
       //router.replace('/login'); // Этот редирект должен сработать на клиенте
    } else {
      setLoading(false); // Если токен найден, обновляем флаг загрузки
    }
  }, [token, router]); // Зависят от token и router

  // Пока идет загрузка (проверка токена), показываем сообщение или спиннер
  if (loading) {
    return <div>Loading...</div>; // Можете заменить на спиннер или текст
  }

  return <>{children}</>;
};

export default WithAuthProvider;
