import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacBookListComponent } from './mac-book-list.component';

describe('MacBookListComponent', () => {
  let component: MacBookListComponent;
  let fixture: ComponentFixture<MacBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacBookListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
