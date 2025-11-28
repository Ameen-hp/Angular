import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule], // ← add CommonModule here
  templateUrl: './app.html'
})
export class App implements OnInit {

  cities: string[] = [];
  newCity: string = "";

  ngOnInit(): void {
    this.loadCities();
  }

  loadCities() {
    const data = localStorage.getItem("cities");
    this.cities = data ? JSON.parse(data) : [];
  }

  addCity() {
    if (!this.newCity.trim()) return;

    this.cities.push(this.newCity.trim());
    localStorage.setItem("cities", JSON.stringify(this.cities));

    this.newCity = "";
  }
}
