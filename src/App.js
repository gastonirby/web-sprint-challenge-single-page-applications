import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Form from "./pizza";

const App = () => {

  return (
    <header className="homepage">
      <img src="./Assets/Pizza.jpg" alt="pizza img" />
      <h1>Lambda Eats</h1>
        <BrowserRouter>
          <nav>
            <Link to="/"><button id="home-button">Home</button></Link>
            <Link to="/pizza"><button id="order-pizza">Place Your Order</button></Link>
          </nav>
          <Switch>
            <Route path="/pizza" component={Form} />
          </Switch>
        </BrowserRouter>
    </header>
  );
};
export default App;