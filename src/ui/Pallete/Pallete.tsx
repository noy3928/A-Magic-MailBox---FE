import react from 'React';
import styled from '@emotion/styled';
import { palletes } from './palletes';
import Circle from './Circle';

const Pallete = () => {
  return (
    <Container>
      {palletes.map((data) => {
        return (
          <Circle
            key={data.type}
            mainColor={data.mainColor}
            bgColor={data.bgColor}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 20px;
`;

export default Pallete;
