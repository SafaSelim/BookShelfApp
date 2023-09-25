import { Component, Input } from '@angular/core';
import { Book } from 'src/app/model/book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  @Input() bookDetails!: Book;

  constructor() {}

}
