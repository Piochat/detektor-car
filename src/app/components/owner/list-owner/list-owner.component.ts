import { Component, OnInit } from '@angular/core';
import { Owner, OwnerDto } from 'src/app/models/owner';
import { ToastrService } from 'ngx-toastr'
import { OwnerService } from 'src/app/services/owner.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-owner',
  templateUrl: './list-owner.component.html',
  styleUrls: ['./list-owner.component.css']
})
export class ListOwnerComponent implements OnInit {
  owners: Owner[] = [];

  constructor(private service: OwnerService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getOwners();
  }

  getOwners() {
    this.service.getOnwers().subscribe(data => {
      this.owners = data;
    },
      err => {
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
        this.service.deleteOwner(id).subscribe(data => {
          console.log("Deleted", data);
          if (data) {
            this.toastr.success("", 'Ok', {timeOut: 3000, positionClass:'toast-top-center'});
          } else {
            this.toastr.warning("Alert", 'Item no deleted', {timeOut: 3000, positionClass:'toast-top-center'});
          }
          
          this.getOwners();
        },
        err => {
          this.toastr.error(err.error.message, 'Error', {timeOut: 3000, positionClass:'toast-top-center'});
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
}
