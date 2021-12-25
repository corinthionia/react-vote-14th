import styled from 'styled-components';
import COLORS from '../../constants/Colors';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: grid;
  justify-content: center;

  grid-template-rows: 3fr 5fr 2fr;

  grid-template-areas:
    'title'
    'result'
    'next';
  text-align: center;

  color: ${COLORS.lightGray};
  background: ${COLORS.darkBackground};
`;

export const Title = styled.section`
  grid-area: title;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 36px;
`;

export const ResultWrapper = styled.section`
  grid-area: result;

  width: 500px;
  height: 200px;

  display: flex;
  justify-content: center;

  border: 1px solid ${COLORS.lightGray};
  border-radius: 30px;
`;

export const Box = styled.section`
  width: 50%;
  height: 100%;
`;

export const PartName = styled.h3`
  height: 40%;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeaderName = styled.h4`
  height: 40%;

  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Next = styled.section`
  grid-area: next;

  display: flex;
  align-items: center;
  justify-content: center;
`;
