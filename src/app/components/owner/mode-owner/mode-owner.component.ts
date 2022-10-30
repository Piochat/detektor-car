import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { Owner } from 'src/app/models/owner';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-mode-owner',
  templateUrl: './mode-owner.component.html',
  styleUrls: ['./mode-owner.component.css']
})
export class ModeOwnerComponent implements OnInit {
  owner!: Owner;
  id!: number;

  constructor(
    private service: OwnerService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getOwner();
  }

  onUpdate() {
    this.service.updateOwner(this.id, this.owner).subscribe(data => {
      console.info(data);
      this.toastr.success("", 'Ok', { timeOut: 3000, positionClass: 'toast-top-center' });
      this.router.navigate(['']);
    },
      err => {
        this.toastr.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
      })
  }

  getOwner() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.getOwner(this.id).subscribe(data => {
      this.owner = data;
      console.info(this.owner);
    },
      err => {
        this.toastr.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
        this.router.navigate(['']);
      })
  }
}
