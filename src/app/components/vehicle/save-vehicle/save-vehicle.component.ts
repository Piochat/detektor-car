import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from 'src/app/services/vehicle.service';
import { ToastrService } from 'ngx-toastr'
import { VehicleDto } from "src/app/models/vehicle";

@Component({
  selector: 'app-save-vehicle',
  templateUrl: './save-vehicle.component.html',
  styleUrls: ['./save-vehicle.component.css']
})
export class SaveVehicleComponent implements OnInit {

  plate: string = '';
  brand: string = '';
  vin: string = '';
  line: string = '';
  color: string = '';
  typeVehicle: string = '';
  cylinderCapacity: string = '';
  model: string = '';
  chassis: string = '';

  constructor(
    private vehicleService: VehicleService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate() {
    let vehicle: VehicleDto = {
      brand: this.brand,
      color: this.color,
      cylinderCapacity: this.cylinderCapacity,
      erased: false,
      line: this.line,
      model: this.model,
      plate: this.plate,
      vehicleType: this.typeVehicle,
      vin: this.vin,
      chassis: this.chassis
    }
    this.vehicleService.saveVehicle(vehicle).subscribe(data => {
      console.info(data);
      this.toastr.success("", 'Ok', {timeOut: 3000, positionClass:'toast-top-center'});
      this.router.navigate(['']);
    },
    err => {
      this.toastr.error(err.error.message, 'Error', {timeOut: 3000, positionClass:'toast-top-center'});
    })
  }
}
