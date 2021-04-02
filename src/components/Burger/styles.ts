import { MdClose, MdMenu } from "react-icons/md";
import styled, { css } from "styled-components";

export const Menu = styled.div`
  & > .active {
    position: fixed;
    z-index: 2000;
    height: 100vh;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    & > .close {
      width: 100%;
      height: 3rem;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      padding: 0 2rem;
      margin-top: 1.5rem;
    }
    & > .links {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & > a {
        font-family: "Nunito", sans-serif;
        font-size: 30px;
        text-decoration: none;
        color: #333;
      }
    }

    & > .links a + a {
      margin-top: 2rem;
    }
  }
`;
const icons = css`
  width: 35px;
  height: 35px;
  color: #333;
`;

export const IconMenu = styled(MdMenu)`
  ${icons}
`;

export const IconClose = styled(MdClose)`
  ${icons}
`;
