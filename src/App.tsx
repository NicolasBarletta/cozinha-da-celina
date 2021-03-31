import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Routes from "./router";
import { Global } from "./styles/global";
function App() {
  return (
    <BrowserRouter>
      <Global />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
