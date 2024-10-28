import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyMacbookComponent } from './modify-macbook.component';

describe('ModifyStudentComponent', () => {
  let component: ModifyMacbookComponent;
  let fixture: ComponentFixture<ModifyMacbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyMacbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyMacbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
