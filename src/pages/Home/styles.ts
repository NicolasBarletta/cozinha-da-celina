import styled from "styled-components";
export const Container = styled.div`
  & > .home-page {
    display: flex;
    flex-direction: row;
    padding: 2rem 4rem;
    justify-content: space-between;
    align-items: center;
    margin-top: 10rem;

    & > .content-h2 {
      & > h2 {
        font-size: 55px;
        font-family: nunito, sans;
        color: #333;
        width: 30rem;
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

        font-family: "Nunito", sans-serif;
        font-size: 19px;

        display: flex;
        flex-direction: column;
        align-items: center;
        & > img {
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
      width: 35rem;

      object-fit: cover;
      -webkit-user-select: none;
      -webkit-user-drag: none;
      -webkit-app-region: no-drag;
      cursor: default;
    }
    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      padding: 0;
      margin-top: 10rem;
      & > img {
        margin: 0;

        width: 35rem;
        padding-top: 7rem;
      }
      & > .content-h2 {
        width: 100vw;
        margin-top: 3rem;
        padding: 0 2rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        & > h2 {
          font-size: 3.5rem;
          width: 100% !important;
          text-align: center;
        }
        & > .click-here {
          width: 50%;
          height: 3rem;
          display: flex;
          align-items: center;
          margin-top: 1.5rem;
          & > img {
            margin: 0;
          }
        }
      }
    }
    @media (max-width: 360px) {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      padding: 0;
      margin-top: 10rem;
      & > img {
        margin: 0;

        width: 10rem;
        padding-top: 7rem;
      }
      & > .content-h2 {
        width: 100vw;
        margin-top: 3rem;
        padding: 0 2rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        & > h2 {
          font-size: 3.5rem;
          width: 100% !important;
          text-align: center;
        }
        & > .click-here {
          width: 50%;
          height: 3rem;
          display: flex;
          align-items: center;
          margin-top: 1.5rem;
          & > img {
            margin: 0;
          }
        }
      }
      & > img {
        width: 20rem;

        object-fit: cover;
        -webkit-user-select: none;
        -webkit-user-drag: none;
        -webkit-app-region: no-drag;
        cursor: default;
      }
    }
  }
`;
