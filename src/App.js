import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import MainPage from "./MainPage";

// import useRandomStore from "./RandomStore/RandomStore";
// import useProductCallStore from "./productCallStore/productCallStore";

function App() {
  // const { count, inc } = useRandomStore();
  // const { productInfos, callInfos } = useProductCallStore();

  return (
    <div>
      <MainPage />
    </div>
  );
}

export default App;
