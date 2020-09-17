import React, { Suspense, lazy } from "react";
import "./App.scss";
//React Router DOM Components
import { Switch, Route, BrowserRouter } from "react-router-dom";
//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
//fontawesome css
import "./assets/fa5/css/fontawesome.min.css";
// antd css
import "antd/dist/antd.css";
//custom components
import Header from "./Components/Header/Header.component";
import Footer from "./Components/Footer/Footer.component";
//redux logic code
import { connect } from "react-redux";
//Action to get categories + products
import { getCategories } from "./redux/categories/categories.actions";
import { getProducts } from "./redux/products/products.actions";
//selector for selecting categories + products and function from reselect
import { createStructuredSelector } from "reselect";
import { categoriesSelector } from "./redux/categories/categories.selectors";
import { productsSelector } from "./redux/products/products.selectors";
//Authentication
import { loadUser } from "./redux/users/users.actions";
// import setAuthToken from "./util/setAuthToken";
import PrivateRoute from "./util/PrivateRoute";
//Loader for fallback
import Loader from "./Components/Loader/Loader.component";
// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

//ScrollToTop for scrolling to top when route changes
import ScrollToTop from "./util/ScrollToTop.js";
//Pages for App
// import HomePage from "./Pages/HomePage/HomePage.component";
// import AboutPage from "./Pages/AboutPage/AboutPage.component";
// import HistoryPage from "./Pages/HistoryPage/HistoryPage.component";
// import CategoriesPage from "./Pages/CategoriesPage/CategoriesPage.component";
// import CategoriesProductsPage from "./Pages/CategoriesProductsPage/CategoriesProductsPage.component";
// import ProductPage from "./Pages/ProductPage/ProductPage.component";
// import LoginPage from "./Pages/LoginPage/LoginPage.component";
//AdminPanel
import AdminPanel from "./Pages/AdminPanel/AdminPanel.component";

const HomePage = lazy(() =>
  fakeDelay(1000)(import("./Pages/HomePage/HomePage.component"))
);
const AboutPage = lazy(() =>
  fakeDelay(1000)(import("./Pages/AboutPage/AboutPage.component"))
);
const HistoryPage = lazy(() =>
  fakeDelay(1000)(import("./Pages/HistoryPage/HistoryPage.component"))
);
const CategoriesPage = lazy(() =>
  fakeDelay(1000)(import("./Pages/CategoriesPage/CategoriesPage.component"))
);
const CategoriesProductsPage = lazy(() =>
  fakeDelay(1000)(
    import("./Pages/CategoriesProductsPage/CategoriesProductsPage.component")
  )
);
const ProductPage = lazy(() =>
  fakeDelay(1000)(import("./Pages/ProductPage/ProductPage.component"))
);
const LoginPage = lazy(() =>
  fakeDelay(1000)(import("./Pages/LoginPage/LoginPage.component"))
);
const DistributionshipPage = lazy(() =>
  fakeDelay(1000)(
    import("./Pages/DistributionshipPage/DistributionshipPage.component")
  )
);
// add some async delay for illustration purposes
function fakeDelay(ms) {
  return (promise) =>
    promise.then(
      (data) =>
        new Promise((resolve) => {
          setTimeout(() => resolve(data), ms);
        })
    );
}
class App extends React.Component {
  componentDidMount() {
    const { getCategories, getProducts, loadUser } = this.props;
    loadUser();
    getCategories();
    getProducts();
  }
  render() {
    const { categories, products } = this.props;
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="App">
            <Header />
            <Suspense
              fallback={
                <>
                  <Loader />
                </>
              }
            >
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/history" component={HistoryPage} />
                <Route
                  exact
                  path="/products"
                  render={(props) => (
                    <CategoriesPage {...props} categories={categories} />
                  )}
                />
                <Route
                  exact
                  path="/products/:categoryUrlSlug"
                  render={(props) => (
                    <CategoriesProductsPage
                      {...props}
                      categories={categories}
                      products={products}
                    />
                  )}
                />
                <Route
                  exact
                  path="/product/:productUrlSlug"
                  render={(props) => (
                    <ProductPage {...props} products={products} />
                  )}
                />
                <Route exact path="/login" component={LoginPage} />
                <Route
                  exact
                  path="/distributionship"
                  component={DistributionshipPage}
                />
                <PrivateRoute path="/admin" component={AdminPanel} />
              </Switch>
            </Suspense>
            <Footer />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  categories: categoriesSelector,
  products: productsSelector,
});

export default connect(mapStateToProps, {
  getCategories,
  getProducts,
  loadUser,
})(App);
