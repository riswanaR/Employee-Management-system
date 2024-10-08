import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Employee } from './models/employee';
import { EmployeeService } from './employee.service';
import { EmployeeComponent } from './employee/employee.component';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newEmployee: Employee = { employeName: '', department: '', salary: 0, gender: '', address: '' };
  employees: Employee[] = [];
  selectedEmployee: string = '';
  showChild: boolean = true;

  constructor(private employeeService: EmployeeService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployee();
  }

  onSubmit(): void {
    this.employeeService.addEmployee(this.newEmployee);
    this.employees = this.employeeService.getEmployee();
    this.newEmployee = { employeName: '', department: '', salary: 0, gender: '', address: '' };
  }

  onEmployeeSelect(): void {
    console.log('Selected employee:', this.selectedEmployee);
  }

  toggleChild(): void {
    this.showChild = !this.showChild;
  }
}
