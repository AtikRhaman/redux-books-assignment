import React from "react";

const BookDetails = ({ book }) => {
  if (book == null) {
    return <p>Select Book for more info:</p>;
  }
  const { title, author, content } = book;
  return (
    <div className="book-details">
      <h1>{title.toUpperCase()}</h1>
      <h3>{author}</h3>
      <p className="content">{content}</p>
    </div>
  );
};

export default BookDetails;
