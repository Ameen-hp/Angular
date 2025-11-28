import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './input-ouput.html',
  styleUrl: './input-ouput.scss',
})
export class InputOutputComponents {

  // ------------ INPUT EXAMPLE ------------
  @Input() username: string = "Ameen";

  // ------------ OUTPUT EXAMPLE ------------
  @Output() data = new EventEmitter<string>();

  sendBothData() {
    this.data.emit(`My name is ${this.username} and we are developers here`);
  }

  // ------------ TWO-WAY COMMUNICATION ------------
  @Input() value: string = "babu";
  @Output() changeValue = new EventEmitter<string>();

  updateValue(newVal: string) {
    this.value = newVal;
    this.changeValue.emit(newVal);
  }

  // ------------ READ JSON FILE ------------
  labels: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/labels.json').subscribe(res => {
      this.labels = res;
      console.log("Loaded labels:", this.labels);
    });
  }
}
