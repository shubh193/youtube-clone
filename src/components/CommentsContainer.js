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
    replies: [], // Make sure all replies are arrays, not strings.
  },
];

// Single Comment Component
const Comment = ({ data }) => {
  const { name, text } = data;
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

// Component to render list of comments and their replies
const CommentsList = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          {/* Recursively render replies only if they exist and are an array */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="ml-5 border border-l-black pl-5">
              <CommentsList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

// Main Comments Container
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
