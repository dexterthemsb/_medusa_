import { AccordionProps } from "../types/shortcut";

export const data: AccordionProps = {
  orgAvatar: "/oslash.png",
  liked: false,
  shortcutName: "o/engineering-resources",
  url: "https://www.oslash.com",
  description: "OSlash Engineering resources.",
  tags: ["engineering", "frontend", "backend"],
  activity: [
    {
      id: "d175fc04-3ebe-4357-8ccf-6db78fef854d",
      user: {
        name: "Geralt",
        avatar: "/images/avatars/Geralt.svg"
      },
      task: "updated",
      label: "Shortcut",
      value: {
        before: "o/engineering-docs",
        after: "o/engineering-resources"
      },
      date: "2022-09-05 21:30:00 UTC"
    },
    {
      id: "2d6a1514-7f6b-438a-abeb-d251d3e5c458",
      user: {
        name: "Geralt",
        avatar: "/images/avatars/Geralt.svg"
      },
      task: "updated",
      label: "Snippet",
      value: {
        before: "",
        after: ""
      },
      date: "2022-10-01 21:00:00 UTC"
    },
    {
      id: "9efd1daa-110a-428c-b840-2aa1c0ca3654",
      user: {
        name: "Geralt",
        avatar: "/images/avatars/Geralt.svg"
      },
      task: "updated",
      label: "Shortcut",
      value: {
        before: "o/engineering",
        after: "o/engineering-docs"
      },
      date: "2022-09-05 21:30:00 UTC"
    },
    {
      id: "c357e4fc-a7fd-404f-960b-b91ee996bac1",
      user: {
        name: "Yennefer",
        avatar: "/images/avatars/Yennefer.svg"
      },
      task: "created",
      label: "o/engineering",
      value: {
        before: "",
        after: ""
      },
      date: "2022-08-05 21:30:00 UTC"
    }
  ]
};
