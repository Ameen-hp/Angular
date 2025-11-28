import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {

   myform = new FormGroup ({
      name: new FormControl(""),
      lastName:new FormControl("") 
   }) 
   submit() {
    console.log(this.myform.value)
   }
}
