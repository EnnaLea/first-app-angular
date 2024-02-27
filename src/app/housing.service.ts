import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/locations';

  // async getAllHousingLocations(): Promise<HousingLocation[]> {
  //   const data = await fetch(this.url);
  //   return await data.json() ?? [];
  // }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await this.http.get<HousingLocation[]>(this.url).toPromise();
    return data ?? [];
  }

  // async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
  //   const data = await fetch(`${this.url}/${id}`);
  //   return await data.json() ?? {};
  // }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    return this.http.get<HousingLocation>(`${this.url}/${id}`).pipe(
      map(data => data ?? {})
    ).toPromise();
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}