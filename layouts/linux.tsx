import React from 'react';
import BtnLogOff from '../component/btnLogOff';
import BtnShutDown from '../component/btnShutDown';

const LinuxLayout = () => {

  return (
    <div>
      <h1>Linux</h1>
      <BtnLogOff />
      <hr />
      <BtnShutDown />
    </div>
  );
};

export default LinuxLayout;