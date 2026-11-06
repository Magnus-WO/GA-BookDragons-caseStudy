import { Block, slugField } from "payload";

export const CTAblock: Block = {
  slug: "cta-block",
  interfaceName: "C2ABlockType",
  labels: { singular: "Call to Action Block", plural: "Call to Action Blocks" },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Tittel",
      required: true,
    },
    {
      name: "description",
      type: "richText",
      label: "Beskrivelse",
      required: true,
    },
    {
      name: "image",
      type: "text",
      label: "Bildet",
      required: true,
    },
    {
      name: "button",
      type: "text",
      label: "Text til knapp",
      required: true,
    },
    {
      name: "color",
      label: "Bakgrunnsfarge",
      type: "select",
      required: true,
      options: [
        {
          label: "Gul",
          value: "yellow",
        },
        {
          label: "Blå",
          value: "blue",
        },
        {
          label: "Grønn",
          value: "green",
        },
        {
          label: "Rosa",
          value: "pink",
        },
        {
          label: "Brun",
          value: "brown",
        },
      ],
    },
    slugField({ useAsSlug: "title" }),
  ],
};
