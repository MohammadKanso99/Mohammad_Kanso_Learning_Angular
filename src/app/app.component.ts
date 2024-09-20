import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MacBook} from "./models/mac-book";
import {NgForOf} from "@angular/common";
import {NgIf} from "@angular/common"; // add ngIf import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf], // add here too
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  macBook1: MacBook = {model: 'MacBook Pro 14-inch 2021', chip: 'M1', serialNumber: '11A11', memory: 16, color: 'Silver', hasOwner: true };
  macBook2: MacBook = {model: 'MacBook Pro 16-inch 2023', chip: 'M2', serialNumber: '11A22', memory: 32, color: 'Space Grey', hasOwner: false };
  macBook3: MacBook = {model: 'MacBook Air 15-inch 2023', chip: 'M2', serialNumber: '11A33', memory: 16, color: 'Silver', hasOwner: false };
  macBook4: MacBook = {model: 'MacBook Air 13-inch 2024', chip: 'M3', serialNumber: '11A44', memory: 16, color: 'Starlight', hasOwner: true };
  macBook5: MacBook = {model: 'MacBook Pro 16-inch 2023', chip: 'M3', serialNumber: '11A55', memory: 32, color: 'Silver', hasOwner: true };
  macBook6: MacBook = {model: 'MacBook Pro 14-inch 2021', chip: 'M3', serialNumber: '11A66', memory: 32, color: 'Space Grey', hasOwner: false };

  macBookList: MacBook[] = [this.macBook1, this.macBook2, this.macBook3, this.macBook4, this.macBook5, this.macBook6]
}
