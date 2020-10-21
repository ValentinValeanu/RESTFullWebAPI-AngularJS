import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-student-form',
  templateUrl: './add-new-student-form.component.html',
  styleUrls: ['./add-new-student-form.component.css']
})
export class AddNewStudentFormComponent implements OnInit {

  model : { name: string, age: number, nationality: string, description: string; picture:string; } = 
          { name: "", age : 0, nationality : "", description : "", picture : "" }

  constructor() { }

  ngOnInit(): void {
  }

  image_uploaded(fileInput: any) : void {

    if (fileInput.target.files && fileInput.target.files[0]) {

      const file = fileInput.target.files[0];
      const reader = new FileReader();

      reader.addEventListener("load", function(e) {

        let res:string = String(e.target.result)

        res = res.substr(res.indexOf(",") + 1)
        
        this.model.picture = res
      }.bind(this));

      reader.readAsDataURL(file);
    } 
  }

  async postData(url = '', data = {}) {
    
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return response.json();
  }

  add_new_student(): void {

    console.log(this.model);

    this.postData("https://localhost:44302/api/test", this.model)
  }

}
