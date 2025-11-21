import { Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Teacer } from './teacer/teacer';
import { Student } from './student/student';
import { Admin } from './admin/admin';
@Component({
  selector: 'app-root',
  imports: [FormsModule,Teacer,Student,Admin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   isUserLoggedIn = signal(true);
    
   fruitsArray = ["banana","apple","angoor","chaeen"]

   marks = 60
    selectCity = signal("not Selected")
    OnSelectOption(event:any) {
        this.selectCity.set(event.target.value)
        console.log(this.selectCity())
    }


selectComponent = "Student" 


departments = [
  {
    name: "Engineering",
    employees: [
      { name: "Ali", position: "Frontend Developer" },
      { name: "Sara", position: "Backend Developer" },
      { name: "Hassan", position: "DevOps Engineer" }
    ]
  },
  {
    name: "Marketing",
    employees: [
      { name: "Aisha", position: "Social Media Manager" },
      { name: "Zain", position: "Content Writer" }
    ]
  },
  {
    name: "Human Resources",
    employees: [
      { name: "Khadija", position: "HR Manager" },
      { name: "Bilal", position: "Recruiter" }
    ]
  }
];

  }