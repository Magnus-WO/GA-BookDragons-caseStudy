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
  ],
};
