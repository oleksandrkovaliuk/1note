const GREETING_DOCUMENT_CONTENT = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: {
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "Welcome to Notion-like template ",
        },
      ],
    },
    {
      type: "blockquote",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              marks: [
                {
                  type: "bold",
                },
              ],
              text: " Invite your colleagues to make this fun! ",
            },
            {
              type: "hardBreak",
            },
            {
              type: "text",
              text: "Just copy the URL from your browser and share it – everyone with the link can join in and collaborate in real time.",
            },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Start writing your thoughts here …  ",
        },
        {
          type: "hardBreak",
        },
        {
          type: "text",
          text: "Try some ",
        },
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Markdown:",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: null,
      },
      content: [
        {
          type: "text",
          text: "# Headings\n- Lists\n> Quotes\n`Inline code`",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Or type ",
        },
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "/",
        },
        {
          type: "text",
          text: " to open the command menu and discover blocks, formatting, and hidden features.",
        },
      ],
    },
    {
      type: "horizontalRule",
    },
    {
      type: "heading",
      attrs: {
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "Make it yours",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Select text",
                },
                {
                  type: "text",
                  text: " to reveal a floating toolbar: ",
                },
                {
                  type: "hardBreak",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "italic",
                    },
                  ],
                  text: "Quickly italicize, ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "textStyle",
                      attrs: {
                        backgroundColor: "",
                        color: "var(--tt-color-text-blue)",
                        fontFamily: "",
                        fontSize: "",
                        lineHeight: "",
                      },
                    },
                    {
                      type: "italic",
                    },
                  ],
                  text: "color",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "italic",
                    },
                  ],
                  text: ", add ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "link",
                      attrs: {
                        href: "https://tiptap.dev/docs/ui-components/getting-started/overview",
                        target: "_blank",
                        rel: "noopener noreferrer nofollow",
                        class: null,
                      },
                    },
                    {
                      type: "italic",
                    },
                  ],
                  text: "links",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "italic",
                    },
                  ],
                  text: ", or highlight text just as you're used to..",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  marks: [
                    {
                      type: "bold",
                    },
                  ],
                  text: "Hover near any block",
                },
                {
                  type: "text",
                  text: " to reveal the context handle ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "⠿",
                },
                {
                  type: "hardBreak",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "italic",
                    },
                  ],
                  text: "Click to open the context menu (duplicate, delete, reset formatting, and more) or simply drag to move your content anywhere you like!",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Mention teammates with ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: "@",
                },
                {
                  type: "text",
                  text: " and add some fun with emoji ",
                },
                {
                  type: "text",
                  marks: [
                    {
                      type: "code",
                    },
                  ],
                  text: ":",
                },
                {
                  type: "text",
                  text: "  ",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Switch between  light and  dark mode – whatever fits your mood.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "blockquote",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              marks: [
                {
                  type: "bold",
                },
              ],
              text: "Need a spark?  ",
            },
            {
              type: "hardBreak",
            },
            {
              type: "text",
              text: "Summon the AI Assistant with ",
            },
            {
              type: "text",
              marks: [
                {
                  type: "code",
                },
              ],
              text: "/ask ai",
            },
            {
              type: "text",
              text: " from the context menu, or by selecting text and choosing ",
            },
            {
              type: "text",
              marks: [
                {
                  type: "code",
                },
              ],
              text: "Improve",
            },
            {
              type: "text",
              text: ".",
            },
            {
              type: "hardBreak",
            },
            {
              type: "text",
              text: "Polish your writing, or try a ready-made prompt—the AI menu appears with helpful suggestions.",
            },
          ],
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          text: "Checklist",
        },
      ],
    },
    {
      type: "taskList",
      content: [
        {
          type: "taskItem",
          attrs: {
            checked: true,
          },
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Read up to this point",
                },
              ],
            },
          ],
        },
        {
          type: "taskItem",
          attrs: {
            checked: false,
          },
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Try a slash command",
                },
              ],
            },
          ],
        },
        {
          type: "taskItem",
          attrs: {
            checked: false,
          },
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Mention someone",
                },
              ],
            },
          ],
        },
        {
          type: "taskItem",
          attrs: {
            checked: false,
          },
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Use the floating toolbar",
                },
              ],
            },
          ],
        },
        {
          type: "taskItem",
          attrs: {
            checked: false,
          },
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Add a color highlight",
                },
              ],
            },
          ],
        },
        {
          type: "taskItem",
          attrs: {
            checked: false,
          },
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Explore the context menu & drag blocks",
                },
              ],
            },
          ],
        },
        {
          type: "taskItem",
          attrs: {
            checked: false,
          },
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Ask the AI for help",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "horizontalRule",
    },
    {
      type: "heading",
      attrs: {
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "Developer quickstart",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Ready to build your own editor? Just run:",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: null,
      },
      content: [
        {
          type: "text",
          text: "npx @tiptap/cli init",
        },
      ],
    },
    {
      type: "blockquote",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              marks: [
                {
                  type: "bold",
                },
              ],
              text: "Did you know? ",
            },
            {
              type: "hardBreak",
            },
            {
              type: "text",
              text: "Many features here are powered by open-source Tiptap UI Components. Some advanced tools – like the AI Assistant, advanced color palettes, or context menus – are exclusive to paid users. ",
            },
            {
              type: "hardBreak",
            },
            {
              type: "hardBreak",
            },
            {
              type: "text",
              text: "Unlock even more possibilities by ",
            },
            {
              type: "text",
              marks: [
                {
                  type: "link",
                  attrs: {
                    href: "https://tiptap.dev/pricing",
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    class: null,
                  },
                },
              ],
              text: "upgrading your plan",
            },
            {
              type: "text",
              text: "!",
            },
          ],
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 3,
      },
      content: [
        {
          type: "text",
          text: "Short description",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Content blocks = Node Components",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "Toolbars, menus, and buttons = UI Components",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "horizontalRule",
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          text: "P.S.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "You’re using the Notion-like template, available for paid users.",
        },
      ],
    },
  ],
};

export { GREETING_DOCUMENT_CONTENT };
