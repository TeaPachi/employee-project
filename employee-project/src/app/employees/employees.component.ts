import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../list-employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
  
})
export class EmployeesComponent implements OnInit {

//   employee: Employee = {
//   id: 293415667,
//   fname: 'etay',
//   lname: 'malul',
//   dateofbirth: "23/2/2009",
//   salary: "1 shekel",
//   email: '235@gmail.com'
// };
// employee1: Employee = {
//   id: 23468989,
//   fname: 'ritsu',
//   lname: 'succmaballs',
//   dateofbirth: "23/2/2009",
//   salary: "40% of my revenue",
//   email: '235@gmail.com'
// };

employees = EMPLOYEES;
  selectedEmployee?: Employee;
  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

constructor() { }

ngOnInit(): void {
}

}

