import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: [
    './book.component.scss',
    './book2.component.scss'
  ]
})
export class BookComponent implements OnInit, OnDestroy, AfterViewInit {

  // props
  dummyString: string = '';
  bookList: Book[] = [];
  baseApiUrl = environment.apiBaseUrl;
  subscriptions: Subscription[] = [];

  constructor(
    private _bookService: BookService
  ) { }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  ngOnInit() {
    let getString = this._bookService.dummyString();
    this.dummyString = getString;
    console.log(getString);
    this.getBooks();
  }

  getBooks() {
    // this._bookService.getAllBooks().subscribe((books: Book[]) => { // the old way
    //   this.bookList = books;
    // });

    let getAllBooksSubscription$ = this._bookService.getAllBooks().subscribe({
      next: (books: Book[]) => {
        this.bookList = books;

        this.bookList.map((book: Book) => {
          book.photoUrl = this.baseApiUrl + book.photoUrl;
        });
      },
      error: (error: ErrorEvent) => {
        console.error(this.generateErrorResponse(error, 'getAllBooks'));
        alert(this.generateErrorResponse(error, 'getAllBooks'));
      },
      complete: () => {
        console.info('complete');
      },
    });

    this.subscriptions.push(getAllBooksSubscription$);
  }

  private generateErrorResponse(error: ErrorEvent, endpointName: string): string {
    return `
    Error from: ${endpointName}
    Error col number: ${error.colno},
    Error line number: ${error.lineno},
    Error message: ${error.message}`;
  }

}
