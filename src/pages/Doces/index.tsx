import { Container } from "./styles";
import Header from "../../components/header";
export default function Doces() {
  return (
    <>
      <Header />

      <Container>
        {/* AQUI É O HTML DO HEADER */}
        <div className="all-cards">
          <div className="card">
            <div className="img-card">
              <img src="/brownie.jpg"></img>
            </div>
            <div className="bunny">
              <h2>Brownies</h2>
              <h6>Quantidade&nbsp;e &nbsp;Preços</h6>

              <div className="items">
                <p>x Brownies - R$ x</p>
                <p>x Brownies - R$ x</p>
                <p>x Brownies - R$ x</p>
                <p>x Brownies - R$ x</p>
                <p>x Brownies - R$ x</p>
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
              <img src="/paodemel.jpg"></img>
            </div>
            <div className="bunny">
              <h2>Pão de Mel</h2>
              <h6>Sabores&nbsp;e &nbsp;Preços</h6>

              <div className="items">
                <p className="sabores">
                  Recheado c/ Doce de Leite, Recheado c/ Chocolate Branco e Sem
                  Recheio
                </p>
              </div>

              <div className="items">
                <p>Recheado c/ Doce de Leite - R$ x</p>
                <p>Recheado c/ Chocolate Branco - R$ x</p>
                <p>Sem Recheio - R$ x</p>
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
              <img src="/trufas.jpg"></img>
            </div>
            <div className="bunny">
              <h2>Trufas</h2>
              <h6>Sabores,&nbsp; Quantidades &nbsp;e &nbsp;Preços</h6>

              <div className="items">
                <p className="sabores">
                  Limão, Maracúja, #1f1b19 Branco, Chocolante Meio Amargo e
                  Chocolate ao Leite
                </p>
              </div>

              <div className="items">
                <p>Unidade - R$ x</p>
                <p>Unidade - R$ x</p>
                <p>Unidade - R$ x</p>
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
              <img src="/bolochocolate.jpg"></img>
            </div>
            <div className="bunny">
              <h2>Bolo de Chocolate</h2>
              <h6>Variedades&nbsp;e &nbsp;Preços</h6>

              <div className="items">
                <p>Com Cobertura (1kg) - R$ x</p>
                <p>Sem Cobertura (1kg) - R$ x</p>
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
              <img src="/bololimao.jpg"></img>
            </div>
            <div className="bunny">
              <h2>Bolo c/ Sabor de Fruta</h2>
              <h6>Sabores,&nbsp; Pesos &nbsp;e &nbsp;Preços</h6>

              <div className="items">
                <p className="sabores">Limão e Laranja</p>
              </div>

              <div className="items">
                <p>Limão (1kg) - R$ x</p>
                <p>Laranja (1kg) - R$ x</p>
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
              <img src="/bologotas.jpg"></img>
            </div>
            <div className="bunny">
              <h2>Pão com Gotas de Chocolate</h2>
              <h6>Pesos &nbsp;e &nbsp;Preços</h6>

              <div className="items">
                <p>1kg - R$ x</p>
                <p>2kg - R$ x</p>
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
              <img src="/boloderolo.jpg"></img>
            </div>
            <div className="bunny">
              <h2>Bolo de Rolo</h2>
              <h6>Sabores, &nbsp;Quantidade&nbsp;e &nbsp;Preços</h6>

              <div className="items">
                <p className="sabores">Goiaba ou Chocolate</p>
              </div>

              <div className="items">
                <p>Bolo de Rolo de Goiaba (1kg) - R$ x</p>
                <p>Bolo de Rolo de Chocolate (1kg) - R$ x</p>
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
              <img src="/balas.jpg"></img>
            </div>
            <div className="bunny">
              <h2>Balas</h2>
              <h6>Sabores,&nbsp; Pesos &nbsp;e &nbsp;Preços</h6>

              <div className="items">
                <p className="sabores">Leite Ninho, Oreo e Paçoca</p>
              </div>

              <div className="items">
                <p>Mini Caixinhas - R$ x</p>
                <p>100g - R$ x</p>
                <p>200g - R$ x</p>
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
              <img src="/roscas.jpg"></img>
            </div>
            <div className="bunny">
              <h2>Rosquinhas Doces</h2>
              <h6>Pesos &nbsp;e &nbsp;Preços</h6>

              <div className="items">
                <p>x Unidades - R$ x</p>
                <p>x Unidades - R$ x</p>
                <p>x Unidades - R$ x</p>
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
              <img src="/paocreme.jpg"></img>
            </div>
            <div className="bunny">
              <h2>Pão com Creme</h2>
              <h6>Pesos &nbsp;e &nbsp;Preços</h6>

              <div className="items">
                <p>x Unidades - R$ x</p>
                <p>x Unidades - R$ x</p>
                <p>x Unidades - R$ x</p>
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
              <img src="/delicia.jpg"></img>
            </div>
            <div className="bunny">
              <h2>Delícia de Uva ou Abacaxi</h2>
              <h6>Pesos &nbsp;e &nbsp;Preços</h6>

              <div className="items">
                <p>x Unidades - R$ x</p>
                <p>x Unidades - R$ x</p>
                <p>x Unidades - R$ x</p>
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
              <img src="/copouva.jpg"></img>
            </div>
            <div className="bunny">
              <h2>Copo de Chocolate com Uva</h2>
              <h6>Pesos &nbsp;e &nbsp;Preços</h6>

              <div className="items">
                <p>x Unidades - R$ x</p>
                <p>x Unidades - R$ x</p>
                <p>x Unidades - R$ x</p>
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
