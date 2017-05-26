import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ElServicioDeLaFamiliaService {

  private estilosSource = new Subject<string>();

  estilosDelPadre$ = this.estilosSource.asObservable();

  estilosActuales: any = {};

  constructor() { }

  aplicarEstilos(estilosObj) {
      this.estilosActuales = Object.assign(this.estilosActuales, estilosObj);

      this.estilosSource.next(this.estilosActuales);
  }

  borrarEstilos() {
    this.estilosActuales = {};
    this.estilosSource.next(this.estilosActuales);
  }

}
