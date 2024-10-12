import {Component, Input, OnInit} from '@angular/core';
import {MacBook} from "../Shared/models/mac-book";
import {NgOptimizedImage, NgStyle} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {MacbooksService} from "../services/macbooks.service";

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
export class MacBookListItemComponent implements OnInit{
  @Input() macBookListItem?: MacBook;
  // step 12
  @Input() background ?: string;

  macbookList: MacBook[] = [];
  currentIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private macbookService: MacbooksService,
  ) {}

  ngOnInit(): void {
    this.macbookService.getMacbook().subscribe(macbooks => {
      this.macbookList = macbooks;

      // Subscribe to paramMap changes to actually see the page changing
      //If we dont do this, the URL will change but the view will not
      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        if (id) {
          this.currentIndex = this.macbookList.findIndex(macbook => macbook.id === id);
          this.macBookListItem = this.macbookList[this.currentIndex];
        }
      });
    });
  }}


