import { Container } from "./styles";
export default function Header() {
  return (
    <Container>
      {/* AQUI É O HTML DO HEADER */}
      <div className="header">
        <img src="/logo120120.jpg"></img>

        <a href="/OvosDePascoa">Ovos de Páscoa</a>

        <a href="">Salgados</a>
        <a href="">Doces</a>
        <a href="">Dúvidas Frequentes</a>
      </div>
    </Container>
  );
}
