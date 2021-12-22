import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  width: 80%;

  grid-template-rows: 1.5fr 8.5fr;
  grid-template-columns: 1fr 8fr 1fr;

  grid-template-areas:
    'title title title'
    '. result .';
  text-align: center;

  color: #3a3a55;
  font-weight: 600;
`;

export const Title = styled.section`
  grid-area: title;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 36px;
`;

export const ResultBox = styled.section`
  grid-area: result;

  display: felx;
  align-items: center;
  justify-content: center;
`;

export const Result = styled.section`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const RankWrapper = styled.section`
  width: 250px;
  height: 50px;

  margin: 0 25px 12.5px 25px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-radius: 10px;
  border: 1px solid #d2d2d2;
`;

export const Text = styled.span``;
