"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoginSection from '@/components/login-page/LoginSection';
import UseAlert from '../../../components/modals/UseAlert/UseAlert';
import useToken from '@/lib/hooks/useToken';

export default function LoginPage() {
  const { token } = useToken();
  const router = useRouter();


  return (
    <div>
      <LoginSection />
      <UseAlert />
    </div>
  );
}
