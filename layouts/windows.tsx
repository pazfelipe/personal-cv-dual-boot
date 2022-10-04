import React from 'react';
import BtnLogOff from '../component/btnLogOff';
import BtnShutDown from '../component/btnShutDown';

const WindowsLayout = () => {
  return (
    <div>
      <h1>Windows</h1>
      <BtnLogOff />
      <hr />
      <BtnShutDown />
    </div>
  );
};

export default WindowsLayout;