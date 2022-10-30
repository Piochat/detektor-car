import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeOwnerComponent } from './components/owner/mode-owner/mode-owner.component';
import { OwnerComponent } from './components/owner/owner.component';
import { SaveOwnerComponent } from './components/owner/save-owner/save-owner.component';
import { ReportComponent } from './components/report/report.component';
import { ModVehicleComponent } from './components/vehicle/mod-vehicle/mod-vehicle.component';
import { SaveVehicleComponent } from './components/vehicle/save-vehicle/save-vehicle.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';

const routes: Routes = [
  { path: "vehicle", component: VehicleComponent },
  { path: "vehicle/:id", component: ModVehicleComponent },
  { path: "vehicle-save", component: SaveVehicleComponent },
  { path: 'owner', component: OwnerComponent },
  { path: 'owner/:id', component: ModeOwnerComponent },
  { path: 'owner-save', component: SaveOwnerComponent },
  { path: '', component: ReportComponent },
  { path: 'report/:n', component: ReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
