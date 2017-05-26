import { TestBed, inject } from '@angular/core/testing';

import { ElServicioDeLaFamiliaService } from './el-servicio-de-la-familia.service';

describe('ElServicioDeLaFamiliaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElServicioDeLaFamiliaService]
    });
  });

  it('should ...', inject([ElServicioDeLaFamiliaService], (service: ElServicioDeLaFamiliaService) => {
    expect(service).toBeTruthy();
  }));
});
