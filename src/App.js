import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import "./App.css";
import ImgMediaCard from "./Cards";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <h1> THE MOVIE WARNING DATABASE</h1>
        <SearchBar />

        <div>
          <br />
          <ImgMediaCard />
        </div>
        <div>
          <br />
          <ImgMediaCard />
        </div>
      </>
    );
  }
}
