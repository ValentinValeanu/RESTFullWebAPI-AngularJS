import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.css']
})
export class AddNewStudentComponent implements OnInit {

  toggled : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle()
  {
    if (this.toggled) {

      let pannel = document.getElementsByClassName("main") as HTMLCollectionOf<HTMLElement>;
      let pannel_arr = document.getElementsByClassName("arrow") as HTMLCollectionOf<HTMLElement>;

      setTimeout(function() {

        pannel[0].style.animation = "toggle_in 1s ease";
        pannel[0].style.width = "70px"
        pannel_arr[0].style.animation = "rotate_arr_clock 1s ease";
        pannel_arr[0].style.transform = "rotate(180deg)";
        pannel_arr[0].style.right = "20px"
      }, 0);

    } else {

      let pannel = document.getElementsByClassName("main") as HTMLCollectionOf<HTMLElement>;
      let pannel_arr = document.getElementsByClassName("arrow") as HTMLCollectionOf<HTMLElement>;

      setTimeout(function() {

        pannel[0].style.animation = "toggle_out 1s ease";
        pannel[0].style.width = "400px"
        pannel_arr[0].style.animation = "rotate_arr_c_clock 1s ease";
        pannel_arr[0].style.transform = "rotate(0deg)";
        pannel_arr[0].style.right = "340px"
      }, 0);
    }

    this.toggled = !this.toggled;
  }

}
