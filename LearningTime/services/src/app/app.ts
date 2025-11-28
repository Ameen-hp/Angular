import { Component, Inject, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { UserService } from './user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  userService = inject(UserService)
  ngOnInit(): void {
     this.runApiFunction()
  }
  storeData=""
   runApiFunction() {
          this.userService.getUrl().subscribe((data:any)=> {
              this.storeData = data
              console.log(this.storeData)
          })

   }
}
