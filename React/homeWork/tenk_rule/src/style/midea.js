import { css } from "styled-components";

const device = {
  xs: "451px",
  sm: "767px",
};

const media = {
  xs: (...args) => css`
    @media (max-width: ${device.xs}) {
      ${css(...args)};
    }
  `,
  sm: (...args) => css`
    @media (max-width: ${device.sm}) {
      ${css(...args)};
    }
  `,
};

export default media;
