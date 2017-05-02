import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-receptor',
  templateUrl: './receptor.component.html',
  styleUrls: ['./receptor.component.css']
})
export class ReceptorComponent implements OnInit {
  @Input() cuenta: number;
  private segundos: number = 0;
  private mensaje: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      if(propName == 'cuenta') {
        let changedProp = changes[propName];
        this.segundos = changedProp.currentValue;
        if(this.segundos % 2) {
          this.mensaje = '- Es impar!!!!!!'
        }else {
          this.mensaje = '';
        }
      }
    }
  }

}
