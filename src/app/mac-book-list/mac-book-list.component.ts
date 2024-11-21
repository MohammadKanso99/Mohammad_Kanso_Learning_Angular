import {Component, OnInit} from '@angular/core';
import {MacBook} from "../Shared/models/mac-book";
import {MacBookListItemComponent} from "../mac-book-list-item/mac-book-list-item.component";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {MacbooksService} from "../services/macbooks.service";
import {Router, RouterLink} from "@angular/router";
@Component({
  selector: 'app-mac-book-list',
  standalone: true,
  imports: [CommonModule,
    MacBookListItemComponent,
    NgForOf, NgIf,
    RouterLink
  ],
  templateUrl: './mac-book-list.component.html',
  styleUrl: './mac-book-list.component.css'
})

// part 6
export class MacBookListComponent implements OnInit { // step 8 implement

  macBookList: MacBook[] = [];
  selectedMacBook?: MacBook;
  error: string = ''; // Added error property

  // step 7
  constructor (private macbookServices: MacbooksService, private router: Router) {
    //this constructor is primarily used for dependency injection

  }

  // step 8 continue
  ngOnInit(): void {
    this.macbookServices.getMacbook().subscribe({
      next: (data: MacBook[]) => {
        this.macBookList = data;
      },
      error: (err) => {
        console.error("Error fetching Macbooks", err);
        this.error = "Failed to fetch MacBook data. Please try again later."; // Set error message
      },
      complete: () => console.log("MacBook data fetch complete!")
    });
  }

  selectMacBook (macBook: MacBook): void {
    this.selectedMacBook = macBook;
  }

  onDelete(macbookId: any): void {
    this.macbookServices.deleteMacbook(macbookId);
    this.macBookList = this.macBookList.filter(macbook => macbook.id !== macbookId);
  }


  onEdit(macbookId: any): void {
    this.router.navigate(['/modify-macbook/', macbookId]);

  }

}
