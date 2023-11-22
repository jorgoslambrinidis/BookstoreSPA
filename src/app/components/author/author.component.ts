import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  // props
  authors: Author[] = [];

  constructor(
    private authorService: AuthorService
  ) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    this.authorService.getAllAuthors().subscribe({
      next: (authors: Author[]) => {
        this.authors = authors;
      },
      error: () => {},
      complete: () => {},
    })
  }

  addAuthor() {
    console.log("author clicked!");
    let newAuthor: Author = {
      isPopular: true,
      name: 'Jorgos',
      shortDescription: 'Bla bla'
    };

    this.authorService.addAuthor(newAuthor).subscribe({
      next: (author: Author) => {
        console.log('author created:', author);
      },
      error: () => {},
      complete: () => {},
    })


  }

}
