import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Form from "./pizza";

const App = () => {

  return (
    <section className="homepage">
      <h1>Lambda Eats</h1>
        <BrowserRouter>
          <nav>
            <Link to="/"><button id="home-button">Home</button></Link>
            <Link to="/pizza"><button id="order-pizza">Order</button></Link>
          </nav>
          <Switch>
            <Route path="/pizza" component={Form} />
          </Switch>
        </BrowserRouter>
    </section>
  );
};
export default App;