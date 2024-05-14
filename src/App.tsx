import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import AppTitle from "./components/AppTitle";

function App() {
  return (
    <div className="container">
      <AppTitle title="Thomas Cionek" />
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
