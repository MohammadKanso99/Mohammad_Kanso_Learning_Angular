import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf} from "@angular/common";
import {NgIf} from "@angular/common";
import {MacBookListComponent} from "./mac-book-list/mac-book-list.component"; // add ngIf import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, MacBookListComponent], // add here too
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
}
