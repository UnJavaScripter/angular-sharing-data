import { Component, OnInit } from '@angular/core';
import { ElServicioDeLaFamiliaService } from '../el-servicio-de-la-familia.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor(private elServicioDeLaFamiliaService: ElServicioDeLaFamiliaService) { }

  ngOnInit() {
  }

  cambiarFondo() {
    console.log('hijo');
    this.elServicioDeLaFamiliaService.aplicarEstilos({"background-color": "peru"});
  }

}
