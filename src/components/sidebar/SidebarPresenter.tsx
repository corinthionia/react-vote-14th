import styled from 'styled-components';

export const Sidebar = styled.section`
  width: 250px;
  height: 900px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-right: 1px solid #e2e2e2;
`;

export const ItemsWrapper = styled.section`
  height: 45%;
  width: 100%;

  margin-top: 10%;
`;

export const ItemWrapper = styled.section`
  height: 25%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 150px;
  height: 30px;

  object-fit: contain;
`;

export const Text = styled.h3`
  display: flex;
`;
