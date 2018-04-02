"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("./Model");
exports.EmployeeList = [
    new Model_1.Employee({ Id: 1, Name: "mandeep" }), new Model_1.Employee({ Id: 2, Name: "sai venkat" }), new Model_1.Employee({ Id: 3, Name: "Mounika" })
];
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
        var _this = this;
        this.getEmployees = function () {
            return exports.EmployeeList;
        };
        this.getEmployee = function (id) {
            var employee;
            exports.EmployeeList.forEach(function (emp) {
                if (emp.Id == id) {
                    employee = emp;
                }
            });
            return employee;
        };
        this.addEmployee = function (employee) {
            employee.Id = _this.generateRandomNumber();
            exports.EmployeeList.push(employee);
            return employee;
        };
        this.updateEmployee = function (employee) {
            exports.EmployeeList = exports.EmployeeList.filter(function (emp) { return emp.Id != employee.Id ? emp : employee; });
            return employee;
        };
        this.deleteEmployee = function (id) {
            var empolyeeListLength = exports.EmployeeList.length;
            exports.EmployeeList = exports.EmployeeList.filter(function (emp) { return emp.Id != id; });
            console.log(exports.EmployeeList.length > empolyeeListLength);
            return empolyeeListLength > exports.EmployeeList.length;
        };
        this.generateRandomNumber = function () {
            return Math.floor(Math.random() * 1000);
        };
    }
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=Service.js.map