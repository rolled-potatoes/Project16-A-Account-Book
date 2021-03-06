import styled from 'styled-components';

export const NotFound = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    padding-top: 0.5em;
  }
  .big {
    font-size: 2rem;
  }
  .small {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.subText};
  }
`;

export const BackButton = styled.input`
  margin: 5% 0 0 5%;
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.selectedBlue};
`;

export default NotFound;
