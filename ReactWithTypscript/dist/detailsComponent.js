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
var Model_1 = require("./Model");
var Service_1 = require("./Service");
var DetailsComponent = /** @class */ (function (_super) {
    __extends(DetailsComponent, _super);
    function DetailsComponent(args) {
        var _this = _super.call(this, args) || this;
        _this.getEmployee = function (id) {
            _this.setState({
                employee: _this.employeeService.getEmployee(id),
            });
        };
        _this.deleteEmployee = function (id) {
            if (_this.employeeService.deleteEmployee(id)) {
                _this.props.history.goBack();
            }
        };
        _this.state = {
            employee: new Model_1.Employee({}),
        };
        _this.id = parseInt(_this.props.match.params.id);
        _this.employeeService = new Service_1.EmployeeService();
        return _this;
    }
    DetailsComponent.prototype.componentWillMount = function () {
        this.getEmployee(this.id);
    };
    DetailsComponent.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(react_router_dom_1.Link, { to: "/Home/form/" + this.state.employee.Id },
                React.createElement("span", null, "Edit")),
            React.createElement("span", { onClick: function () { _this.deleteEmployee(_this.state.employee.Id); } }, "delete"),
            React.createElement("label", null, "Id"),
            React.createElement("span", null, this.state.employee.Id),
            React.createElement("label", null, "Name"),
            React.createElement("span", null, this.state.employee.Name)));
    };
    DetailsComponent.prototype.componentWillReceiveProps = function (newProps) {
        this.id = parseInt(newProps.match.params.id);
        if (Number(this.id)) {
            this.getEmployee(this.id);
        }
    };
    return DetailsComponent;
}(React.Component));
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=detailsComponent.js.map