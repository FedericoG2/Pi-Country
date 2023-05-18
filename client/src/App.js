import "./App.css";
import { Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Home, Landing, Form, Detail } from "./views";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/form" component={Form} />
    </div>
  );
}

export default App;
