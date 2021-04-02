import styled from "styled-components";
export const Container = styled.div`
  & > .all-cards,
  & > .all-cards2 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 6rem;
    @media (max-width: 920px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      & > .card {
        padding: 0 !important;
        font-family: Nunito, sans-serif;

        & > .img-card {
          & > img {
            border-radius: 12px;
            padding: 0;
            width: 200px;
            margin-left: 5rem;
            margin-top: 5rem;
            -webkit-user-select: none;
            -webkit-user-drag: none;
            -webkit-app-region: no-drag;
            cursor: default;
          }
        }

        & > .bunny {
          display: flex;
          flex-direction: column;
          width: 300px;
          margin-left: 3rem;
          margin-bottom: 3rem;
          & > h2 {
            padding-top: 10px;
          }
          & > button:hover {
            background-color: #50b0d9;
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
                -webkit-user-select: none;
                -webkit-user-drag: none;
                -webkit-app-region: no-drag;
                cursor: default;
              }
            }
          }

          & > h6 {
            padding-top: 10px;
            font-size: 21px;
            font-family: "Nunito", sans-serif;
            font-weight: normal;
          }
          & > .items {
            display: flex;
            flex-direction: column;
            padding-top: 12px;
            padding-bottom: 20px;
            font-size: 20px;
            font-family: "Nunito", sans-serif;
            & > .sabores {
              font-size: 16px;
            }
          }
          & > p {
            padding-top: 10px;

            font-family: "Nunito", sans-serif;
            font-weight: normal;
          }
          & > img {
            width: 50px;
            height: 100px;
            padding-left: 30px;
            -webkit-user-select: none;
            -webkit-user-drag: none;
            -webkit-app-region: no-drag;
            cursor: default;
          }
        }
      }
    }

    & > .card {
      padding-top: 5rem;
      padding-left: 10rem;
      font-family: Nunito, sans-serif;
      & > .img-card {
        & > img {
          border-radius: 12px;
          -webkit-user-select: none;
          -webkit-user-drag: none;
          -webkit-app-region: no-drag;
          cursor: default;
        }
      }

      & > .bunny {
        display: flex;
        flex-direction: column;
        width: 300px;

        & > h2 {
          padding-top: 10px;
        }
        & > button:hover {
          background-color: #50b0d9;
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
              -webkit-user-select: none;
              -webkit-user-drag: none;
              -webkit-app-region: no-drag;
              cursor: default;
            }
          }
        }

        & > h6 {
          padding-top: 10px;
          font-size: 21px;
          font-family: "Nunito", sans-serif;
          font-weight: normal;
        }
        & > .items {
          display: flex;
          flex-direction: column;
          padding-top: 12px;
          padding-bottom: 20px;
          font-size: 20px;
          font-family: "Nunito", sans-serif;
          & > .sabores {
            font-size: 16px;
          }
        }
        & > p {
          padding-top: 10px;

          font-family: "Nunito", sans-serif;
          font-weight: normal;
        }
        & > img {
          width: 100px;
          height: 200px;
          padding-left: 30px;
          -webkit-user-select: none;
          -webkit-user-drag: none;
          -webkit-app-region: no-drag;
          cursor: default;
        }
      }
    }
    & > .card {
      padding-top: 5rem;
      padding-left: 10rem;

      font-family: Nunito, sans-serif;
      & > .img-card {
        & > img {
          border-radius: 12px;
          -webkit-user-select: none;
          -webkit-user-drag: none;
          -webkit-app-region: no-drag;
          cursor: default;
        }
      }

      & > .bunny {
        display: flex;
        flex-direction: column;
        width: 300px;

        & > h2 {
          padding-top: 10px;
        }
        & > button:hover {
          background-color: #50b0d9;
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
              -webkit-user-select: none;
              -webkit-user-drag: none;
              -webkit-app-region: no-drag;
              cursor: default;
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
      }
    }
  }
`;
