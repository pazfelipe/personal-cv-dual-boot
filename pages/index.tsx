import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Layout from '../layouts/layout';

enum OperationalSystems {
  Windows = 'windows',
  Linux = 'linux'
}

const Home = () => {

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('booted')) {
      router.replace('/boot');
    }
  }, []);

  const getBootedOs = (): OperationalSystems => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('booted') as OperationalSystems;
    }
  };

  return (
    <div>
      {
        !!getBootedOs() && <Layout os={getBootedOs()}/>
      }
      Outro teste aqui
      <ul>
        <li>
          <Link href="/boot">Default</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;