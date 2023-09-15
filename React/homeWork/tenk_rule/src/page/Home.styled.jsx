import { styled } from "styled-components";
import media from "style/midea";

export const Wrapper = styled.div`
  padding: 120px 0 100px;

  ${media.sm`
  padding: 80px 0 60px;
  `}
  ${media.xs`
  padding: 41px 0 20px;
  `}
`;
