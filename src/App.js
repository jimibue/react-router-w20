import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { Container, Menu } from "semantic-ui-react";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar";
import Users from "./pages/users/Users";
import User from "./pages/users/User";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:id" component={User} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
