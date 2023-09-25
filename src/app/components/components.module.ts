import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { FilterBooksComponent } from './filter-books/filter-books.component';
import { HeaderComponent } from './header/header.component';
import { BookFormComponent } from './book-form/book-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BookCardComponent, FilterBooksComponent, HeaderComponent, BookFormComponent, FilterBooksComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [BookCardComponent, FilterBooksComponent, HeaderComponent, BookFormComponent, FilterBooksComponent]
})
export class ComponentsModule { }
