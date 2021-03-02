import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Canvas from "./Components/Canvas/Canvas";
import data from "./Components/data";

export default function App() {
  return <Canvas data={data} />;
}
