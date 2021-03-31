import { Switch, Route } from "react-router-dom";
import Ovo from "./pages/OvosDePascoa";
import Home from "./pages/Home";
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/OvosDePascoa" component={Ovo} />
    </Switch>
  );
}
