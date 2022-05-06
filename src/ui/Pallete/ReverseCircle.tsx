import React from 'react';
import styled from '@emotion/styled';

type CircleProps = {
  onClick: () => void;
};

const ReversedCircle = ({ onClick }: CircleProps) => {
  return <Container onClick={onClick}>R</Container>;
};

const Container = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default ReversedCircle;
