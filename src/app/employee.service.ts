import { Injectable } from '@angular/core';
import { Employee } from './models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[]=[{
    "employeName": "Nicol",
    "department": "Product Management",
    "salary": 39286,
    "gender": "Male",
    "address": "9th Floor"
  }, {
    "employeName": "Masha",
    "department": "Marketing",
    "salary": 31512,
    "gender": "Female",
    "address": "Apt 1523"
  }, {
    "employeName": "Rafferty",
    "department": "Engineering",
    "salary": 46066,
    "gender": "Male",
    "address": "Suite 17"
  }, {
    "employeName": "Templeton",
    "department": "Product Management",
    "salary": 17915,
    "gender": "Male",
    "address": "Room 1144"
  }, {
    "employeName": "Wanids",
    "department": "Research and Development",
    "salary": 37334,
    "gender": "Female",
    "address": "19th Floor"
  }, {
    "employeName": "Geoff",
    "department": "Research and Development",
    "salary": 22440,
    "gender": "Male",
    "address": "Apt 901"
  }, {
    "employeName": "Heida",
    "department": "Marketing",
    "salary": 35138,
    "gender": "Female",
    "address": "Room 784"
  }, {
    "employeName": "Niki",
    "department": "Training",
    "salary": 23359,
    "gender": "Female",
    "address": "19th Floor"
  }, {
    "employeName": "Cynthie",
    "department": "Legal",
    "salary": 17746,
    "gender": "Female",
    "address": "Suite 50"
  }, {
    "employeName": "April",
    "department": "Legal",
    "salary": 36588,
    "gender": "Female",
    "address": "10th Floor"
  }]
  
  constructor() { }

  getEmployee(){
    return this.employees;
  }

  addEmployee(employee : Employee){
    this.employees.push(employee);
  }
}
