import styled from "styled-components";

export const Div = styled.div`
  width: 290px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 15px 10px 15px 10px;

  @media (min-width: 768px) {
    width: 688px;
  }
`;

export const ButtonHeader = styled.button`
  height: 32px;
  width: 78px;

  background-color: var(--color-grey-3);
  color: var(--color-grey-0);

  border: none;
  border-radius: var(--margin-default);
  outline: none;

  font-size: var(--title-3);

  cursor: pointer;
`;

export const Line = styled.hr`
  width: 100%;
  opacity: 10%;

  background-color: var(--color-grey-3);
`;
