import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacBookListItemComponent } from './mac-book-list-item.component';

describe('MacBookListItemComponent', () => {
  let component: MacBookListItemComponent;
  let fixture: ComponentFixture<MacBookListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacBookListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacBookListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
