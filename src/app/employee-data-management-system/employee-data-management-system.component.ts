import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-data-management-system',
  templateUrl: './employee-data-management-system.component.html',
  styleUrls: ['./employee-data-management-system.component.css'],
})
export class EmployeeDataManagementSystemComponent implements OnInit {
  url: string;

  constructor() {}

  ngOnInit() {
    this.url = 'https://employee-data-management-e025e.firebaseapp.com/';
  }
}
