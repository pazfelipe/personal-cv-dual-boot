import { useRouter } from 'next/router';
import React from 'react';

const BtnShutDown = () => {
  const router = useRouter();

  const handlgeShutDown = () => {
    localStorage.removeItem('booted');
    router.replace('/boot');
  };


  return (
    <button
      onClick={ handlgeShutDown }
    >Shut Down</button>
  );
};

export default BtnShutDown;