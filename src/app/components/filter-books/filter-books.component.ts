import { Component } from '@angular/core';
import { BookCategory } from 'src/app/model/book-category.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-filter-books',
  templateUrl: './filter-books.component.html',
  styleUrls: ['./filter-books.component.scss']
})
export class FilterBooksComponent {

  bookCategories$ = this.bookService.getBookCategories();

  selectedCategory: BookCategory = {id: -1, name: "Adventure stories"};

  constructor(
    private bookService: BookService,
    ) {
      this.bookService.fetchCategories();
     }

  filterBooks(selectedCategory: BookCategory) {
    if(this.selectedCategory !== selectedCategory) {
      this.selectedCategory = selectedCategory;
      this.bookService.filterBooks(selectedCategory);
    } else {
      this.selectedCategory = {id: -1, name: "Adventure stories"};
      this.bookService.filterBooks('clear');
    }
   
  }

}
