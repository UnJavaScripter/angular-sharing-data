import { Component, OnInit } from '@angular/core';
import { ElServicioDeLaFamiliaService } from '../el-servicio-de-la-familia.service';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  constructor(private elServicioDeLaFamiliaService: ElServicioDeLaFamiliaService) { }

  ngOnInit() {
  }

  cambiarBorde() {
    console.log('nieto');
    this.elServicioDeLaFamiliaService.aplicarEstilos({"border": "8px dashed aquamarine"});
  }

}
