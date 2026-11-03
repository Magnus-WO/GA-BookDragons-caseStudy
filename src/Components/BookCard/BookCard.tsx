import Heading from "../Heading/Heading";
import Image from "next/image";
import Link from "next/link";
import Stack from "../Stack/Stack";
import Button from "../Button/Button";
import Tag from "../Tag/Tag";
import { Book } from "@/types/bookType.types";
import { type TagType } from "@/types/tagType.types";

export type BookCardProps = {
  section?: "" | "recommendation-section-product";
  boxBackgroundVariant: "box-light-gray" | "box-white";
  bookCoverWidth: number;
  bookCoverHeight: number;
  bookBuyLink: string;
  book: Book;
};

export default function BookCard({
  section,
  boxBackgroundVariant,
  book,
  bookCoverWidth = 160,
  bookCoverHeight = 200,
  bookBuyLink,
}: BookCardProps) {
  return (
    <article className={`${section} box ${boxBackgroundVariant} book-card`}>
      <Image
        className="book-card-cover"
        src={book.coverSrc}
        alt={book.coverAlt}
        width={bookCoverWidth}
        height={bookCoverHeight}
      />
      <Stack as="div">
        <Heading as="h3" className="eyebrow-heading book-card-title">
          <Link href={`${book.id}`}>{book.title}</Link>
        </Heading>
        <p className="book-card-author">Skrevet av: {book.author}</p>
        <p className="book-card-tags cluster">
          {book.tags.map((tag: TagType) => (
            <Tag
              className="tag"
              link={tag.tagLink}
              tagText={tag.tagText}
              key={tag.id}
            />
          ))}
        </p>
      </Stack>
      <Button block="block-button" link={bookBuyLink} price={book.price}>
        Kjøp:
      </Button>
    </article>
  );
}
