import { Container } from "./styles";
import Header from "../../components/header";
export default function Home() {
  return (
    <>
      <Header />

      <Container>
        {/* AQUI É O HTML DO HEADER */}
        <div className="home-page">
          <div className="content-h2">
            <h2>Venha comprar os melhores doces e salgados do Alto Tiête</h2>
            {/* <div className="click-here">
              Clique aqui para ver mais
              <img src="/south-24px.svg"></img>
            </div> */}
          </div>

          <img src="/para-nicolas.png"></img>
        </div>
      </Container>
    </>
  );
}
