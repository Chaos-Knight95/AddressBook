import * as React from "react";
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { EmployeeService } from './Service'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FormComponent } from './FormComponent';
import { match } from 'react-router';
import { Employee, Iprops } from "./Model";
import { DetailsComponent } from "./detailsComponent";

export class HomeComponent extends React.Component<Iprops, { employeeList: Array<Employee> }> {
    employeeService: EmployeeService;
    constructor(props: Iprops) {
        super(props);
        this.state = {
            employeeList: []
        }
        this.employeeService = new EmployeeService();
    }

    componentWillMount(): void {
        this.getEmployees();
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.employeeList.map((emp) => {
                            return (
                                <li key={emp.Id} id={emp.Id.toString()}><Link to={`${this.props.match.url}/detail/${emp.Id}`}><span>{emp.Name}</span></Link></li>
                            )
                        })
                    }
                </ul>
                <Route path={`${this.props.match.url}/form`} component={FormComponent} />
                <Route path={`${this.props.match.url}/edit/:id`} component={FormComponent} />
                <Route path={`${this.props.match.url}/detail/:id`} component={DetailsComponent} />
            </div>
        );
    }

    getEmployees = () => {
        this.setState({
            employeeList: this.employeeService.getEmployees()
        });
    }

    componentWillReceiveProps() {
        this.getEmployees();
    }

}