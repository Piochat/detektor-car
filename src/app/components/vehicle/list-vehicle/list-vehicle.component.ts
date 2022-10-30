import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';
import { ToastrService } from 'ngx-toastr'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.css']
})
export class ListVehicleComponent implements OnInit {

  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles() {
    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data;
      console.info(this.vehicles);
    }, err => {
      this.toastr.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
    })
  }

  onDelete(id: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You cannnot undo",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancle'
    }).then((result) => {
      if (result.value) {
        console.log(id, 'deleted');
        this.vehicleService.deleteVehicle(id).subscribe(data => {
          console.log("Deleted", data);
          if (data) {
            this.toastr.success("", 'Ok', {timeOut: 3000, positionClass:'toast-top-center'});
          } else {
            this.toastr.warning("Alert", 'Item no deleted', {timeOut: 3000, positionClass:'toast-top-center'});
          }
          
          this.getVehicles();
        },
        err => {
          this.toastr.error(err.error.message, 'Error', {timeOut: 3000, positionClass:'toast-top-center'});
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'canceled',
          'product no deleted',
          'error'
        )
      }
    })
  }
}
