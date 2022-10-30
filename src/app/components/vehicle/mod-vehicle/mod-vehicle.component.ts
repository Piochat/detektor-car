import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { ToastrService } from 'ngx-toastr'
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle';

@Component({
  selector: 'app-mod-vehicle',
  templateUrl: './mod-vehicle.component.html',
  styleUrls: ['./mod-vehicle.component.css']
})
export class ModVehicleComponent implements OnInit {
  vehicle!: Vehicle;
  id: number = 0;

  constructor(
    private vehicleService: VehicleService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getVehicle();
  }

  onUpdate() {
    this.vehicleService.updateVehicle(this.id, this.vehicle).subscribe(data => {
      console.info(data);
      this.toastr.success("", 'Ok', {timeOut: 3000, positionClass:'toast-top-center'});
      this.router.navigate(['']);
    },
    err => {
      this.toastr.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
    })
  }

  getVehicle() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.vehicleService.getVehicle(this.id).subscribe(data => {
      this.vehicle = data;
      console.info(this.vehicle);
    },
      err => {
        this.toastr.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
        this.router.navigate(['']);
      });
  }

}
