import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import { Answer } from '../models/answer.interface';

const BASE_URL = 'http://localhost:80/api/';
/* const BASE_URL = 'http://veganbot.com/api/'; */

@Injectable()
export class AnswerService {
  constructor(private http: HttpClient) {}

  /**
   * Get answers.
   */
  getAnswers(sourceId?, searchTerm?): any {
    let queryString = '';
    if (sourceId) {
      queryString += `sourceId=${sourceId}&`;
    }
    if (searchTerm) {
      queryString += `text=${searchTerm}`;
    }
    return this.http.get(`${BASE_URL}answers/?${queryString}`);
  }

  /**
   * Get answer by id.
   * @param id : id of the answer object.
   */
  getAnswerById(id: string): any {
    return this.http.get(`${BASE_URL}answers/${id}`);
  }

  /**
   * Edit answer by id.
   */
  updateAnswerById(id: string, hit: boolean, share: boolean): any {
    const body = {
      hit: hit,
      share: share,
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.put(`${BASE_URL}answers/${id}`, body, httpOptions);
  }
}
