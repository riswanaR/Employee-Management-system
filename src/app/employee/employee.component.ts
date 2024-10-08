import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnChanges, OnInit, OnDestroy, DoCheck {
  @Input() filterName: string = '';
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
    this.filterEmployees();
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.employees = this.employeeService.getEmployee();
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
    this.filterEmployees();
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  filterEmployees() {
    if (this.filterName) {
      this.employees = this.employeeService.getEmployee().filter(emp => emp.employeName === this.filterName);
    } else {
      this.employees = this.employeeService.getEmployee();
    }
  }
}
