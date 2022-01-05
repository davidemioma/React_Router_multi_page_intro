import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

//We use exact because that how react router works it pick the first link it see and render it but if we put exact it reads the full link and renders it.

//We use <Redirect to="the link you want to render"/> at the begining of the page and we must use exact.

//We use <Switch></Switch> when we want to render different pages because when we render a page and we want to render another page inside but the link is in the previous page it will render on the same page.

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
