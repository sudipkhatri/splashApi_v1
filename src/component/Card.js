import React from 'react'
import './card.css';

const Card = ({like, url, user }) => {
  return (
    <div className="splash_container">
      <div className="fetched_data">
        <img src={url.small} alt="img" />

        {/* <p>
          Likes:
          <span>{like}</span>
        </p>
        <p>
          User:
          <img
            className="user_profile"
            src={user.profile_image.small}
            alt="user profile"
          />
        </p> */}
      </div>
    </div>
  );
}

export default Card
