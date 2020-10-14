import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var data = fetch("https://localhost:44302/api/test", {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(res => res.json()).then(data => console.log(data))
  }

}
