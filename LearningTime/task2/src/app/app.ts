import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from './enviroment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  inputValue: string = '';
  selectOptions: string[] = [];

  // ✅ NEW Angular injection style  
  private http = inject(HttpClient);

  urlData = apiUrl.url;
  apiData: any[] = []
  ngOnInit(): void {
    this.getData();
  }

  addOption() {
    if (this.inputValue.trim()) {
      this.selectOptions.push(this.inputValue.trim());
      this.inputValue = ''; // Clear input
    }
  }

  getData() {
    this.http.get(this.urlData).subscribe({
      next: (response:any) => this.apiData  =  response,
      error: err => console.error("Error::", err)
    });
  }
}
