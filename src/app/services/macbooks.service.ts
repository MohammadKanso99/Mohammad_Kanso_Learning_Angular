import { Injectable } from '@angular/core';
import {MacBook} from "../Shared/models/mac-book";
import {Observable, of} from "rxjs";
import {macbookList} from "../Shared/mockMacBook.data";

@Injectable({
  providedIn: 'root'
})
export class MacbooksService {
  private macbooks: MacBook[] = macbookList;//Local copy of student data for CRUD Operations
  constructor() {
  }

  // step 6
  getMacbook(): Observable<MacBook[]> {
    return of(macbookList); //Return and observable that emits mock macbook data
  }

  // step 9a
  getMacbookById(macbookId: number): Observable<MacBook | undefined> {
    const macbook = this.macbooks.find(macbook => macbook.id === macbookId);
    return of(macbook);
  }

  // add macbook 9b
  addMacbook(newMacBook: MacBook): Observable<MacBook[]> {
    this.macbooks.push(newMacBook)
    return of(this.macbooks);
  }

  // update macbook 9c
  updateMacbook(updatedMacBook: MacBook): Observable<MacBook[]> {
    const index = this.macbooks.findIndex(macbook => macbook.id === updatedMacBook.id);
    if (index !== -1) {
      this.macbooks[index] = updatedMacBook;
    }
    return of(this.macbooks);
  }

  // delete macbook 9d
  deleteMacbook(macbookId: number): Observable<MacBook[]> {
    this.macbooks = this.macbooks.filter(macbook => macbook.id !== macbookId);
    return of(this.macbooks);
  }


}
