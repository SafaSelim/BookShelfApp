import { BookCategory } from "src/app/model/book-category.model";

export class BookFormModel {
    title!: string;
    author!: string;
    category!: BookCategory;
    description!: string;
    coverImage!: File;
  }