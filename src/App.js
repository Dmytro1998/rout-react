import React from "react";
import Manatee from "./components/Manatee/Manatee";
import Narwhal from "./components/Narwhal/Narwahl"
import Whale from "./components/Whale/Whale";
import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <nav>
        <ul>
          <li><a href="/manatee">Manatee</a></li>
          <li><a href="/narwhal">Narwhal</a></li>
          <li><a href="/whale">Whale</a></li>
        </ul>
      </nav>
      <BrowserRouter>
      <Route path="/manatee">
            <Manatee />
          </Route>
          <Route path="/narwhal">
            <Narwhal />
          </Route>
          <Route path="/whale">
            <Whale />
          </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
