import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserPipe } from './user-pipe';
import {UpperCasePipe,LowerCasePipe,DatePipe,TitleCasePipe,CurrencyPipe, PercentPipe} from "@angular/common"
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UpperCasePipe,LowerCasePipe,DatePipe,TitleCasePipe,CurrencyPipe,PercentPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  name = "Muhammad Ameen"
  time = 8
  date = 12
  titleCaseName = "Ameen" 

}
