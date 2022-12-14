import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor(private employeeService: EmployeeService,
            private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
    // this.employeeService.getEmployeesList().subscribe(data => {
    //   this.employees = data;
    // })
    /*
    this.employees = [{
      "id": 1,
      "firstName": "Ramesh",
      "lastName": "Fadatare",
      "emailId": "ramesh@gmail.com"
    },
    {
      "id": 2,
      "firstName": "John",
      "lastName": "Cena",
      "emailId": "cena@gmail.com"
    }
  ];
  */
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    })
  }

  updateEmployee(id: number) {
    this.router.navigate(['/update-employee', id])
  }

  deleteEmployee(id: number) {
    console.log(id)
    this.employeeService.deleteEmployee(id).subscribe({
      next: (v) => {
        console.log(v);
        this.getEmployees();
      }
    })
  }

  viewEmployee(id: number) {
    this.router.navigate(['/employee-details', id]);
  }

}
