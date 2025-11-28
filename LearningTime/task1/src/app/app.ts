import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Crudform } from './crudform/crudform';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Crudform], // import the child component
  templateUrl: './app.html'
})
export class App {}
