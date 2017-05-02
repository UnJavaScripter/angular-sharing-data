import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  private color1: string = 'salmon';
  private color2: string;

  constructor() { }

  ngOnInit() {
    this.color2 = 'rebeccapurple';
  }

}
