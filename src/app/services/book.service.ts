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

   
    getBooks() {
        return this.books_.asObservable();
    }
    // addBooks(books: Book[]): Observable<any> {
    //     return this.http.put(baseUrl + '/books.json', books);
    // }
}