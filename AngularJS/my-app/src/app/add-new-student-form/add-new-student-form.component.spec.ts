import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewStudentFormComponent } from './add-new-student-form.component';

describe('AddNewStudentFormComponent', () => {
  let component: AddNewStudentFormComponent;
  let fixture: ComponentFixture<AddNewStudentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewStudentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewStudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
