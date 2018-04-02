import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Employee, Iprops, IState } from "./Model";
import { EmployeeService } from './Service';
import { isNumber } from 'util';

export class DetailsComponent extends React.Component<Iprops, IState>{

    employeeService: EmployeeService;
    id: number;
    constructor(args: Iprops) {
        super(args);
        this.state = {
            employee: new Employee({}),
        }
        this.id = parseInt(this.props.match.params.id);
        this.employeeService = new EmployeeService();
    }

    componentWillMount(): void {
        this.getEmployee(this.id);
    }

    render() {
        return (
            <div>
                <Link to={`/Home/edit/${this.state.employee.Id}`}><span>Edit</span></Link>
                <span onClick={() => { this.deleteEmployee(this.state.employee.Id) }} >delete</span>
                <label>Id</label><span>{this.state.employee.Id}</span>
                <label>Name</label><span>{this.state.employee.Name}</span>
            </div>
        )
    }

    componentWillReceiveProps(newProps: Iprops): void {
        this.id = parseInt(newProps.match.params.id);
        if (Number(this.id) && this.props.match.params.id != newProps.match.params.id) {
            this.getEmployee(this.id);
        }
    }

    getEmployee = (id: number) => {
        this.setState({
            employee: this.employeeService.getEmployee(id),
        });
    }

    deleteEmployee = (id: number) => {
        if (this.employeeService.deleteEmployee(id)) {
            this.props.history.push('/home');
        }
    }

}