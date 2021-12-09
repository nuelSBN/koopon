import styled from 'styled-components';

export const FlexCenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  margin-bottom: 30px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;
