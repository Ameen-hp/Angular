import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiUrl {
  http = inject(HttpClient)
  url = "http://DESKTOP-F0RMR14:8090/fields"

  getApiMethod() { 
     return this.http.get(this.url)
  }
  postApiMethod(data:any) {
    return this.http.post(this.url,data)
     console.log(data)
  }
}
