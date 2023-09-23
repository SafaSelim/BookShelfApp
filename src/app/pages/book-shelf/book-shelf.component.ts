import { Component } from '@angular/core';
import { Book } from 'src/app/model/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.scss']
})
export class BookShelfComponent {
  
  books$ = this.bookService.getBooks();
  
  constructor(private bookService: BookService) { }
}
