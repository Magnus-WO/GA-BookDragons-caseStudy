import { CollectionConfig, slugField } from "payload";

export const Books: CollectionConfig = {
  slug: "books",
  access: { read: () => true },
  admin: {
    group: "Collections",
    useAsTitle: "title",
    description: "Her kan du legge til, søke opp og endre bøker.",
  },
  defaultSort: [`title`],

  fields: [
    {
      name: "id",
      label: "ID",
      type: "number",
      required: true,
      unique: true,
    },
    {
      name: "title",
      label: "Tittel",
      type: "text",
      required: true,
    },
    {
      name: "summary",
      label: "Oppsummering",
      type: "textarea",
      required: true,
    },
    {
      name: "price",
      label: "Pris",
      type: "number",
      min: 0,
      required: true,
    },
    {
      name: "onSale",
      label: "På salg?",
      type: "radio",
      options: [
        {
          label: "Ja",
          value: "true",
        },
        { label: "Nei", value: "false" },
      ],
    },
    {
      name: "discount",
      label: "Rabatt i prosent?",
      type: "number",
      min: 0,
      required: true,
    },
    slugField(),
    {
      name: "author",
      label: "Forfatter",
      type: "relationship",
      relationTo: "authors",
      required: true,
      hasMany: false,
    },

    // {
    //   name: "genres",
    //   label: "Sjanger",
    //   type: "relationship",
    //   relationTo: "genres",
    //   hasMany: true,
    //   required: true,
    // },
    {
      name: "stock",
      label: "Varelager",
      type: "number",
      min: 0,
      required: true,
    },
  ],
};
