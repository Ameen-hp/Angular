import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators,FormControlName } from '@angular/forms';
import { ApiUrl } from '../api-url';

@Component({
  selector: 'app-show-backend-data',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './show-backend-data.html',
  styleUrls: ['./show-backend-data.css'],
})
export class ShowBackendData implements OnInit {

  // =======================
  // 1️⃣ REACTIVE FORM
  // =======================
  PostForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', Validators.min(18))
  });

  GetApiFromService = inject(ApiUrl);
  StoreApiData: any = [];

  ngOnInit() {
    this.GetApiFromService.getApiMethod().subscribe((response: any) => {
      this.StoreApiData = response;
      console.log("API Data =", this.StoreApiData);
    });
  }

  onSubmit(){
    console.log(this.PostForm.value)
  }
}
