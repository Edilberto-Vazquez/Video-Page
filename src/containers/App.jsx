import React from "react";
import "../assets/styles/App.scss";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Corousel from "../components/Carousel";
import CorouselItem from "../components/CorouselItem";
import Footer from "../components/Footer";

const App = () => (
  <div className="App">
    <Header />
    <Search />
    <Categories title={"Mi lista"}>
      <Corousel>
        <CorouselItem />
        <CorouselItem />
      </Corousel>
    </Categories>
    <Categories title={"Tendencias"}>
      <Corousel>
        <CorouselItem />
        <CorouselItem />
      </Corousel>
    </Categories>
    <Categories title={"Originales de PlatziVideo"}>
      <Corousel>
        <CorouselItem />
        <CorouselItem />
      </Corousel>
    </Categories>
    <Footer />
  </div>
);

export default App;
