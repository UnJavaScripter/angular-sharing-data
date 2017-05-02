import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsoleadorComponent } from '../variable-local/consoleador/consoleador.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {
  @ViewChild(ConsoleadorComponent) private consoleador: ConsoleadorComponent;

  constructor() { }

  ngOnInit() {
    this.consoleador.styled('jojojojojojojojojojojojojojojojojojojojojojojojojojojojojojojojojojo', 'greenyellow', 'gray');
    this.consoleador.styled('llamando a consoleador directamente desde la clase del padre', 'slategray', 'white', 40);
    this.consoleador.styled('jojojojojojojojojojojojojojojojojojojojojojojojojojojojojojojojojojo', 'greenyellow', 'gray');
  }

}
