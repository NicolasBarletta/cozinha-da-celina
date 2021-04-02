import { Container } from "./styles";
import Header from "../../components/header";
export default function Salgados() {
  return (
    <>
      <Header />

      <Container>
        {/* AQUI É O HTML DO HEADER */}
        <div className="all-cards">
          <div className="card">
            <div className="img-card">
              <img src="/coxinhas.jpg"></img>
            </div>
            <div className="bunny">
              <h2>Coxinhas</h2>
              <h6>Quantidade&nbsp;e &nbsp;Preços</h6>

              <div className="items">
                <p>x Coxinhas - R$ x</p>
                <p>x Coxinhas - R$ x</p>
                <p>x Coxinhas - R$ x</p>
                <p>x Coxinhas - R$ x</p>
                <p>x Coxinhas - R$ x</p>
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
              <img src="/empadao.jpg"></img>
            </div>
            <div className="bunny">
              <h2>Empadão</h2>
              <h6>Sabores,&nbsp; Pesos &nbsp;e &nbsp;Preços</h6>

              <div className="items">
                <p className="sabores">Frango e Camarão</p>
              </div>

              <div className="items">
                <p>Empadão de Camarão 1kg - R$ x</p>
                <p>Empadão de Camarão 2kg - R$ x</p>
                <br></br>
                <p>Empadão de Frango 1kg - R$ x</p>
                <p>Empadão de Frango 2kg - R$ x</p>
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
              <img src="/paorecheado.jpg"></img>
            </div>
            <div className="bunny">
              <h2>Pão Recheado</h2>
              <h6>Sabores,&nbsp; Pesos &nbsp;e &nbsp;Preços</h6>

              <div className="items">
                <p className="sabores">
                  Frango com Catupiry, Queijo e Presunto, Apenas Queijo, Apenas
                  Frango
                </p>
              </div>

              <div className="items">
                <p>300g - R$ 35,00</p>
                <p>300g - R$ 35,00</p>
                <p>300g - R$ 35,00</p>
                <p>300g - R$ 35,00</p>
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
              <img src="/joelho.jpg"></img>
            </div>
            <div className="bunny">
              <h2>Joelho / Bauru</h2>
              <h6>Sabores,&nbsp; Pesos &nbsp;e &nbsp;Preços</h6>

              <div className="items">
                <p>1 Joelho - R$ x</p>
                <p>2 Joelhos - R$ x</p>
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
              <img src="/joelho.jpg"></img>
            </div>
            <div className="bunny">
              <h2>Joelho / Bauru</h2>
              <h6>Sabores,&nbsp; Pesos &nbsp;e &nbsp;Preços</h6>

              <div className="items">
                <p>1 Joelho - R$ x</p>
                <p>2 Joelhos - R$ x</p>
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
