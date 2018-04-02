import * as React from "react";
import { Employee } from './Model';
import { emit } from "cluster";

export var EmployeeList: Array<Employee> = [
    new Employee({ Id: 1, Name: "mandeep" }), new Employee({ Id: 2, Name: "sai venkat" }), new Employee({ Id: 3, Name: "Mounika" })
];

export class EmployeeService {

    getEmployees = (): Array<Employee> => {
        return EmployeeList;
    }

    getEmployee = (id: number): Employee => {
        var employee: Employee;
        EmployeeList.forEach((emp) => {
            if (emp.Id == id) {
                employee = emp;
            }
        })
        return employee;
    }

    addEmployee = (employee: Employee): Employee => {
        employee.Id = this.generateRandomNumber();
        EmployeeList.push(employee);
        return employee;
    }

    updateEmployee = (employee: Employee): Employee => {
        EmployeeList = [...EmployeeList.map(emp => emp.Id != employee.Id ? emp : employee)];
        return employee;
    }

    deleteEmployee = (id: number): boolean => {
        var empolyeeListLength: number = EmployeeList.length;
        EmployeeList = EmployeeList.filter(emp => emp.Id != id);
        console.log(EmployeeList.length > empolyeeListLength);
        return empolyeeListLength > EmployeeList.length;
    }

    generateRandomNumber = (): number => {
        return Math.floor(Math.random() * 1000);
    }

}