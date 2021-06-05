import React from "react";

import SidebarPostImage1 from "../assets/images/blog/lp-1-1.jpg";
import SidebarPostImage2 from "../assets/images/blog/lp-1-2.jpg";
import SidebarPostImage3 from "../assets/images/blog/lp-1-3.jpg";

const BlogSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__single sidebar__search">
        <form action="#" className="sidebar__search-form">
          <input type="text" name="search" placeholder="Search here..." />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title">Latest Posts</h3>
        <div className="sidebar__post-wrap">
          <div className="sidebar__post__single">
            <div className="sidebar__post-image">
              <div className="inner-block">
                <img src={SidebarPostImage1} alt="awesome post" />
              </div>
            </div>
            <div className="sidebar__post-content">
              <h4 className="sidebar__post-title">
                <a href="#none">Pre launch Mobile App Marketing Pitfalls</a>
              </h4>
            </div>
          </div>
          <div className="sidebar__post__single">
            <div className="sidebar__post-image">
              <div className="inner-block">
                <img src={SidebarPostImage2} alt="awesome post" />
              </div>
            </div>
            <div className="sidebar__post-content">
              <h4 className="sidebar__post-title">
                <a href="#none">Pre launch Mobile App Marketing Pitfalls</a>
              </h4>
            </div>
          </div>
          <div className="sidebar__post__single">
            <div className="sidebar__post-image">
              <div className="inner-block">
                <img src={SidebarPostImage3} alt="awesome post" />
              </div>
            </div>
            <div className="sidebar__post-content">
              <h4 className="sidebar__post-title">
                <a href="#none">Pre launch Mobile App Marketing Pitfalls</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar__single sidebar__category">
        <h3 className="sidebar__title">Categories</h3>
        <ul className="sidebar__category-list">
          <li className="sidebar__category-list-item">
            <a href="#none">Business</a>
          </li>
          <li className="sidebar__category-list-item">
            <a href="#none">Introductions</a>
          </li>
          <li className="sidebar__category-list-item">
            <a href="#none">One Page Template</a>
          </li>
          <li className="sidebar__category-list-item">
            <a href="#none">Parallax Effects</a>
          </li>
          <li className="sidebar__category-list-item">
            <a href="#none">New Technologies</a>
          </li>
          <li className="sidebar__category-list-item">
            <a href="#none">Video Backgrounds</a>
          </li>
        </ul>
      </div>
      <div className="sidebar__single sidebar__tags">
        <h3 className="sidebar__title">Tags</h3>
        <ul className="sidebar__tags-list">
          <li className="sidebar__tags-list-item">
            <a href="#none">Business,</a>
          </li>
          <li className="sidebar__tags-list-item">
            <a href="#none">Agency,</a>
          </li>
          <li className="sidebar__tags-list-item">
            <a href="#none">Technology,</a>
          </li>
          <li className="sidebar__tags-list-item">
            <a href="#none">Parallax,</a>
          </li>
          <li className="sidebar__tags-list-item">
            <a href="#none">Innovative,</a>
          </li>
          <li className="sidebar__tags-list-item">
            <a href="#none">Professional,</a>
          </li>
          <li className="sidebar__tags-list-item">
            <a href="#none">Experience</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;
