import './App.css';
import { Provider } from "react-redux";
import { ConfigureStore } from "./store/configureStore";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import ReactReduxTest from './pages/ReactReduxTest';
const appStore = ConfigureStore();

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/sign-up">
            <Signup />
          </Route>

          <Route exact path="/react-redux-test">
              <ReactReduxTest />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
