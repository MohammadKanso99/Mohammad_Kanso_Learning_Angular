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
  error: string | null = null;

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
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.macbookService.getMacbookById(id).subscribe( {
        next: macbook => {
          if (macbook) {
            this.macbookForm.patchValue(macbook);
          }
        },
        error: err => {
          this.error = 'Error fetching macbook';
          console.error('Error fetching macbook:', err);
        }
      });
    }
  }

  onSubmit() {
    const macbook: MacBook = this.macbookForm.value;

    if (macbook.id) {
      this.macbookService.updateMacbook(macbook).subscribe(() => this.router.navigate(['/macbooks']));
    } else {
      macbook.id = this.macbookService.generateNewId();
      this.macbookService.addMacbook(macbook).subscribe(() => this.router.navigate(['/macbooks']));
    }
  }

  onDelete(): void {
    const id = this.macbookForm.value.id;
    if (id) {
      this.macbookService.deleteMacbook(id).subscribe(() => this.router.navigate(['/macbooks']));
    }
  }


  navigateToMacbookList(): void {
    this.router.navigate(['/macbooks']);
  }
}

