import { match } from 'react-router';
import { History } from 'history';
export class Employee {
    Id: number;
    Name: string;
    Email: string;
    constructor(args: any) {
        this.Id = args.Id;
        this.Name = args.Name;
        this.Email = args.Email;
    }
}

export interface Iprops {
    match: match<any>;
    history: History;
}


export interface IState {
    employee: Employee;
}