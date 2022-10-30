import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssociationService } from 'src/app/services/association.service';
import { OwnerService } from 'src/app/services/owner.service';
import { VehicleService } from 'src/app/services/vehicle.service';
import { ToastrService } from 'ngx-toastr'
import { Vehicle } from 'src/app/models/vehicle';
import { Owner } from 'src/app/models/owner';
import { AssociationDto } from 'src/app/models/association';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit {
  vehicles: Vehicle[] = [];
  owners: Owner[] = [];
  idOwner: number = 0;
  idVehicle: number = 0;

  constructor(
    private associationService: AssociationService,
    private vehicleService: VehicleService,
    private ownerService: OwnerService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getVehicles();
    this.getOwners();
  }

  onDelete(ownerId: number, vehicleId: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You cannnot undo",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancle'
    }).then((result) => {
      if (result.value) {
        this.associationService.deleteAssociation(ownerId, vehicleId).subscribe(data => {
          console.log("Deleted", data);
          if (data) {
            this.delOwner(ownerId);
            this.delVehicle(vehicleId);
            this.toastr.success("", 'Ok', { timeOut: 3000, positionClass: 'toast-top-center' });
          } else {
            this.toastr.warning("Alert", 'Item no deleted', { timeOut: 3000, positionClass: 'toast-top-center' });
          }

          this.getOwners();
        },
          err => {
            this.toastr.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'canceled',
          'item no deleted',
          'error'
        )
      }
    })
  }

  delVehicle(vehicleId: number) {
    this.vehicleService.deleteVehicle(vehicleId).subscribe(data => {
      console.log(data);
    })
  }

  delOwner(ownerId: number) {
    this.ownerService.deleteOwner(ownerId).subscribe(data => {
      console.log(data);
    })
  }

  onCreate(ownerId: number, vehicleId: number) {
    let association: AssociationDto = {
      ownerId: ownerId,
      vehicleId: vehicleId
    }
    this.associationService.saveAssociation(association).subscribe(data => {
      this.toastr.success("", 'Ok', { timeOut: 3000, positionClass: 'toast-top-center' });
      this.router.navigate(['']);
    },
      err => {
        this.toastr.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
      })
  }

  getVehicles() {
    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data;
    })
  }

  getOwners() {
    this.ownerService.getOnwers().subscribe(data => {
      this.owners = data;
    })
  }

  verId(ownerId: number, vehicleId: number) {
    console.log("info", 'owner', ownerId, 'vehicle', vehicleId)
  }
}
