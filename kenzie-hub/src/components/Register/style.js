import styled from "styled-components";

export const RegisterGlobalContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const RegisterContainer = styled.form`
  margin: 15px 10px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;

  gap: 0.5rem;

  background-color: var(--color-grey-3);

  width: 290px;
  height: 790px;

  border-radius: var(--margin-default);

  @media (min-width: 768px) {
    width: 370px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  align-items: center;
  justify-content: center;

  > p {
    font-size: var(--title-1);
    font-weight: var(--title-bold);

    color: var(--color-grey-0);
  }
  > span {
    font-size: var(--title-headline);

    color: var(--color-grey-1);
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  width: 90%;

  > label {
    width: 250px;

    display: flex;
    align-items: flex-start;

    font-size: var(--title-headline);

    color: var(--color-grey-0);

    margin-top: 8px;
    @media (min-width: 768px) {
      width: 315px;
    }
  }
  > input {
    width: 90%;
    height: 28px;

    padding: 0.3rem 0.5rem;

    background-color: var(--color-grey-2);

    border: none;
    border-radius: var(--margin-default);
    outline: none;

    color: var(--color-grey-0);
  }
  > select {
    width: 259px;
    height: 38px;

    padding: 0.3rem 0.5rem;

    background-color: var(--color-grey-2);

    border: none;
    border-radius: var(--margin-default);
    outline: none;

    color: var(--color-grey-1);

    @media (min-width: 768px) {
      width: 315px;
    }
  }
`;

export const ButtonRegister = styled.button`
  width: 259px;
  height: 38px;

  background-color: var(--color-primary-negative);

  border: none;
  border-radius: var(--margin-default);
  outline: none;

  color: var(--color-grey-0);

  cursor: pointer;

  @media (min-width: 768px) {
    width: 315px;
  }
`;

export const ErrorMessage = styled.p`
  width: 259px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  color: var(--color-negative);

  font-size: var(--title-2);

  @media (min-width: 768px) {
    width: 315px;
  }
`;
