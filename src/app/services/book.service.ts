import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, first, map } from 'rxjs';
import { Book } from '../model/book.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { firebaseUrl } from './config';
import { bookCategories, books } from './books-mock-data';
import { BookCategory } from '../model/book-category.model';


@Injectable({
    providedIn: 'root'  
})
export class BookService {

    books$: Observable<Book[]> = new Observable<Book[]>();
    filteredBooks$: Observable<Book[]> = new Observable<Book[]>();

    filterBooks_: BehaviorSubject<BookCategory | 'clear'> = new BehaviorSubject<BookCategory | 'clear'>('clear');
    categories_: BehaviorSubject<BookCategory[]> = new BehaviorSubject<BookCategory[]>([]);


    constructor(
        private http: HttpClient,
        private db: AngularFireDatabase, 
    ) { }

    /**
     * Fetch all books from firebase
     */
       fetchCategories(): void {
        this.http.get(firebaseUrl+"bookCategories.json").pipe(
            first(),
            )
        .subscribe((data: unknown)=> {
            this.categories_.next(data as BookCategory[]);
        })
    }

    /**
     * Get all books
     * 
     * @returns (Observable<Book[]>)
     */
    getBooks() {
        this.books$ = this.db.list('books').valueChanges() as Observable<Book[]>;
        return this.books$;
    }

    /**
     * Get all book categories
     */
    getBookCategories() {
       return this.categories_.asObservable();
    }


    /** 
     * Adding book to the firebase storage
     * 
     * @param (books: Book[])
    */
    addBook(newBook: Book) {
        this.db.list('books').push(newBook);
    }


    filterBooks(selectedCategory: BookCategory | 'clear') {
        this.filterBooks_.next(selectedCategory);
    }


}