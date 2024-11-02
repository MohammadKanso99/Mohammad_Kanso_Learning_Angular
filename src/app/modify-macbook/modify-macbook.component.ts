import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MacbooksService} from "../services/macbooks.service";
import {MacBook} from "../Shared/models/mac-book";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-modify-macbook',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './modify-macbook.component.html',
  styleUrl: './modify-macbook.component.css'
})
export class ModifyMacbookComponent implements OnInit {
  macbookForm: FormGroup;
  macbook: MacBook | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private macbookService: MacbooksService
  ) {
    this.macbookForm = this.fb.group({
      id: ['', Validators.required],
      model: ['', Validators.required],
      chip: ['', Validators.required],
      color: ['', Validators.required],
      hasOwner: [false]
    })
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
      this.macbookService.getMacbookById(+id).subscribe(macbook => {
        if (macbook){
          this.macbook = macbook;
          this.macbookForm.patchValue(macbook);
        }
      });
    }
  }

  onSubmit() {
    const macbook: MacBook = this.macbookForm.value;

    if (macbook.id) {
      this.macbookService.updateMacbook(macbook);
    } else {
      // For adding a new Macbook, generate a new ID
      const newId = this.macbookService.generateNewId(); // This method will create a new ID
      macbook.id = newId;
      this.macbookService.addMacbook(macbook);
    }
    this.router.navigate(['/macbooks']);
  }
  navigateToPhoneList(): void {
    this.router.navigate(['/phones']);
  }
}

