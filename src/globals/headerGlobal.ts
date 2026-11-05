import { GlobalConfig } from "payload";

export const HeaderGlobal: GlobalConfig = {
  slug: "header-block",
  access: { read: () => true },
  fields: [
    {
      name: "siteName",
      type: "text",
      required: true,
    },

    {
      name: "siteAboutUs",
      type: "text",
      required: true,
    },
    {
      name: "siteSales",
      type: "text",
      required: true,
    },
    {
      name: "siteLogIn",
      type: "text",
      required: true,
    },
  ],
};
