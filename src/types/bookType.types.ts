import { type Tags } from "./tagType.types";
export type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  coverSrc: string;
  coverAlt: string;
  link: string;
  tags: Tags;
};

export type Books = Book[];
