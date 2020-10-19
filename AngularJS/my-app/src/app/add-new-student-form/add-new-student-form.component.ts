import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-student-form',
  templateUrl: './add-new-student-form.component.html',
  styleUrls: ['./add-new-student-form.component.css']
})
export class AddNewStudentFormComponent implements OnInit {

  model : { name: string, age: number, nationality: string, description: string; } = 
          { name: "", age : 0, nationality : "", description : "" }

  constructor() { }

  ngOnInit(): void {
  }

}
