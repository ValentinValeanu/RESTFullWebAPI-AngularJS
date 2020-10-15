import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNewStudentFormComponent } from './add-new-student-form/add-new-student-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AddNewStudentComponent,
    AddNewStudentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
