import { styled } from "styled-components";

import { title, clock } from "style/imges";

import media from "style/midea";

export const Header = styled.header`
  background: url(${clock}) no-repeat center/contain;
  height: 225px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 46px;

  ${media.xs`
    height: 126px;
    margin-bottom: 31px;

  `}
`;

export const TitleImg = styled.img.attrs(() => ({
  src: title,
  alt: "1만 시간의 법칙",
}))`
  width: 564px;

  ${media.sm`
    width: 404px;
  `}
  ${media.xs`
    width: 267px;
  `}
`;
