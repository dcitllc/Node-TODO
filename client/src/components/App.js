import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopNav from "./TopNav";
import ItemsBody from "./ItemsBody";
import SingleItem from "./SingleItem";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <TopNav />
          <div className="container">
            <Switch>
              <Route path="/:id" component={SingleItem} />
              <Route exact path="/" component={ItemsBody} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
