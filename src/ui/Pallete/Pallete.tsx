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
  align-items: center;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  gap: 10px;
  width: fit-content;
`;

export default Pallete;
