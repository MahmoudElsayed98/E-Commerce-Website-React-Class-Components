import React, { Component } from "react";
import { LanguageContext } from "../../../App";
import CountriesAR from "./CountriesAR";
import CountriesENG from "./CountriesENG";

export class Countries extends Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {(lang) => <>{lang === "Eng" ? <CountriesENG /> : <CountriesAR />}</>}
      </LanguageContext.Consumer>
    );
  }
}

export default Countries;
