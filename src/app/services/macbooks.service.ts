import { Injectable } from '@angular/core';
import {MacBook} from "../Shared/models/mac-book";
import {macbookList} from "../Shared/mockMacBook.data";
import {Observable, catchError,  throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MacbooksService {
  private apiUrl = 'api/macbooks'; //url to web api
  private macbooks: MacBook[] = macbookList;//Local copy of student data for CRUD Operations
  constructor(private http: HttpClient) { }//DI http

  // step 6
  getMacbook(): Observable<MacBook[]> {
    return this.http.get<MacBook[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  // step 9a
  getMacbookById(id: number): Observable<MacBook> {
    return this.http.get<MacBook>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError)); //return a single student
  }

  addMacbook(macbook: MacBook): Observable<MacBook> {
    macbook.id = this.generateNewId();
    return this.http.post<MacBook>(this.apiUrl, macbook).pipe(catchError(this.handleError));
  }

  updateMacbook(macbook: MacBook): Observable<MacBook | undefined> {
    const url = `${this.apiUrl}/${macbook.id}`;
    return this.http.put<MacBook>(url, macbook).pipe(catchError(this.handleError));
  }

  deleteMacbook(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }
  // New method to generate a new unique ID
  generateNewId(): number {
    return this.macbooks.length > 0 ? Math.max(...this.macbooks.map(macbook => macbook.id)) + 1 : 1;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }

}
