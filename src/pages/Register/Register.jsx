import RegisterForm from 'components/RegisterForm/RegisterForm';
import React from 'react';
import { Title, ContainerBody } from 'components/App/App.styled';

const Register = () => {
  return (
    <>
      <ContainerBody>
        <Title>Register</Title>
        <RegisterForm />
      </ContainerBody>
    </>
  );
};

export default Register;
