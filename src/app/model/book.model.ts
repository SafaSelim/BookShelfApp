import { BookCategory } from "./book-category.model";

export class Book {
    id: number;
    title: string;
    author: string;
    category: BookCategory;
    coverImageUrl: string;
    description: string;

    constructor(id: number, title: string, author: string, category: BookCategory, coverImageUrl: string, description: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.category = category;
        this.coverImageUrl = coverImageUrl;
        this.description = description;
    }
    
}