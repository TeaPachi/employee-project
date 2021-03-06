import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
//import { EMPLOYEES } from '../list-employees';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
  
})
export class EmployeesComponent implements OnInit {
employees: Employee[] = [];

selectedEmployee?: Employee;
onSelect(employee: Employee): void {
  this.selectedEmployee = employee;
  this.messageService.add(`Employee Component: Selected employee id=${employee.id}`);
}

constructor(
  private employeeService: EmployeeService,
  private messageService: MessageService,
  private route: ActivatedRoute,
  private location: Location
) {}

getEmployees(): void {
  // this.employees = this.employeeService.getEmployees();
  this.employeeService.getEmployees()
  .subscribe(employees => this.employees = employees);
}

ngOnInit(): void {
  this.getEmployees();
}

}

