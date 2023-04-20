import styled from "styled-components";


export const Split = styled.div`
    width: 2px;
    height: 100%;
    background-color: #c1c1c1;
`;
export const LeftColumn = styled.div`
    // background-color: #f2f2f2;
    // left: 0
    // // flex-grow: 4;
    // padding: 10px;
    width: 50%;
    height: 100%;
    background-color: #f2f2f2;
`;

export const RightColumn = styled.div`
    // background-color: #f3b343;
    // right: 0
    // // flex-grow: 1;
    // border-left: 2px solid #ccc;
    // padding: 10px;
    width: 50%;
    height: 100%;
    background-color: #ffffff;
`;

export const Container = styled.div`
  display: flex;
  margin: 90px 0px 10px;
  padding: 20px;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
`;