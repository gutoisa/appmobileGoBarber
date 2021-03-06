// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Image } from 'react-native';
import { Container, Title, Input } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu logon</Title>
    </Container>
  );
};

export default SignIn;
