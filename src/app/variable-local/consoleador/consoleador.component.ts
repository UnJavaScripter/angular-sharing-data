import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consoleador',
  templateUrl: './consoleador.component.html',
  styleUrls: ['./consoleador.component.css']
})
export class ConsoleadorComponent implements OnInit {

  constructor() {
    this.log('Hola desde el componente "consoleador"!!!!');
    this.info('Ooootro hola desde el componente "consoleador"');
  }

  ngOnInit() {
  }

  log(txt) {
    console.log(txt);
  }

  info(txt) {
    console.info(txt);
  }

  styled(txt, background, color, size=36) {
    console.log(`%c ${txt}`, `background: ${background}; color: ${color}; font-size: ${size}px;`);
  }

}
