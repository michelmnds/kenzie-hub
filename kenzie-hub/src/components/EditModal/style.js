import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: rgb(0, 0, 0, 0.6);

  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;
  left: 0;
`;

export const ModalView = styled.div`
  width: 296px;
  height: auto;

  background-color: var(--color-grey-3);

  border-top: 40px solid var(--color-grey-2);
  border-radius: var(--margin-default);

  position: relative;
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: -40px;

  > span {
    color: var(--color-grey-0);

    font-size: var(--title-3);

    margin-left: 15px;
  }

  > button {
    background-color: transparent;

    border: none;
    outline: none;

    color: var(--color-grey-1);

    margin-right: 15px;

    cursor: pointer;
  }
`;

export const ModalMain = styled.form`
  width: 100%;
  height: auto;

  margin: 15px 15px;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  gap: 1rem;

  > span {
    color: var(--color-grey-0);

    font-size: var(--title-headline);
  }

  > input {
    width: 244px;
    height: 38px;

    border: 1px solid var(--color-grey-0);
    outline: none;
    border-radius: var(--margin-default);

    background-color: var(--color-grey-2);

    padding: 0 0.5rem;

    color: var(--color-grey-0);
  }

  > select {
    width: 262px;
    height: 38px;

    border: 1px solid var(--color-grey-0);
    outline: none;
    border-radius: var(--margin-default);

    background-color: var(--color-grey-2);

    padding: 0 0.5rem;

    color: var(--color-grey-0);
  }

  > section {
    display: flex;

    align-items: center;
    justify-content: space-between;

    width: 262px;
  }
`;

export const DeleteButton = styled.button`
  width: 78px;
  height: 38px;

  border: none;
  outline: none;
  border-radius: var(--margin-default);

  background-color: var(--color-grey-1);

  padding: 0 0.5rem;

  color: var(--color-grey-0);

  cursor: pointer;

  position: absolute;

  bottom: 15px;
  right: 16px;
`;

export const SubmitButton = styled.button`
  width: 164px;
  height: 38px;

  border: none;
  outline: none;
  border-radius: var(--margin-default);

  background-color: var(--color-primary-negative);

  padding: 0 0.5rem;

  color: var(--color-grey-0);

  cursor: pointer;
`;
