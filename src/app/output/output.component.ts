import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  private cosas: any[] = [];
  constructor() { }

  ngOnInit() {
  }

  ON_COOOSA_SELEEEECCCIONADAAAA(cosa) {
    console.log(cosa);
    this.cosas.push(cosa);
  }

}
