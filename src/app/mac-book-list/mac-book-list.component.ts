import { Component } from '@angular/core';
import {MacBook} from "../Shared/models/mac-book";
import {MacBookListItemComponent} from "../mac-book-list-item/mac-book-list-item.component";
import {NgForOf} from "@angular/common";
import {MacbooksService} from "../services/macbooks.service";

@Component({
  selector: 'app-mac-book-list',
  standalone: true,
  imports: [
    MacBookListItemComponent,
    NgForOf
  ],
  templateUrl: './mac-book-list.component.html',
  styleUrl: './mac-book-list.component.css'
})

// part 6
export class MacBookListComponent {

  macBookList: MacBook[] = [];

  constructor (private macbookServices: MacbooksService){
    //this constructor is primarily used for dependency injection
  }
  // macBook1: MacBook = {model: 'MacBook Pro 14-inch 2021', chip: 'M1', serialNumber: 'macbook1', memory: 16, color: 'Silver', hasOwner: true };
  // macBook2: MacBook = {model: 'MacBook Pro 16-inch 2023', chip: 'M2', serialNumber: 'macbook2', memory: 32, color: 'Space Grey', hasOwner: false };
  // macBook3: MacBook = {model: 'MacBook Air 15-inch 2023', chip: 'M2', serialNumber: 'macbook3', memory: 16, color: 'Silver', hasOwner: false };
  // macBook4: MacBook = {model: 'MacBook Air 13-inch 2024', chip: 'M3', serialNumber: 'macbook4', memory: 16, color: 'Starlight', hasOwner: true };
  // macBook5: MacBook = {model: 'MacBook Pro 16-inch 2023', chip: 'M3', serialNumber: 'macbook5', memory: 32, color: 'Silver', hasOwner: true };
  // macBook6: MacBook = {model: 'MacBook Pro 14-inch 2021', chip: 'M3', serialNumber: 'macbook6', memory: 32, color: 'Space Grey', hasOwner: false };

  // macBookList: MacBook[] = [this.macBook1, this.macBook2, this.macBook3, this.macBook4, this.macBook5, this.macBook6]
}
