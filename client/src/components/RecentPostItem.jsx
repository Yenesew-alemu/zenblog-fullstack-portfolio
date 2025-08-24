// /client/src/components/RecentPostItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Helper function to format the date
const formatDate = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
};

function RecentPostItem({ post }) {
  return (
    <div className="post-item mt-3">
      <img 
        src={post.featured_image_url || '/assets/img/post-landscape-default.jpg'} 
        alt={post.title || ''} 
        className="flex-shrink-0" // This class is important for the template's sidebar styling
      />
      <div>
        <h4><Link to={`/post/${post.slug}`}>{post.title}</Link></h4>
        <time dateTime={post.created_at}>{formatDate(post.created_at)}</time>
      </div>
    </div>
  );
}

export default RecentPostItem;
