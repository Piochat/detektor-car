import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerDto } from 'src/app/models/owner';
import { ToastrService } from 'ngx-toastr'
import { OwnerService } from 'src/app/services/owner.service';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-save-owner',
  templateUrl: './save-owner.component.html',
  styleUrls: ['./save-owner.component.css']
})
export class SaveOwnerComponent implements OnInit {

  firstname: string = '';
  lastname: string = '';
  dpi: string = '';
  birthdate!: Date;
  address: string = '';
  email: string = '';
  phone: string = '';

  constructor(
    private service: OwnerService,
    private toastr: ToastrService,
    private router: Router,
    private dataPipe: DatePipe
  ) { }

  ngOnInit(): void {
  }

  onCreate() {
    let owner: OwnerDto = {
      address: this.address,
      birthdate: this.dataPipe.transform(this.birthdate, 'yyyy-MM-ddTHH:mm:ss'),
      dpi: this.dpi,
      email: this.email,
      erased: false,
      firstname: this.firstname,
      lastname: this.lastname,
      phone: this.phone
    }
    this.service.saveOwner(owner).subscribe(data => {
      this.toastr.success("", 'Ok', {timeOut: 3000, positionClass:'toast-top-center'});
      this.router.navigate(['']);
    },
    err => {
      this.toastr.error(err.error.message, 'Error', {timeOut: 3000, positionClass:'toast-top-center'});
    })
  }
}
