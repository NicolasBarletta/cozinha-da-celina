import styled from "styled-components";
export const Container = styled.div`
  * {
    font-family: "Nunito", sans-serif;
  }
  & > .container {
    @media (max-width: 940px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      & > .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 60px;
        width: 40rem;
        & > h2 {
          font-size: 3rem;
          color: #333;
        }
        & > p {
          width: 30rem;
          padding-top: 5px;
          font-size: 1.5rem;
        }
        & > .asterisco {
          width: 30rem;
          padding-top: 5px;
          font-size: 0.8rem;
          color: #afafaf;
        }
      }
      & > .redes-sociais {
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        & > h2 {
          color: #333;
          font-size: 3rem;
          margin-left: 3rem;
          margin-bottom: 2rem;
        }
        & > .links {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          & > a {
            & > img {
              width: 8rem;
              height: 8rem;
              margin-left: 2rem;
            }
          }
        }
      }
    }

    margin-top: 10rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    & > div + div {
      margin-top: 20px;
    }

    & > .content {
      display: flex;
      flex-direction: column;
      align-items: center;

      & > h2 {
        font-size: 3rem;
        color: #333;
      }
      & > p {
        width: 30rem;
        padding-top: 5px;
        font-size: 1.5rem;
      }
      & > .asterisco {
        width: 30rem;
        padding-top: 5px;
        font-size: 0.8rem;
        color: #afafaf;
      }
    }
    & > .redes-sociais {
      margin-top: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      & > h2 {
        color: #333;
        font-size: 3rem;
        margin-left: 3rem;
        margin-bottom: 2rem;
      }
      & > .links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        & > a {
          & > img {
            width: 8rem;
            height: 8rem;
            margin-left: 2rem;
          }
        }
      }
    }
  }
`;
