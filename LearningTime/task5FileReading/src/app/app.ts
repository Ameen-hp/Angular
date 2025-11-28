import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App{
  jsonDataArray: any[] = []
  onFileReader(event:any) {
    const file: File =  event.target.files[0]
    if(!file) {
      console.log("no file here");
      return
    }
  const   reader =  new FileReader()
  reader.readAsText(file)

  reader.onload = ()=> {
     const content = reader.result as string;
  const jsonData = JSON.parse(content);
   this.jsonDataArray.push(jsonData)
   console.log(this.jsonDataArray)
  }

  reader.onerror = (err) => {
       console.log(err)
  }

  }
}
