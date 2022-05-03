import React from 'react';
import styled from '@emotion/styled';

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #ff7a00;
  border-radius: 30px;
  padding: 12px 28px;
  width: fit-content;
`;

const Text = styled.div`
  color: #ff7a00;
  text-align: center;
`;

export default Button;
