import * as React from "react";
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Redirect } from "react-router";
import { match } from 'react-router';
import { Employee, Iprops, IState } from "./Model";
import { EmployeeService } from './Service';


export class FormComponent extends React.Component<Iprops, IState> {

    employeeService: EmployeeService;
    id: number;

    constructor(args: Iprops) {
        super(args);
        this.employeeService = new EmployeeService();
        console.log(this.props);
        this.id = parseInt(this.props.match.params.id);
        this.state = {
            employee: new Employee({}),
        }
    }

    componentWillMount() {
        if (Number(this.id)) {
            this.getemployee(this.id)
        }
    }

    render() {
        return (
            <div>
                <TextField
                    label='Name'
                    value={this.state.employee.Name}
                    onChanged={(event) => { this.onchange(event, "Name") }}
                />
                {Number(this.id) ?
                    <DefaultButton
                        primary={true}
                        text='Update'
                        onClick={this.updateEmployee}
                    />
                    :
                    <DefaultButton
                        primary={true}
                        text='Add'
                        onClick={this.addEmployee}
                    />
                }
                <DefaultButton
                    text='Cancel'
                    onClick={this.cancel}
                />
            </div>
        )
    }

    cancel = () => {
        this.props.history.push('/home');
    }

    onchange = (event: string, name: string) => {
        this.setState({
            employee: { ...this.state.employee, [name]: event }
        })
    }

    addEmployee = () => {
        this.employeeService.addEmployee(this.state.employee);
        this.props.history.push('/home');
    }

    getemployee = (id: number) => {
        this.setState({
            employee: this.employeeService.getEmployee(id),
        })
    }

    updateEmployee = () => {
        this.employeeService.updateEmployee(this.state.employee);
        this.props.history.push('/home');
    }

}