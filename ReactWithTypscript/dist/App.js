"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./Home");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("div", null,
                React.createElement("h1", null, "Address Book"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: '/Home' }, "Home")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: '/Home/form' }, "+Add"))),
                React.createElement("hr", null),
                React.createElement(react_router_dom_1.Switch, null,
                    React.createElement(react_router_dom_1.Route, { path: '/Home', component: Home_1.HomeComponent }),
                    React.createElement(react_router_dom_1.Redirect, { to: '/home', path: '/' })))));
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=App.js.map