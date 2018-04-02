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
var Service_1 = require("./Service");
var react_router_dom_1 = require("react-router-dom");
var FormComponent_1 = require("./FormComponent");
var detailsComponent_1 = require("./detailsComponent");
var HomeComponent = /** @class */ (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.getEmployees = function () {
            _this.setState({
                employeeList: _this.employeeService.getEmployees()
            });
        };
        _this.state = {
            employeeList: []
        };
        _this.employeeService = new Service_1.EmployeeService();
        return _this;
    }
    HomeComponent.prototype.componentWillMount = function () {
        this.getEmployees();
    };
    HomeComponent.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("ul", null, this.state.employeeList.map(function (emp) {
                return (React.createElement("li", { key: emp.Id, id: emp.Id.toString() },
                    React.createElement(react_router_dom_1.Link, { to: _this.props.match.url + "/detail/" + emp.Id },
                        React.createElement("span", null, emp.Name))));
            })),
            React.createElement(react_router_dom_1.Route, { path: this.props.match.url + "/form", component: FormComponent_1.FormComponent }),
            React.createElement(react_router_dom_1.Route, { path: this.props.match.url + "/form/:id", component: FormComponent_1.FormComponent }),
            React.createElement(react_router_dom_1.Route, { path: this.props.match.url + "/detail/:id", component: detailsComponent_1.DetailsComponent })));
    };
    return HomeComponent;
}(React.Component));
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=Home.js.map