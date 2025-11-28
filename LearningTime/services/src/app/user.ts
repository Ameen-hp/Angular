import { Inject, inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
   http = inject(HttpClient)
  apiUrl= "https://jsonplaceholder.typicode.com/users"
  getUrl () {
    return  this.http.get(this.apiUrl)
  }
}
