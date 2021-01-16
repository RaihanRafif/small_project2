import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/page/home";
import ItemMenu from "./pages/page/item-menu";
import login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Store from "./pages/page/item-store";
import { Provider } from "react-redux";
import {store} from './state/store.js'
import Cart from './pages/page/cart'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={ItemMenu} path="/item-menu" />
          <Route component={login} path="/login" />
          <Route component={Register} path="/register" />
          <Route component={Store} path="/item-store" />
          <Route component={Cart} path="/cart"/>
          {/* <ProtectedRoute component={AddTodoPage} path="/add" /> */}
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
