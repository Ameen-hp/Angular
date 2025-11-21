import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   submit(getData:any) {
       if(getData.valid) {
        console.log("for submitted successefully")
       }else {
        console.log("form is invalid")
       }
   }
}
