import styled from "styled-components";
export const Container = styled.div`
  * {
    font-family: Nunito, sans-serif;
  }
  & > .all-cards {
    display: flex;
    flex-direction: row;
    & > .card {
      padding-top: 19rem;
      padding-left: 10rem;
      font-family: Nunito, sans-serif;
      & > .img-card {
        & > img {
          border-radius: 12px;
        }
      }

      & > .bunny {
        display: flex;
        flex-direction: column;
        width: 300px;

        & > h2 {
          padding-top: 10px;
        }
        & > button {
          width: 300px;
          height: 55px;
          background-color: #caeefe;
          border: none;
          border-radius: 5px;
          outline: none;
          & > .botao {
            padding-left: 30px;

            display: flex;
            flex-direction: row;
            align-items: center;
            & > img {
              width: 40px;
              height: 40px;
            }
          }
        }

        & > h6 {
          padding-top: 10px;
          font-size: 21px;
          font-family: Nunito, sans-serif;
          font-weight: normal;
        }
        & > .items {
          display: flex;
          flex-direction: column;
          padding-top: 12px;
          padding-bottom: 20px;
          font-size: 20px;
          font-family: Nunito, sans-serif;
          & > .sabores {
            font-size: 16px;
          }
        }
        & > p {
          padding-top: 10px;

          font-family: Nunito, sans-serif;
          font-weight: normal;
        }
        & > img {
          width: 100px;
          height: 200px;
          padding-left: 30px;
        }
      }
    }
  }
`;
