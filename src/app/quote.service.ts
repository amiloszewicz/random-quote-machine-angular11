import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IQuote } from './interfaces/app.interface';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(
    private http: HttpClient
  ) { }

  quoteUrl = 'https://api.quotable.io/random';

  getQuote() {
    return this.http.get<IQuote>(this.quoteUrl);
  }

}
