import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Report } from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  url: string = environment.reportUrl;

  constructor(private http: HttpClient) { }

  getReports(n: string): Observable<Report[]> {
    if (n === '') {
      return this.http.get<Report[]>(this.url);
    }

    return this.http.get<Report[]>(`${this.url}${n}`);
  }
}
