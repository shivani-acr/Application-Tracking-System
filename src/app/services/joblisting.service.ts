import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joblisting } from '../joblisting';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JoblistingService {
  private joblisitng_url = 'http://localhost:9092/jobListing';
  constructor(private httpClient: HttpClient) {}
  createjobListing(jobListing: Joblisting) {
    return this.httpClient
      .post(`${this.joblisitng_url}`, jobListing)
      .pipe((res) => res);
  }
  getJobListing(): Observable<Joblisting[]> {
    return this.httpClient.get<Joblisting[]>(`${this.joblisitng_url}`);
  }
  getJobListingById(id: number): Observable<Joblisting> {
    return this.httpClient.get<Joblisting>(`${this.joblisitng_url}/${id}`);
  }
  updateJobListing(id: number, jobListing: Joblisting): Observable<Object> {
    console.log(jobListing);
    return this.httpClient.put(
      `${this.joblisitng_url}/update/${id}`,
      jobListing
    );
  }
  deleteJobListing(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.joblisitng_url}/delete/${id}`, {
      responseType: 'text',
    });
  }
}
