"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var App_1 = require("./App");
var react_router_dom_1 = require("react-router-dom");
var icons_1 = require("@uifabric/icons");
ReactDOM.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(App_1.App, null)), document.getElementById("app"));
icons_1.initializeIcons();
//# sourceMappingURL=index.js.map