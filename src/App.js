import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/sign-up">
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
