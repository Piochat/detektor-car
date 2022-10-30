import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/report';
import { ToastrService } from 'ngx-toastr'
import { ReportService } from 'src/app/services/report.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  n: string = '';
  reports: Report[] = [];

  constructor(private service: ReportService, private toastr: ToastrService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getReports();
  }

  getReports() {
    this.n = this.activatedRoute.snapshot.params['n'];
    if (!(this.n)) {
      this.n = '';
    }

    this.service.getReports(this.n).subscribe(data => {
      this.reports = data;
    },
      err => {
        this.toastr.error(err.error.message, 'Error', { timeOut: 3000, positionClass: 'toast-top-center' });
      })
  }
}
