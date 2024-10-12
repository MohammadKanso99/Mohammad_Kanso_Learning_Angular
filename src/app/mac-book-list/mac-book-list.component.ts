import {Component, OnInit} from '@angular/core';
import {MacBook} from "../Shared/models/mac-book";
import {MacBookListItemComponent} from "../mac-book-list-item/mac-book-list-item.component";
import {NgForOf} from "@angular/common";
import {MacbooksService} from "../services/macbooks.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-mac-book-list',
  standalone: true,
  imports: [
    MacBookListItemComponent,
    NgForOf,
    RouterLink
  ],
  templateUrl: './mac-book-list.component.html',
  styleUrl: './mac-book-list.component.css'
})

// part 6
export class MacBookListComponent implements OnInit { // step 8 implement

  macBookList: MacBook[] = [];

  // step 7
  constructor (private macbookServices: MacbooksService){
    //this constructor is primarily used for dependency injection

  }

  // step 8 continue
  ngOnInit(): void {
    this.macbookServices.getMacbook().subscribe({
      next: (data: MacBook[]) => this.macBookList = data, // ??
      error:err => console.error("Error fetching Macbooks", err),
      complete:() => console.log("Macbook data fetch complete!")
    })
  }

  // itemClick(): void {
  //
  //
  // }

}
