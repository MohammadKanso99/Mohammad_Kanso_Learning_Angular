import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {DatePipe, UpperCasePipe} from "@angular/common";
import {MacbooksService} from "./services/macbooks.service";
import {MacBook} from "./Shared/models/mac-book"; // add ngIf import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, RouterOutlet, DatePipe, UpperCasePipe], // add here too
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  myDate = Date.now();
  title: string = 'MacBooks';

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
