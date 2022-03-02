export default {
  name: "review",
  title: "Reviews",
  type: "object",
  fields: [
    {
      name: "reviewDescription",
      title: "Review Description",
      type: "string",
    },
    {
      name: "traveller",
      title: "traveller",
      type: "traveller",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      options: {
        list: [
          { title: "5 star", value: 5 },
          { title: "4 star", value: 4 },
          { title: "3 star", value: 3 },
          { title: "2 star", value: 2 },
          { title: "1 star", value: 1 },
        ],
        layout: "radio",
      },
    },
  ],
//   preview: {
//     select: {
//       title: "traveller",
//       media: "image",
//     },
//   },
};
