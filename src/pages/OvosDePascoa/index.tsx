import { Container } from "./styles";
import Header from "../../components/header";

export default function Ovo() {
  return (
    <>
      <Header />

      <Container>
        {/* AQUI É O HTML DO HEADER */}
        <div className="all-cards">
          <div className="card">
            <div className="img-card">
              <img src="/ovos1.jpg"></img>
            </div>
            <div className="bunny">
              <h2>Ovo de Páscoa com Bombons</h2>
              <h6>Pesos &nbsp;e &nbsp;Preços</h6>

              <div className="items">
                <p>250g - R$ 29,00</p>
                <p>350g - R$ 34,00</p>
                <p>500g - R$ 49,00</p>
              </div>
              <button>
                <div className="botao">
                  <img src="/whatsapp-symbol.svg"></img>
                  &nbsp;&nbsp;Clique aqui pra garantir o seu!
                </div>
              </button>
            </div>
          </div>

          <div className="card">
            <div className="img-card">
              <img src="/ovos2.jpg"></img>
            </div>
            <div className="bunny">
              <h2>Ovo de Páscoa c/ Caneca de Plástico Temática</h2>
              <h6>Pesos &nbsp;e &nbsp;Preços</h6>

              <div className="items">
                <p>120g c/ 3 bombons - R$ 22,00</p>
                <p>250g c/ 6 bombons - R$ 39,00</p>
              </div>
              <button>
                <div className="botao">
                  <img src="/whatsapp-symbol.svg"></img>
                  &nbsp;&nbsp;Clique aqui pra garantir o seu!
                </div>
              </button>
            </div>
          </div>

          <div className="card">
            <div className="img-card">
              <img src="/ovos3.jpg"></img>
            </div>
            <div className="bunny">
              <h2>Ovo de Páscoa Trufado Ganache</h2>
              <h6>Sabores,&nbsp; Pesos &nbsp;e &nbsp;Preços</h6>

              <div className="items">
                <p className="sabores">
                  Limão, maracujá, whisky, conhaque, chocolate branco e
                  chocolate
                </p>
              </div>

              <div className="items">
                <p>250g - R$ 35,00</p>
                <p>350g - R$ 44,00</p>
                <p>500g - R$ 58,00</p>
              </div>
              <button>
                <div className="botao">
                  <img src="/whatsapp-symbol.svg"></img>
                  &nbsp;&nbsp;Clique aqui pra garantir o seu!
                </div>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
