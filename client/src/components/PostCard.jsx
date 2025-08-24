// /client/src/components/PostCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// A helper function to format the date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

function PostCard({ post }) {
  // Use a default image if featured_image_url is not available
  const imageUrl = post.featured_image_url || '/assets/img/post-landscape-1.jpg';

  return (
    <div className="post-entry-1">
      <Link to={`/post/${post.slug}`}>
        <img src={imageUrl} alt="" className="img-fluid" />
      </Link>
      <div className="post-meta">
        <span className="date">{post.category_name || 'Uncategorized'}</span>
        <span className="mx-1">&bullet;</span>
        <span>{formatDate(post.created_at)}</span>
      </div>
      <h2>
        <Link to={`/post/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="mb-4 d-block">{post.excerpt}...</p>
      <div className="d-flex align-items-center author">
        <div className="photo">
          {/* Add author profile picture later */}
          <img src="/assets/img/person-1.jpg" alt="" className="img-fluid" />
        </div>
        <div className="name">
    {/* WRAP THIS H3 WITH A LINK */}
    <Link to={`/author/${post.author_id}`}>
      <h3 className="m-0 p-0">{post.author_name || 'Anonymous'}</h3>
    </Link>
  </div>
      </div>
    </div>
  );
}

export default PostCard;