import { Component, OnInit, PipeTransform } from '@angular/core';
import { Student } from '../student/student'

import { Algo } from '../../algorithms/algo'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  contStr : string = "";
  minimumAge : number = 0;
  students : Student[]; 
  algo : Algo;

  constructor() { 

    this.algo = new Algo();
  }

  ngOnInit(): void {

    fetch("https://localhost:44302/api/test", {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(res => {
      if (res.ok)
        return res.json();
      else 
        return null
    })
    .then(data => (this.students = data))
  }

  filter(list: Student[]): Student[] {
    
    return list.filter(x => x.Age >= this.minimumAge)
               .filter(x => this.algo.pattern_matching(x.Name, this.contStr))
               .sort((x, y) => (x.Age > y.Age ? 1: x.Age < y.Age ? 0 : -1))
  }

}
