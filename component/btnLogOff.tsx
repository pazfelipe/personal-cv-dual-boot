import { useRouter } from 'next/router';
import React from 'react';

const BtnLogOff = () => {
  const router = useRouter();

  const handlgeLogOff = () => {
    router.replace('/logoff');
  };


  return (
    <button
      onClick={ handlgeLogOff }
    >Log Off</button>
  );
};

export default BtnLogOff;