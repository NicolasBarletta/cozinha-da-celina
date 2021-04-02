import styled from "styled-components";
export const Container = styled.header`
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  & > .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    padding-right: 6rem;
    width: 100%;
    background-color: #fff;

    & > img {
      height: 10rem;
      width: 10rem;
      margin-left: 5rem;

      object-fit: cover;
      -webkit-user-select: none;
      -webkit-user-drag: none;
      -webkit-app-region: no-drag;
      cursor: default;
    }

    & > nav a {
      text-decoration: none;
      font-weight: bold;
      color: #000;
      font-size: 20px;
      font-family: Nunito, sans-serif;
    }
    & > nav a:nth-child(1) {
      color: #fd7fe9;
    }
    & > nav a + a {
      margin-left: 1.5rem;
    }
    & > nav a:nth-child(1):hover {
      color: #e98bfa;
    }
  }
`;
