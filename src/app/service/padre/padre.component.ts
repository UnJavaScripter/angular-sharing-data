import { Component, OnInit } from '@angular/core';
import { ElServicioDeLaFamiliaService } from '../el-servicio-de-la-familia.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  private estilosQueDiceElServicio: any;
  
  constructor(private elServicioDeLaFamiliaService: ElServicioDeLaFamiliaService) { }

  ngOnInit() {
    this.elServicioDeLaFamiliaService.estilosDelPadre$.subscribe(estilosDelServicio => {
      this.estilosQueDiceElServicio = estilosDelServicio;
    });
  }

  restablecerEstilos() {
    this.elServicioDeLaFamiliaService.borrarEstilos();
    this.estilosQueDiceElServicio = {};
  }

}
