import { Component, OnInit } from '@angular/core';
import { Student } from '../student/student'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students : Student[]; 

  constructor() { }

  fill_data(data)
  {
    this.students = data;
  }

  ngOnInit(): void {

    fetch("https://localhost:44302/api/test", {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(res => res.json()).then(data => this.fill_data(data))
  }

}
