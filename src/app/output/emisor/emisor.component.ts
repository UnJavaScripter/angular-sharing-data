import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emisor',
  templateUrl: './emisor.component.html',
  styleUrls: ['./emisor.component.css']
})
export class EmisorComponent implements OnInit {
  private textoCosa: string;
  @Output() onCosaSeleccionada = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  agregar() {
    this.onCosaSeleccionada.emit(this.textoCosa);
  }

}
