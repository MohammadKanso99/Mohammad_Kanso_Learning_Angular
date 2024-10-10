import {Component, Input} from '@angular/core';
import {MacBook} from "../Shared/models/mac-book";
import {NgOptimizedImage, NgStyle} from "@angular/common";

@Component({
  selector: 'app-mac-book-list-item',
  standalone: true,
  imports: [
    NgStyle,
    NgOptimizedImage
  ],
  templateUrl: './mac-book-list-item.component.html',
  styleUrl: './mac-book-list-item.component.css'
})

// part 8 property input to the component
export class MacBookListItemComponent{
  @Input() macBookListItem?: MacBook;
  // step 12
  @Input() background ?: string;

}


