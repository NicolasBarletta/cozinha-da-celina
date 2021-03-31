import styled from "styled-components";
export const Container = styled.div`
  margin-top: 18rem;
  padding-left: 12rem;

  & > .home-page {
    display: flex;
    flex-direction: row;

    & > .content-h2 {
      width: 25rem;

      & > h2 {
        font-size: 55px;
        font-family: nunito, sans;
      }
      & > .click-here {
        @keyframes down {
          0% {
            transform: translateY(0%);
            opacity: 1;
          }
          100% {
            transform: translateY(10%);
            opacity: 0;
          }
        }

        position: relative;
        font-family: nunito, sans;
        font-size: 19px;
        padding-top: 8.5rem;
        padding-left: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        & > img {
          position: absolute;
          bottom: 0;
          left: 0;
          transform: translateY(50%);
          &:hover {
            animation: down 0.2s loop;
          }
        }
      }
    }
    & > img {
      padding-left: 35rem;
      width: 70rem;
      height: 39rem;
      padding-bottom: 90px;
      -webkit-user-select: none;
      -webkit-user-drag: none;
      -webkit-app-region: no-drag;
      cursor: default;
    }
  }
`;
