import { Component, signal, NgZone } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('readingFile');
  storeData: any[] = [];

  constructor(private ngZone: NgZone) {}

  // File upload handler
  OnFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
  this.ngZone.run(() => {
    this.storeData = JSON.parse(reader.result as string);
    console.log(this.storeData)
  });
};


      reader.readAsText(file);
    }
  }
}
