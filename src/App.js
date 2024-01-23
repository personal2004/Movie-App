import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./component/Header/Header";
import { Home } from "./component/Home/Home";
import { MovieDetails } from "./component/MovieDetails/MovieDetails";
import { PageNotFound } from "./component/PageNotFound/PageNotFound";
import { Footer } from "./component/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/movie/:imdbID" Component={MovieDetails} />
          <Route Component={PageNotFound} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
