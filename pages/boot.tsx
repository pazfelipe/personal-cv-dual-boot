import Link from 'next/link';
import React from 'react';

const BootPage = () => {

  const operationalSystems = [
    {
      name: "Windows",
      value: "windows"
    },
    {
      name: "Linux",
      value: "linux"
    }
  ];

  const boot = (os: string): void => localStorage.setItem('booted', os);

  return (
    <div>
      Boot Page
      <ul>
        {
          operationalSystems.map((o, i) => {
            return <li key={ i }>
              <Link href="/" >
                <span onClick={ () => boot(o.value) }>
                  { o.name }
                </span>
              </Link>
            </li>;
          })
        }
      </ul>
    </div>
  );
};

export default BootPage;