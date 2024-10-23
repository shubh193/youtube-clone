import React from "react";

const CommentsData = [
  {
    name: "Shubham Sahni",
    text: "Lorem ipsum dolor sit amet.",
    replies: [],
  },
  {
    name: "Shubham Sahni",
    text: "Lorem ipsum dolor sit amet.",
    replies: [
      {
        name: "Shubham Sahni",
        text: "Lorem ipsum dolor sit amet.",
        replies: [
          {
            name: "Shubham Sahni",
            text: "Lorem ipsum dolor sit amet.",
            replies: [
              {
                name: "Shubham Sahni",
                text: "Lorem ipsum dolor sit amet.",
                replies: [
                  {
                    name: "Shubham Sahni",
                    text: "Lorem ipsum dolor sit amet.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Shubham Sahni",
    text: "Lorem ipsum dolor sit amet.",
    replies: ["shubham"],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex my-4 ml-5 shadow-sm bg-gray-100 p-2 rounded-lg">
      <img
        className="w-10 h-10"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentsList = () => {};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments</h1>
      <Comment data={CommentsData[0]} />
    </div>
  );
};

export default CommentsContainer;
