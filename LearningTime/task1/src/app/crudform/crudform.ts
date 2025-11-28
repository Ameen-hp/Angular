import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { response } from 'express';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-crudform',
  imports: [FormsModule],
  templateUrl: './crudform.html',
  styleUrl: './crudform.css',
})
export class Crudform implements OnInit {

 
  http = inject(HttpClient)
  url = "http://DESKTOP-F0RMR14:8090/fields"
     
  data: any[] = []

  ngOnInit(): void {
     this.getData();
  }
  getData(): any {
    this.http.get(this.url).subscribe((response:any)=> {
      this.data = response
      console.log(this.data)
    })
  }


}
