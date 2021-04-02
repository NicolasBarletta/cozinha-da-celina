import { Switch, Route } from "react-router-dom";
import Ovo from "./pages/OvosDePascoa";
import Home from "./pages/Home";
import Salgados from "./pages/Salgados";
import Doces from "./pages/Doces";
import Duvidas from "./pages/Duvidas";
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/OvosDePascoa" component={Ovo} />
      <Route path="/Salgados" component={Salgados} />
      <Route path="/Doces" component={Doces} />
      <Route path="/Duvidas" component={Duvidas} />
    </Switch>
  );
}
