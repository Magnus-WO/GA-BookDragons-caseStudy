import { Block } from "payload";

export const CTAblock: Block = {
  slug: "cta-block",
  interfaceName: "CTABlockType",
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
  ],
};
