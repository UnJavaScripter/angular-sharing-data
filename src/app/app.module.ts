import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { CajaComponent } from './input/caja/caja.component';
import { NgOnChangesComponent } from './ng-on-changes/ng-on-changes.component';
import { ReceptorComponent } from './ng-on-changes/receptor/receptor.component';
import { EmisorComponent } from './output/emisor/emisor.component';
import { OutputComponent } from './output/output.component';
import { VariableLocalComponent } from './variable-local/variable-local.component';
import { ConsoleadorComponent } from './variable-local/consoleador/consoleador.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ElServicioDeLaFamiliaService } from './service/el-servicio-de-la-familia.service';
import { PadreComponent } from './service/padre/padre.component';
import { HijoComponent } from './service/hijo/hijo.component';
import { NietoComponent } from './service/nieto/nieto.component';
// import { BlaComponent } from './input/bla/bla.component';
// import { CarritoComponent } from './input/carrito/carrito.component';
// import { AjaComponent } from './input/aja/aja.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    HomeComponent,
    ServiceComponent,
    CajaComponent,
    NgOnChangesComponent,
    ReceptorComponent,
    EmisorComponent,
    OutputComponent,
    VariableLocalComponent,
    ConsoleadorComponent,
    ViewChildComponent,
    PadreComponent,
    HijoComponent,
    NietoComponent,
    // BlaComponent,
    // CarritoComponent,
    // AjaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [ElServicioDeLaFamiliaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
