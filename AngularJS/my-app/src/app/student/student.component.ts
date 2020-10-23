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
  students : Student[] = []; 
  algo : Algo;

  infoStudent : Student = { Name : "", Age : 0, Nationality : "", Description : "", Picture : "", StudentID : 0 };
  mapOfChanges : {} = {};

  constructor() { 

    this.algo = new Algo();
  }

  ngOnInit(): void {

    this.update_list();

    setInterval(() => this.update_list(), 2500);
  }

  update_list()
  {
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
      .then(data => this.update_student_list(data))
  }

  update_student(student : Student)
  {
    let win = document.getElementsByClassName("update_student") as HTMLCollectionOf<HTMLElement>;

    win[0].style.display = "block";

    win[0].animate([
      { opacity: "0" },
      { opacity: "1" }
    ], 500);

    win[0].style.opacity = "1";

    this.infoStudent = student;
    
    this.mapOfChanges[student.StudentID] = true;
  }

  close_update_student()
  {
    let win = document.getElementsByClassName("update_student") as HTMLCollectionOf<HTMLElement>;

    win[0].animate([
      { opacity: "1" },
      { opacity: "0" }
    ], 200);

    win[0].style.opacity = "0";

    setTimeout(() => {

      win[0].style.display = "none";
    }, 200);
  }

  update_student_info()
  {
    this.close_update_student();
  }

  update_student_list(newStudents: Student[])
  {
    if (this.students.length == 0) {

      for (let newStudent of newStudents)
        {
          this.students.push(newStudent);

          this.mapOfChanges[newStudent.StudentID] = false;
        }

      return;
    }

    let list_new_students = [];

    for (let newStudent of newStudents) {

      let searchedStudent = this.students.find((x) => (x.StudentID == newStudent.StudentID));

      if (!(searchedStudent == undefined)) {

        if (this.mapOfChanges[newStudent.StudentID] == true) list_new_students.push(searchedStudent); else
          list_new_students.push(newStudent);

      } else 
        list_new_students.push(newStudent);
    }
    
    this.students = list_new_students;
  }

  filter(list: Student[]): Student[] {
    
    return list.filter(x => x.Age >= this.minimumAge)
               .filter(x => this.algo.pattern_matching(x.Name, this.contStr))
               .sort((x, y) => (x.Age > y.Age ? 1: x.Age < y.Age ? 0 : -1))
  }

  image_uploaded(fileInput: any) : void {

    if (fileInput.target.files && fileInput.target.files[0]) {

      const file = fileInput.target.files[0];
      const reader = new FileReader();

      reader.addEventListener("load", function(e) {

        let res:string = String(e.target.result)

        res = res.substr(res.indexOf(",") + 1)
        
        this.infoStudent.Picture = res
      }.bind(this));

      reader.readAsDataURL(file);
    } 
  }

}
