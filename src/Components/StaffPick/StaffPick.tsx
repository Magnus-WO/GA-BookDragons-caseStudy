import { Book } from "@/types/bookType.types";
import BookCard from "../BookCard/BookCard";
import Grid from "../Grid/Grid";
import Heading from "../Heading/Heading";
import Stack from "../Stack/Stack";
import { RichText } from "@payloadcms/richtext-lexical/react";

export type StaffPickProps = {
  productPosition: "product-on-left" | "product-on-right";
  staffPickHeaderText: string;

  staffPickBook: Book;
};

export default function StaffPick({
  productPosition,
  staffPickHeaderText,

  staffPickBook,
}: StaffPickProps) {
  return (
    <Grid
      gap="large-gap"
      columns="two-plus-one-columns"
      recommendationSection="recommendation-section"
      productPosition={productPosition}
    >
      <Stack as="div" customClassName="recommendation-section-text">
        <Heading as="h3">{staffPickHeaderText}</Heading>
        <RichText></RichText>
      </Stack>
      <BookCard
        section="recommendation-section-product"
        boxBackgroundVariant="box-white"
        bookCoverHeight={200}
        bookCoverWidth={160}
        bookBuyLink={staffPickBook.link}
        book={staffPickBook}
      />
    </Grid>
  );
}
