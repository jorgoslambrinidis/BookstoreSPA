import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  // input props
  @Input() book: Book | undefined;

  constructor() {

  }

  ngOnInit() {
    // console.log(this.book);
  }

}
