import React from 'react';

enum OperationalSystems {
  Windows = 'windows',
  Linux = 'linux'
}

const Layout = ({ os }: { os: OperationalSystems; }) => {
  const getLayout = () => {
    switch (os) {
      case 'windows':
        return require('./windows').default;
      case 'linux':
        return require('./linux').default;
      default:
        return require('./windows').default;
    }
  };

  const LayoutOs = getLayout();

  return (
    <LayoutOs />
  );
};

export default Layout;