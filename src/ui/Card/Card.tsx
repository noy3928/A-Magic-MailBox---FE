import React from 'react';
import styled from '@emotion/styled';

type CardProps = {
  bgColor: string;
};

type StyleProps = {
  bgColor?: string;
  mainColor?: string;
};

const Card = ({ bgColor }: CardProps) => {
  return (
    <Container bgColor={bgColor}>
      <LineContainer>
        <UpperBox />
      </LineContainer>
    </Container>
  );
};

const Container = styled.div<StyleProps>`
  width: 100%;
  height: 100%;
  padding: 25px;
  border-radius: 30px;
`;

const LineContainer = styled.div<StyleProps>`
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.mainColor};
  border-radius: 30px;
`;

const UpperBox = styled.div``;

const Input = styled.input``;

const AdviceBox = styled.div``;

const Advice = styled.div``;

export default Card;
