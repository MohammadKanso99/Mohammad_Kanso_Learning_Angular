import {Component, Input} from '@angular/core';
import {MacBook} from "../models/mac-book";

@Component({
  selector: 'app-mac-book-list-item',
  standalone: true,
  imports: [],
  templateUrl: './mac-book-list-item.component.html',
  styleUrl: './mac-book-list-item.component.css'
})

// part 8 property input to the component
export class MacBookListItemComponent{
  @Input() macBookListItem?: MacBook;

}


