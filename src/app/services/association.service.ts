import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
import { Association, AssociationDto } from '../models/association';

@Injectable({
  providedIn: 'root'
})
export class AssociationService {
  url: string = environment.associationUrl;

  constructor(private http: HttpClient) { }

  deleteAssociation(ownerId: number, vehicleId: number): Observable<Association> {
    return this.http.delete<Association>(`${this.url}${ownerId}/and/${vehicleId}`);
  }

  saveAssociation(association: AssociationDto) {
    return this.http.post<Association>(this.url, association);
  }
}
