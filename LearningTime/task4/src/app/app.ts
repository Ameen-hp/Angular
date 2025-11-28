import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiUrl } from './api-url';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {

  ApiService = inject(ApiUrl);
  StoreApiData: any = [];
  PostForm = new FormGroup({});
  submittedData: any = null;

  ngOnInit(): void {
    this.getApi();
  }

  getApi() {
    this.ApiService.getApiMethod().subscribe((response: any) => {
      this.StoreApiData = response;
      this.buildFormControls();
    });
  }

  buildFormControls() {
    this.StoreApiData.forEach((item: any) => {
      // Create dynamic control using fieldname
      this.PostForm.addControl(
        item.fieldname,
        new FormControl('', item.length ? Validators.maxLength(item.length) : Validators.nullValidator)
      );
    });
  }

  removeSpace(event: KeyboardEvent) {
    if (event.key === ' ') {
      event.preventDefault();
    }
  }

  onSubmit() {
    const payload: any = {};

    this.StoreApiData.forEach((item: any) => {
      const field = item.fieldname;

      // User-entered va
payload[field] = (this.PostForm.value as any)[field];

      // Metadata
      payload[`${field}_type`] = item.fieldtype;
    });

    // Print flattened object in console
    console.log("Flattened Form Data:", payload);

    // Show it on UI
    this.submittedData = payload;
  }
}
