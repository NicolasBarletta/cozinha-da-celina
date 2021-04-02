import useScreen from "../../hooks/useScreen";
import { Container } from "./styles";
import Burger from "../Burger";
export default function Header() {
  const screen = useScreen().width;
  console.log(screen);
  return (
    <Container>
      {/* AQUI É O HTML DO HEADER */}
      {Number(screen) >= 940 ? (
        <div className="header">
          <img src="/logo120120.jpg"></img>
          <nav>
            <a href="/OvosDePascoa">Ovos de Páscoa</a>
            <a href="/Salgados">Salgados</a>
            <a href="/Doces">Doces</a>
            <a href="/Duvidas">Dúvidas Frequentes</a>
          </nav>
        </div>
      ) : (
        <div className="header">
          <img src="/logo120120.jpg"></img>
          <Burger />
        </div>
      )}
    </Container>
  );
}
