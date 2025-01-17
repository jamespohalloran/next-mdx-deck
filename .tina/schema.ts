import { defineSchema } from "@tinacms/cli";

export default defineSchema({
  collections: [
    {
      label: "Slides",
      name: "slides",
      format: "mdx",
      path: "content/slides",
      fields: [
        {
          label: "Body",
          name: "body",
          isBody: true,
          type: "rich-text",
          templates: [
            {
              name: "SlidePage",
              label: "Slide Page",
              fields: [
                {
                  type: "string",
                  name: "next",
                  label: "next",
                },
                {
                  type: "rich-text",
                  name: "children",
                  label: "children",
                  templates: [
                    {
                      name: "Cover",
                      label: "Cover",
                      fields: [
                        {
                          type: "rich-text",
                          name: "children",
                          label: "children",
                        },
                      ],
                    },
                    {
                      name: "SpeakerNotes",
                      label: "Speaker Notes",
                      fields: [
                        {
                          type: "rich-text",
                          name: "children",
                          label: "children",
                        },
                      ],
                    },
                    {
                      name: "img",
                      label: "img",
                      fields: [
                        {
                          type: "string",
                          name: "src",
                          label: "src",
                        },
                      ],
                    },
                    {
                      name: "iframe",
                      label: "iframe",
                      fields: [
                        {
                          type: "string",
                          name: "src",
                          label: "src",
                        },
                        {
                          type: "string",
                          name: "width",
                          label: "width",
                        },
                        {
                          type: "string",
                          name: "height",
                          label: "height",
                        },
                      ],
                    },
                    {
                      name: "cite",
                      label: "Cite",
                      fields: [
                        {
                          type: "rich-text",
                          name: "children",
                          label: "children",
                        },
                      ],
                    },
                    {
                      name: "button",
                      label: "button",
                      fields: [
                        {
                          type: "object",
                          name: "style",
                          label: "style",
                          fields: [],
                        },
                        {
                          type: "rich-text",
                          name: "children",
                          label: "children",
                        },
                      ],
                    },
                    {
                      name: "Steps",
                      label: "Steps",
                      fields: [
                        {
                          type: "string",
                          name: "items",
                          list: true,
                          label: "items",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
