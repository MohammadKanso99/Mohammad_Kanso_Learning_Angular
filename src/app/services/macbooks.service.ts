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

  getMacbook(): Observable<MacBook[]> {
    return of(macbookList); //Return and observable that emits mock macbook data
  }
}
