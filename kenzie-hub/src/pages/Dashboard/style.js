import styled from "styled-components";

export const DashboardGlobalContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;

  overflow-x: hidden;
`;

export const UserInfos = styled.div`
  width: 290px;
  height: 130px;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  align-items: flex-start;
  justify-content: center;

  @media (min-width: 768px) {
    width: 688px;

    flex-direction: row;

    align-items: center;
    justify-content: space-between;
  }
`;

export const UserName = styled.p`
  font-size: var(--title-1);
  font-weight: var(--title-bold);

  color: var(--color-grey-0);
`;

export const UserModule = styled.span`
  font-size: var(--title-headline);

  color: var(--color-grey-1);
`;

export const TecInfo = styled.div`
  width: 290px;
  height: 60px;

  display: flex;
  flex-direction: row;

  gap: 1rem;

  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 688px;
  }
`;

export const TecTitle = styled.p`
  font-size: var(--title-1);
  font-weight: var(--title-bold);

  color: var(--color-grey-0);
`;

export const TecPlus = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: var(--margin-default);

  width: 32px;
  height: 32px;

  background-color: var(--color-grey-3);

  font-size: var(--title-1);
  font-weight: var(--title-bold);

  color: var(--color-grey-0);

  border: none;
  outline: none;

  cursor: pointer;
`;

export const Techs = styled.div`
  width: 296px;
  height: 416px;

  background-color: var(--color-grey-3);

  border-radius: var(--margin-default);

  margin-top: 8px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  padding: 1.5rem 0;

  @media (min-width: 768px) {
    width: 688px;
  }
`;

export const SingleTech = styled.div`
  width: 250px;
  height: 48px;

  background-color: var(--color-grey-4);

  border-radius: var(--margin-default);

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;

  cursor: pointer;

  @media (min-width: 768px) {
    width: 622px;
  }

  :hover {
    background-color: var(--color-grey-1);
  }
`;

export const TechTitle = styled.span`
  color: var(--color-grey-0);
`;

export const TechStatus = styled.span`
  color: var(--color-grey-1);

  font-size: var(--title-3);
`;
