import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../model/book.model';
import { baseUrl } from './config';
import { books } from './books-mock-data';


@Injectable({
    providedIn: 'root'  
})
export class BookService {

    books_: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(books);

    constructor(
        private http: HttpClient,
    ) { }

    /**
     * Fetch all books from firebase storage
     * 
     * @returns (Observable<Book[]>)
     */
    getBooks(): Observable<Book[]> {
        return this.books_.asObservable();
    }

    /**
     * Returns book categories
     */
    getBookCategories() {
        // TODO
    }


    /** 
     * Adding book to the firebase storage
     * 
     * @param (books: Book[])
    */
    addBook(books: Book[]): Observable<any> {
        return this.http.put(baseUrl + '/books.json', books);
    }

    updateBook(books: Book[]) {
        // TODO
    }


}