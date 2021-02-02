import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Table from './Table'
import Data from '../data/Data.json'
import Counter from '../Hooks/Counter'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/table">Table</Link>
            </li>
            <li>
              <Link to="/users">Count</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/table">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return "Home";
}

function About() {
  return  <Table infoData={Data.data}/>;
}

function Users() {
  return  <Counter initialCount/> ;
}