import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Owner, OwnerDto } from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  url: string = environment.ownerUrl;

  constructor(private http: HttpClient) { }

  getOnwers(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.url);
  }

  getOwner(id: number): Observable<Owner> {
    return this.http.get<Owner>(`${this.url}${id}`);
  }

  saveOwner(owner: OwnerDto): Observable<Owner> {
    return this.http.post<Owner>(this.url, owner);
  }

  updateOwner(id: number, owner: Owner): Observable<Owner> {
    return this.http.put<Owner>(`${this.url}${id}`, owner);
  }

  deleteOwner(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}${id}`);
  }
}
