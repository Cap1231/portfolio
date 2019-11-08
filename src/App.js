import React, { useEffect, useState, useMemo, useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Design1 from "./components/Design1";
import Design2 from "./components/Design2";
import { UserContext } from "./components/UserContext";
import { login } from "./components/login";

export const NavContext = React.createContext();
// const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    case "open":
      return true;
    case "close":
      return false;
    default:
      return state;
  }
};

const App = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const users = await login();
      console.log("useEffect");
      console.log(users);
      setUser(users);
    };
    console.log("render");
    fetchData();
  }, []);

  console.log(user);

  const valueMemo = useMemo(
    () => ({
      user,
      setUser
    }),
    [user]
  );

  // const [count, dispatch] = useReducer(reducer, initialState);
  const [val, dispatch] = useReducer(reducer, false);
  console.log(val);

  return (
    <Router>
      <NavContext.Provider value={{ val, dispatch }}>
        <Header />
        {val}
        <UserContext.Provider value={valueMemo}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/design1' component={Design1} />
            <Route path='/design2' component={Design2} />
          </Switch>
        </UserContext.Provider>
      </NavContext.Provider>
    </Router>
  );
};

export default App;
