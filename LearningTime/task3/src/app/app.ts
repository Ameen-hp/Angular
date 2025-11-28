import { Component, Inject, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { api } from './enviroment';
import { FormsModule, ɵNgNoValidate } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Country {
  purposecode: string;
  codeid: string;
  codevalue: string;
  codedescription: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  getApiData: any [] = []
   private http = inject(HttpClient);
  getApi: string = api.apiUrl;

ngOnInit(): void {
  console.log('App initialized')
  this.getData();
}
 selectedCode: string = '';
getData() {
  console.log('Inside getData'); 
  this.http.get(this.getApi).subscribe((Response:any) => {
    this.getApiData = Response;
    console.log('Data:', this.getApiData); 
  }, error => {
    console.log('HTTP Error:', error); 
  });
}

onSelectChange(event: any) {
    this.selectedCode = event.target.value;
  }
}
