import { Author } from "./author";
import { Category } from "./category";
import { Photo } from "./photo";
import { Publisher } from "./publisher";

export interface Book {
  id: number;
  title: string;
  authorName: string;
  authorId: number;
  author: Author;
  publisherName: string;
  publisherId: number;
  publisher: Publisher;
  categoryName: string;
  categoryId: number;
  category: Category;
  yearOfIssue: string;
  numberOfPages: number;
  genre: string;
  price: number;
  description: string;
  language: string;
  country: string;
  edition: number;
  dimension: string;
  weight: number;
  shipping: string;
  photoUrl: string;
  copies: number;
  soldItems: number;
  userId: string;
  photos: Photo[];

}
