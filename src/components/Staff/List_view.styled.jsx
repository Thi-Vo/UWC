import styled from "styled-components";


export const Split = styled.div`
    width: 2px;
    height: 100%;
    background-color: #c3c4c1;
    min-height: 100vh;
`;
export const LeftColumn = styled.div`
    padding: 10px;
    width: 75%;
    height: 100%;
    background-color: #f2f2f2;
    align-items: center;
`;

export const RightColumn = styled.div`
    padding: 10px;
    width: 25%;
    height: 100%;
    background-color: #ffffff;
    justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  margin: 90px 0px 10px;
  padding: 20px;
  position: relative;
  width: 100%;
  height: 100%
`;