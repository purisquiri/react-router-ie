import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import ServiceDetail from "./pages/services/ServiceDetail";
import ServicesList from "./pages/services/ServicesList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/services">
          <ServicesList />
        </Route>
        <Route path="/services/:serviceId">
          <ServiceDetail />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
