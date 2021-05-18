// import logo from "./logo.svg";

import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from "react-router-dom";
import Detailspage from "./components/Detailspage.jsx";
import Searchpage from "./components/Searchpage.jsx";
import "./App.css";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Searchpage} />
      <Route  path="/:id" component={Detailspage} />
    </BrowserRouter>
  );
}

export default App;
