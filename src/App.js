import React, { lazy, Suspense } from "react";
import "./App.scss";
//React Router DOM Components
import { Switch, Route, BrowserRouter } from "react-router-dom";
//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// antd css
import "antd/dist/antd.css";
//custom components
import Header from "./Components/Header/Header.component";
import Footer from "./Components/Footer/Footer.component";
//Pages for Apps
const HomePage = lazy(() => import("./Pages/HomePage/HomePage.component"));
const AboutPage = lazy(() => import("./Pages/AboutPage/AboutPage.component"));
const HistoryPage = lazy(() =>
  import("./Pages/HistoryPage/HistoryPage.component")
);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading........</div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/history" component={HistoryPage} />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
