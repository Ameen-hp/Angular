// src/app/ap-services/api.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms'; 
@Injectable({
  providedIn: 'root' // makes it globally available
})
export class Service {
  private url = "https://jsonplaceholder.typicode.com/users";
  private http = inject(HttpClient);
 

  Data: any[] = [] 



}
