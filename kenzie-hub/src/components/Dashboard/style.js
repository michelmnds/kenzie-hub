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
