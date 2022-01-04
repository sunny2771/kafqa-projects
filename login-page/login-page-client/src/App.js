import { useState } from "react";
import "./App.css";
import Home from "./components/Homepage/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [user, setMyuser] = useState({});
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {user && user._id ? <Home /> : <Login setMyuser={setMyuser} />}
          </Route>
          <Route exact path="/login">
            <Login setMyuser={setMyuser} />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
