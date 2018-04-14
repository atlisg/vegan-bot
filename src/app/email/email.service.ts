import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import { BASE_URL } from '../globals';

@Injectable()
export class EmailService {
  constructor(private http: HttpClient) {}

  /**
   * Send email.
   */
  sendEmail(email): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(`${BASE_URL}email/`, email, httpOptions);
  }
}
