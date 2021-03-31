import styled from "styled-components";
export const Container = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 4rem;

  & > .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 0px 0px 12rem;
    & > img {
      height: 7rem;
      width: 7rem;
      object-fit: cover;
      -webkit-user-select: none;
      -webkit-user-drag: none;
      -webkit-app-region: no-drag;
      cursor: default;
    }
    & > img + a {
      padding-left: 42rem;
    }
    & > a + a {
      padding-left: 30px;
    }
    & > a {
      text-decoration: none;
      font-weight: bold;
      color: #000;
      font-size: 20px;
      font-family: Nunito, sans-serif;
    }
    & > a:nth-child(2) {
      color: #fd7fe9;
    }

    & > a:nth-child(1):hover {
      color: #e98bfa;
    }
    & > a:nth-child(2):hover {
      color: #f3bafb;
      text-decoration: underline;
    }
    & > a:nth-child(3):hover {
      color: #828182;
      text-decoration: underline;
    }
    & > a:nth-child(4):hover {
      color: #828182;
      text-decoration: underline;
    }
    & > a:nth-child(5):hover {
      color: #828182;
      text-decoration: underline;
    }
  }
`;
