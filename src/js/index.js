import "core-js";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { getRandomNumer } from "./Utils/Utils";

const appElement = document.getElementById("app");

ReactDOM.render(<App count={getRandomNumer(20)} />, appElement);
