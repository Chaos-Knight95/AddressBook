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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var TextField_1 = require("office-ui-fabric-react/lib/TextField");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Model_1 = require("./Model");
var Service_1 = require("./Service");
var FormComponent = /** @class */ (function (_super) {
    __extends(FormComponent, _super);
    function FormComponent(args) {
        var _this = _super.call(this, args) || this;
        _this.cancel = function () {
            _this.props.history.goBack();
        };
        _this.onchange = function (event, name) {
            _this.setState({
                employee: __assign({}, _this.state.employee, (_a = {}, _a[name] = event, _a))
            });
            var _a;
        };
        _this.addEmployee = function () {
            _this.employeeService.addEmployee(_this.state.employee);
            _this.props.history.goBack();
        };
        _this.getemployee = function (id) {
            _this.setState({
                employee: _this.employeeService.getEmployee(id),
            });
        };
        _this.employeeService = new Service_1.EmployeeService();
        _this.id = parseInt(_this.props.match.params.id);
        if (Number(_this.id)) {
            _this.getemployee(_this.id);
        }
        else {
            _this.state = {
                employee: new Model_1.Employee({}),
            };
        }
        return _this;
    }
    FormComponent.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(TextField_1.TextField, { label: 'Name', value: this.state.employee.Name, onChanged: function (event) { _this.onchange(event, "Name"); } }),
            React.createElement(Button_1.DefaultButton, { primary: true, text: 'Add', onClick: this.addEmployee }),
            React.createElement(Button_1.DefaultButton, { text: 'Cancel', onClick: this.cancel })));
    };
    return FormComponent;
}(React.Component));
exports.FormComponent = FormComponent;
//# sourceMappingURL=FormComponent.js.map