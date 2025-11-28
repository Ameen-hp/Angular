import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputOutputComponents} from './input-ouput/input-ouput';
// import { Input } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [InputOutputComponents],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // protected readonly title = signal('inputAndOutput');
  // input code 
  //  @Input() ParentName : any  [] = [{name:"Ameen",Id:2023},{name:"babu",id:2021212}]

  // output code here 

//   getNotification(data:String) {
//       alert(data)
//   }

//   getData(data: {name:String,id:number}) {
//        alert("name is "+data.name+ " id is "+data.id)
//   }
// getName(name:String) {
//    alert(name)
// }

// combinig input and ouput 

getBothData(getData:String){
  alert(getData)
}
}
