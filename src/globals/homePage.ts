import { BookReelBlock } from "@/blocks/BookReel";
import { CTAblock } from "@/blocks/CTAblock";
import { GlobalConfig } from "payload";

export const HomePage: GlobalConfig = {
  slug: "homepage",
  fields: [
    {
      name: "layout",
      label: "Blokker",
      type: "blocks",
      blocks: [CTAblock, BookReelBlock],
    },
  ],
};
