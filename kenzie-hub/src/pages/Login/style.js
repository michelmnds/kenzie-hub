import styled from "styled-components";

export const LoginGlobalContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.form`
  margin: 0 auto;
  margin-top: 24px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;

  gap: 0.5rem;

  background-color: var(--color-grey-3);

  height: 402px;
  width: 290px;

  border-radius: var(--margin-default);

  > p {
    font-size: var(--title-1);
    font-weight: var(--title-bold);

    color: var(--color-grey-0);
  }

  @media (min-width: 768px) {
    width: 369px;

    margin: 0 auto;
    margin-top: 24px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  font-size: var(--title-headline);

  color: var(--color-grey-1);

  width: 90%;

  > input {
    width: 90%;
    height: 12px;

    padding: 0.5rem;

    outline: none;

    border: 1px solid var(--color-grey-0);
    border-radius: var(--margin-default);

    background-color: var(--color-grey-2);
    color: var(--color-grey-0);
  }
  > label {
    width: 90%;

    display: flex;
    align-items: flex-start;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 1.5rem;

  width: 100%;

  > p {
    font-size: var(--title-headline);

    color: var(--color-grey-1);
  }
`;

export const LoginButton = styled.button`
  width: 96%;
  height: 36px;

  border-radius: var(--margin-default);
  border: none;
  outline: none;

  background-color: var(--color-primary);
  color: var(--color-grey-0);

  margin-top: 16px;

  cursor: pointer;
`;

export const ButtonRegisterLogin = styled.button`
  width: 259px;
  height: 36px;

  border-radius: var(--margin-default);
  border: none;
  outline: none;

  background-color: var(--color-grey-1);
  color: var(--color-grey-0);

  cursor: pointer;

  @media (min-width: 768px) {
    width: 318px;
  }
`;
