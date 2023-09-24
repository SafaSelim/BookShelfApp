import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, first, map } from 'rxjs';
import { Book } from '../model/book.model';
import { firebaseUrl } from './config';
import { bookCategories, books } from './books-mock-data';
import { BookCategory } from '../model/book-category.model';


@Injectable({
    providedIn: 'root'  
})
export class BookService {

    books_: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
    categories_: BehaviorSubject<BookCategory[]> = new BehaviorSubject<BookCategory[]>([]);

    constructor(
        private http: HttpClient,
    ) { }

    // For initiliaze the db
    // storeBooks() {
    //     this.http.put(firebaseUrl + '/books.json', books).subscribe(res=> {
    //         console.log("books stored --> response-->",res);
    //     });
    // }

    // storeCategories() {
    //     this.http.put(firebaseUrl + 'bookCategories.json',bookCategories).subscribe(res=> {
    //         console.log("categories saved response--> ", res);
    //     })
    // }

    /**
     * Fetch all books from firebase
     */
    fetchBooks(): void {

        this.http.get(firebaseUrl+"books.json").pipe(
            first(),
            )
        .subscribe((data: unknown)=> {
            this.books_.next(data as Book[]);
        })
    }

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
    getBooks(): Observable<Book[]> {
        return this.books_.asObservable();
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
        this.http.get(firebaseUrl+'books.json').pipe(first())
            .subscribe((books: any) => {
                console.log("books", books)
                books.push(newBook);
                this.http.put(firebaseUrl + '/books.json',books).subscribe(res=> console.log("resp->",res));
            });
    }


}