import { Container } from "./styles";
import Header from "../../components/header";
export default function Duvidas() {
  return (
    <>
      <Header />

      <Container>
        {/* AQUI É O HTML DO HEADER */}
        <div className="container">
          <div className="content">
            <h2> Como faço para receber? </h2>
            <p>
              Entregamos para (Poá, Suzano, Itaquaquecetuba e Mogi das Cruzes.)*
              e em breve nas estações da CPTM.
            </p>
            <p className="asterisco"> *Consulte o valor do Frete</p>
          </div>

          <div className="content">
            <h2> Com quais produtos você trabalha? </h2>
            <p>
              Sempre com os produtos de melhor qualidade para ter uma ótima
              experiência, caso ainda tenha dúvidas em relação a isso, clique
              nas fotos do menu.
            </p>
          </div>

          <div className="content">
            <h2> Como fico por dentro das novidades? </h2>
            <p>
              Acompanhando as postagens do Instagram, Facebook e assistindo os
              vídeos do Youtube.
            </p>
          </div>

          <div className="content">
            <h2> Consigo alguma promoção com a quantidade de pedidos? </h2>
            <p>
              Não possuímos nenhum tipo de desconto fixo, porém, pode tentar
              negociar via Whatsapp.
            </p>
          </div>

          <div className="redes-sociais">
            <h2>Redes Sociais</h2>
            <div className="links">
              <a href="">
                <img src="/whatsapp-symbol.svg"></img>
              </a>
              <a href="">
                <img src="/youtube-icon (2).svg"></img>
              </a>
              <a href="">
                <img src="/facebook-3 (1).svg"></img>
              </a>
              <a href="">
                <img src="/instagram-2-1 (1).svg"></img>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
