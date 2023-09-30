import styled from "styled-components";

export const InstagramContent = styled.div`
  background: #fff;
  text-align: center;
`;
export const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Img = styled.img`
  width: 16.666%;
  min-width: 171.5px;
  min-height: 171px;
`;
