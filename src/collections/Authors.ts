import { CollectionConfig, slugField } from "payload";

export const Authors: CollectionConfig = {
  slug: "authors",
  access: { read: () => true },
  admin: {
    group: "Collections",
    useAsTitle: `title`,
    description: "Her finner du alle forfattere.",
  },
  defaultSort: ["title"],
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
      label: "Fullt navn",
      type: "text",
      required: true,
    },
    slugField(),
    {
      name: "about",
      label: "Om forfatteren",
      type: "textarea",
      required: true,
    },
    {
      name: "image",
      label: "Bilde",
      type: "relationship",
      relationTo: "media",
      required: false,
    },
  ],
};
