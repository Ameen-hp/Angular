import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Country {
  code: string;
  name: string;
}

interface Bank {
  name: string;
  branch: string;
  swift: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './app.html'
})
export class App implements OnInit {

  countries: Country[] = [];
  selectedCountryCode: string = "";
  banks: Bank[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCountries();
  }

  // Load countries from backend
  loadCountries() {
    this.http.get<Country[]>('/api/countries').subscribe({
      next: data => this.countries = data,
      error: err => console.error('Error loading countries:', err)
    });
  }

  // Load banks based on selected country
  loadBanks() {
    if (!this.selectedCountryCode) return;

    this.http.get<Bank[]>(`/api/banks/${this.selectedCountryCode}`).subscribe({
      next: data => this.banks = data,
      error: err => console.error('Error loading banks:', err)
    });
  }
}
