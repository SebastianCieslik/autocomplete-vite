import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border: 2px solid black;
  padding: 10px;
`;

export const StyledInputText = styled.input`
  border: 1px solid red;
`;
