import { CollectionConfig, slugField } from "payload";

export const Tags: CollectionConfig = {
  slug: "tags",
  admin: {
    group: "Collections",
    useAsTitle: "title",
    description:
      "Her kan du legge til, endre og slette tags. En tag er det man setter for hver bok for å beskrive hvem den passer til, sjanger, type bok etc.",
  },
  fields: [
    {
      name: "title",
      label: "Tag navn",
      type: "text",
      required: true,
      unique: true,
      //   type: "select",
      //   options: [
      //     {
      //       label: "BookTok",
      //       value: "booktok",
      //     },
      //     {
      //       label: "Pocket",
      //       value: "pocket",
      //     },
      //     {
      //       label: "Baking",
      //       value: "baking",
      //     },
      //     {
      //       label: "Kokebok",
      //       value: "kokebok",
      //     },
      //     {
      //       label: "Matlaging",
      //       value: "matlaging",
      //     },
      //     {
      //       label: "Engelsk",
      //       value: "engelsk",
      //     },
      //     {
      //       label: "Roman",
      //       value: "roman",
      //     },
      //     {
      //       label: "Ungdom",
      //       value: "ungdom",
      //     },
      //     {
      //       label: "Krim",
      //       value: "krim",
      //     },
      //     {
      //       label: "Fantasy",
      //       value: "fantasy",
      //     },
      //     {
      //       label: "Mytologi",
      //       value: "mytologi",
      //     },
      //   ],
    },

    {
      name: "description",
      label: "Beskrivelse",
      type: "textarea",
      required: true,
    },
    slugField(),
  ],
};
