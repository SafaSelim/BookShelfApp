import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  bookForm!: FormGroup;

  selectedFileName = '';

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    ) { }

    ngOnInit(): void {
      this.initForm();
    }

    private initForm(): void {
      this.bookForm = this.fb.group({
        title: ['', Validators.required],
        author: ['', Validators.required],
        category: ['', Validators.required],
        description: [''],
        coverImage: [null, Validators.required] // Using 'null' as the initial value for File input
      });
    }

    onFileSelected(event: any) {
      const fileInput = event.target;
      if (fileInput.files && fileInput.files.length > 0) {
        this.selectedFileName = fileInput.files[0].name;
      } else {
        this.selectedFileName = '';
      }
    }

    onSubmit(event: any) {
    //  TODO add new book on the firebase by using bookService
    }

}
