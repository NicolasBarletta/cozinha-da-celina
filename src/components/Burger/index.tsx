import { useState } from "react";

import { IconClose, IconMenu, Menu } from "./styles";
export default function Burger() {
  const [isActive, setIsActive] = useState(false);
  function handleMenu() {
    return setIsActive(!isActive);
  }
  return (
    <Menu>
      {isActive ? (
        <div className="active">
          <div className="close">
            <IconClose onClick={handleMenu} />
          </div>
          <div className="links">
            <a href="/OvosDePascoa">Ovos de Páscoa</a>
            <a href="/Salgados">Salgados</a>
            <a href="">Doces</a>
            <a href="">Dúvidas Frequentes</a>
          </div>
        </div>
      ) : (
        <IconMenu onClick={handleMenu} />
      )}
    </Menu>
  );
}
