import React from 'react';
import './PostCard.css';

function PostCard() {
  return (
    <div className="postCard">
      <div className="postCard__header">
        <img src="https://avatar.iran.liara.run/public/18" alt="Profile Picture" />
        <div>
          <h4>Prafinidhi Thomas</h4>
          <p>1h . Public</p>
        </div>
      </div>
      <div className="postCard__body">
        <p>If you think adventure is dangerous, try routine. It's lethal. Paulo Coelho. Good morning all friends.</p>
        <img src="https://placehold.co/900x400" alt="Post Image" />
      </div>
      <div className="postCard__footer">
        <div className="postCard__footer__left">
          <i className="fas fa-thumbs-up"></i>
          <span>Like</span>
          <i className="fas fa-comment"></i>
          <span>Comment</span>
          <i className="fas fa-share"></i>
          <span>Share</span>
        </div>
        <div className="postCard__footer__right">
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <div className="postCard__header">
        <img src="https://avatar.iran.liara.run/public/18" alt="Profile Picture" />
        <div>
          <h4>Prafinidhi Thomas</h4>
          <p>1h . Public</p>
        </div>
      </div>
      <div className="postCard__body">
        <p>If you think adventure is dangerous, try routine. It's lethal. Paulo Coelho. Good morning all friends.</p>
        <img src="https://placehold.co/900x400" alt="Post Image" />
      </div>
      <div className="postCard__footer">
        <div className="postCard__footer__left">
          <i className="fas fa-thumbs-up"></i>
          <span>Like</span>
          <i className="fas fa-comment"></i>
          <span>Comment</span>
          <i className="fas fa-share"></i>
          <span>Share</span>
        </div>
        <div className="postCard__footer__right">
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
      
      
    </div>

    
  );
}

export default PostCard;