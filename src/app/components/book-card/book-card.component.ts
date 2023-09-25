import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() book!: any;

  imageUrl: string = "assets/media/no-cover-image.png";

  constructor() { }

  ngOnInit(): void {
    if(this.book.coverImageUrl && this.book.coverImageUrl !== '') {
      this.imageUrl = this.book.coverImageUrl;
    }
  }

}
