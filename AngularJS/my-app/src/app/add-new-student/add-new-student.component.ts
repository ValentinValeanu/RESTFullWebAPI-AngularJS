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
    let items = document.getElementsByClassName("item") as HTMLCollectionOf<HTMLElement>;
    let pannel = document.getElementsByClassName("main") as HTMLCollectionOf<HTMLElement>;
    let shows = document.getElementsByClassName("to_show") as HTMLCollectionOf<HTMLElement>;
    let pannel_arr = document.getElementsByClassName("arrow") as HTMLCollectionOf<HTMLElement>;

    if (this.toggled) {

      for (var i = 0; i < items.length; i++) {
        items[i].animate([
          { right: "0px" },
          { right: "-400px"}
        ], {
          duration: 500 + i * 200,
          easing: "ease"
        })

        items[i].style.right = "-400px";
      }

      for (var i = 0; i < shows.length; i++) {
        shows[i].animate([
          { opacity: "1" },
          { opacity: "0" }
        ], {
          duration: 600,
          easing: "ease"
        })

        shows[i].style.opacity = "0";
      }

      // animate
      shows[0].style.animation = "change_op_out 0.5s ease";
      shows[0].style.opacity = "0";
      pannel[0].style.animation = "toggle_in 1s ease";
      pannel[0].style.width = "70px"
      pannel_arr[0].style.animation = "rotate_arr_clock 1s ease";
      pannel_arr[0].style.transform = "rotate(180deg)";
      pannel_arr[0].style.right = "20px"

    } else {

      for (var i = 0; i < items.length; i++) {
        items[i].animate([
          { right: "-400px" },
          { right: "0px"}
        ], {
          duration: 500 + i * 200,
          easing: "ease"
        })

        items[i].style.right = "0px";
      }

      for (var i = 0; i < shows.length; i++) {
        shows[i].animate([
          { opacity: "0" },
          { opacity: "1" }
        ], {
          duration: 600,
          easing: "ease"
        })

        shows[i].style.opacity = "1";
      }

      // animate
      pannel[0].style.animation = "toggle_out 1s ease";
      pannel[0].style.width = "400px"
      pannel_arr[0].style.animation = "rotate_arr_c_clock 1s ease";
      pannel_arr[0].style.transform = "rotate(0deg)";
      pannel_arr[0].style.right = "340px"
    }

    this.toggled = !this.toggled;
  }

}
