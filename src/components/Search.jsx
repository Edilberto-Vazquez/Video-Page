import React from "react";
import classNames from "classnames";
import "../assets/styles/components/Search.scss";

const Search = ({ isHome }) => {
  const mainTitle = "¿Qué quieres ver hoy?";
  const inputStyle = classNames("input", {
    isHome,
  });
  return (
    <section className="main">
      <h2 className="main__title">{mainTitle}</h2>
      <input type="text" className={inputStyle} placeholder="Buscar..." />
    </section>
  );
};

export default Search;
