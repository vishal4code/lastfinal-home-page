import React from 'react';
import './Feed.css';
import PostCard from './PostCard';

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <img src="https://avatar.iran.liara.run/public/18" alt="Profile Picture" />
        <input type="text" placeholder="What's happening?" />
        <button>Post</button>
      </div>
      <PostCard />
      {/* Add more PostCard components as needed */}
    </div>
  );
}

export default Feed;