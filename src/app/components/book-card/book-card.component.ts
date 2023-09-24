import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() book!: Book;

  imageUrl: string = '';

  constructor() { }

  ngOnInit(): void {
    this.imageUrl = (this.book.coverImageUrl !== undefined && this.book.coverImageUrl !== "") ? this.book.coverImageUrl : "assets/media/no-cover-image.png";
    console.log("this.book--->",this.book);
  }

}
