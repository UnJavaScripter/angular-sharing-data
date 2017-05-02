import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {
  private _color: string;

  @Input() colorSeleccionado: string;

  @Input()
  set color(color: string) {
    console.log(color);
    this._color = color;
  }

  get color(){
    return this._color;
  }


  constructor() { }

  ngOnInit() {
  }

}
