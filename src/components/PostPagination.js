import React from "react";

const PostPagination = (props) => {
  return (
    <div className="post-pagination">
      <a href="#none">
        <i className="far fa-angle-left"></i>
      </a>
      <a href="#none" className="active">
        1
      </a>
      <a href="#none">2</a>
      <a href="#none">3</a>
      <a href="#none">
        <i className="far fa-angle-right"></i>
      </a>
    </div>
  );
};

export default PostPagination;
