import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf} from "@angular/common";
import {NgIf} from "@angular/common";
import {MacBookListComponent} from "./mac-book-list/mac-book-list.component";
import {MacBookListItemComponent} from "./mac-book-list-item/mac-book-list-item.component";
import {MacbooksService} from "./services/macbooks.service";
import {MacBook} from "./Shared/models/mac-book"; // add ngIf import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MacBookListComponent, MacBookListItemComponent], // add here too
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  macBook: MacBook | undefined;

  // step 11
  constructor (private macbookServices: MacbooksService){
    //this constructor is primarily used for dependency injection

  }

  // step 12 continue
  ngOnInit(): void {
    this.macbookServices.getMacbookById(2).subscribe({
      next: (data: MacBook | undefined ) => this.macBook = data, // ??
      error:err => console.error("Error fetching Macbooks", err),
      complete:() => console.log("Macbook data fetch complete!")
    })
  }
}
