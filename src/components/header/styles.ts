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
    & > .first-a {
      color: #fd7fe9 !important;
    }
    & > a:hover {
    }
  }
`;
