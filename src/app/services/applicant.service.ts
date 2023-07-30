import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Applicant } from '../applicant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  private applicant_url = "http://localhost:9000/applicants";
  constructor(private httpClient: HttpClient) { }
  createapplicant(applicant: FormData) {
    return this.httpClient.post(`${this.applicant_url}`, applicant,{ responseType: 'text' }).pipe((res) => res);
  }
}