import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Vehicle, VehicleDto } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  url: string = environment.vehicleUrl;

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.url);
  }

  getVehicle(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.url}${id}`)
  }

  saveVehicle(vehicle: VehicleDto): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.url, vehicle);
  }

  updateVehicle(id: number, vehicle: VehicleDto): Observable<Vehicle> {
    return this.http.put<Vehicle>(`${this.url}${id}`, vehicle);
  }

  deleteVehicle(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}${id}`);
  }
}
