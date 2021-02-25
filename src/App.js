import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Canvas from "./Components/Canvas/Canvas";
import data from "./Components/data";
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
              <Link to="/play">Play</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/play">
            <Play />
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
  return <h2>Home</h2>;
}

function Play() {
  return (
    <div>
      <h2>Play Breakout</h2>
      <Canvas data={data} />
    </div>
  );
}

function Users() {
  return <h2>Users</h2>;
}
