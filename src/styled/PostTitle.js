import styled from "styled-components";
import { Piller } from './Piller'

const PostTitle = styled.div`
  margin-top: 104px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 10px;
  position: relative;
  width: 100%;

  ${Piller}:hover {
    max-width: 300px;
    transform: scale(0);
  }
`;

export { PostTitle };
