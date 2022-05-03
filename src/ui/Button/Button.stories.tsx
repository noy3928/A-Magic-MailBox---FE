/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Button 컴포넌트',
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
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <Container>
      <Button {...args} />
    </Container>
  );
};

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  text: '입장하기',
};

export const DefaultButton1 = Template.bind({});
DefaultButton1.args = {
  text: '테스트',
};

const Container = styled.div`
  width: 500px;
`;
