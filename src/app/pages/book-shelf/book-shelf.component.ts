import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BookCategory } from 'src/app/model/book-category.model';
import { Book } from 'src/app/model/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.scss'],
})
export class BookShelfComponent implements OnInit {
  
  books$ = this.bookService.getBooks();
  books: Book[] = [];
  filteredBooks_: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  filterBooks_: BehaviorSubject<BookCategory | 'clear'> = this.bookService.filterBooks_;
  
  constructor(private bookService: BookService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.books$.subscribe(books => {
      this.books = books;
      this.filteredBooks_.next(this.books);
    })
   
    this.filterBooks_.subscribe(selectedCategory => {
      if(selectedCategory && selectedCategory !== 'clear') {
        this.filteredBooks_.next(this.books.filter((book:Book) =>  book.category.id === selectedCategory.id));
      } else { 
        this.filteredBooks_.next(this.books);
      }
      this.cdRef.detectChanges();
    })
  }
}
