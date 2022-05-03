/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import styled from '@emotion/styled';
import Pallete from './Pallete';

export default {
  title: 'UI/Pallete',
  component: Pallete,
  parameters: {
    docs: {
      description: {
        component: 'Pallete 컴포넌트',
      },
    },
  },
  argTypes: {
    text: {
      description: '텍스트',
      control: { type: 'text' },
    },
    onClick: {
      description: '클릭액션',
      control: { type: 'action' },
    },
  },
} as ComponentMeta<typeof Pallete>;
const Template: ComponentStory<typeof Pallete> = () => {
  return (
    <Container>
      <Pallete />
    </Container>
  );
};

export const DefaultButton = Template.bind({});

const Container = styled.div`
  width: 500px;
`;
