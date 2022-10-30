import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { ListVehicleComponent } from './components/vehicle/list-vehicle/list-vehicle.component';
import { SaveVehicleComponent } from './components/vehicle/save-vehicle/save-vehicle.component';
import { ModVehicleComponent } from './components/vehicle/mod-vehicle/mod-vehicle.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OwnerComponent } from './components/owner/owner.component';
import { ListOwnerComponent } from './components/owner/list-owner/list-owner.component';
import { SaveOwnerComponent } from './components/owner/save-owner/save-owner.component';
import { ModeOwnerComponent } from './components/owner/mode-owner/mode-owner.component';
import { ReportComponent } from './components/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    ListVehicleComponent,
    SaveVehicleComponent,
    ModVehicleComponent,
    NavbarComponent,
    OwnerComponent,
    ListOwnerComponent,
    SaveOwnerComponent,
    ModeOwnerComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
