import react from "React";
import styled from "@emotion/styled";
import { palletes } from "./palletes";

type StyleTheme = {
  bgColor: string;
};

const Pallete = () => {
  return (
    <Container>
      {palletes.map((data) => {
        return <Circle bgColor={data.bgColor} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  padding: 20px;
`;

const Circle = styled.div<StyleTheme>`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${(props) => props.bgColor};
`;

export default Pallete;
