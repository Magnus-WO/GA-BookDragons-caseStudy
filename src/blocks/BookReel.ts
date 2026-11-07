import { Block, slugField } from "payload";

export const BookReelBlock: Block = {
  slug: "book-reel-block",
  interfaceName: "BookReelBlockType",
  labels: { singular: "Book reel block", plural: "Book reel blocks" },
  fields: [
    {
      name: "title",
      label: "Overskrift",
      type: "text",
      required: true,
    },
    {
      name: "books",
      type: "relationship",
      relationTo: "books",
      hasMany: true,
      required: true,
    },
    {
      name: "marginType",
      label: "Størrelse på margin",
      hasMany: false,
      required: true,
      defaultValue: "m-b-auto",
      type: "select",
      options: [
        {
          label: "Auto",
          value: "m-b-auto",
        },
        {
          label: "4XL",
          value: "m-b-4xl",
        },
        {
          label: "3XL",
          value: "m-b-3xl",
        },
        {
          label: "2XL",
          value: "m-b-2xl",
        },
        {
          label: "XL",
          value: "m-b-xl",
        },
        {
          label: "Large",
          value: "m-b-l",
        },
        {
          label: "Medium",
          value: "m-b-m",
        },
        {
          label: "Small",
          value: "m-b-s",
        },
        {
          label: "XS",
          value: "m-b-xs",
        },
        {
          label: "2XS",
          value: "m-b-2xs",
        },
        {
          label: "3XS",
          value: "m-b-3xs",
        },
      ],
    },
  ],
};
