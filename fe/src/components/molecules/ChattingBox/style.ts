import styled from 'styled-components';

export const ChattingBox = styled.div`
  height: calc(100% - 2.2rem);
`;

export const ChattingArea = styled.div`
  height: 100%;
  padding: 0 0.3em;
  overflow-y: auto;
`;

export const MyMessage = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 98%;
  padding: 1%;
  margin: 1% 0;
`;

export const ServerMessage = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 98%;
  padding: 1%;
  margin: 1% 0%;
`;
