import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes',
  templateUrl: './ng-on-changes.component.html',
  styleUrls: ['./ng-on-changes.component.css']
})
export class NgOnChangesComponent implements OnInit {
  private contador: number = 0;
  private interval: any;
  constructor() { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.contador += 1;
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }


}
