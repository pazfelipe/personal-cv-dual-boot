import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const MainContainer = styled('main')`
  display: flex;
  background-color: #000;
  color: #fff;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-family: 'Roboto Slab', serif;
`;

const BodyContainer = styled('div')`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: red;
  width: 60%;
  height: 70%;

`;

const UlContainer = styled('ul')`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LiOption = styled('li')`
  list-style: none;
  margin: 0;
  padding: 5px 0;
  margin-bottom: 10px;
  cursor: pointer;
  :hover {
    background-color: #fff;
    color: #000;
  }
`;

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
    <MainContainer>
      <BodyContainer>

        Boot Page
        <UlContainer>
          {
            operationalSystems.map((o, i) => {
              return <LiOption key={ i }>
                <Link href="/" >
                  <span onClick={ () => boot(o.value) }>
                    { o.name }
                  </span>
                </Link>
              </LiOption>;
            })
          }
        </UlContainer>
      </BodyContainer>
    </MainContainer>
  );
};

export default BootPage;