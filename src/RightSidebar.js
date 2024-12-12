import React from 'react';
import './RightSidebar.css';

function RightSidebar() {
  return (
    <div className="rightSidebar">
      <h2>You Might Like</h2>
      <div className="rightSidebar__user">
        <img src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="Profile Picture" />
        <div>
          <h4>Radvan SkillaArena</h4>
          <p>Founder & CEO at Frighty</p>
        </div>
        <button>Follow</button>
      </div>
      {/* Add more user suggestions */}
      <h2>Recent Events</h2>
      <div className="rightSidebar__event">
        <h4>Graduation Ceremony</h4>
        <p>The graduation ceremony is also sometimes called...</p>
        <div className="rightSidebar__event__users">
          <img src="profilePic.jpg" alt="Profile Picture" />
          <img src="profilePic.jpg" alt="Profile Picture" />
          {/* Add more user avatars */}
        </div>
      </div>
      {/* Add more recent events */}
      <h2>Birthdays</h2>
      <div className="rightSidebar__birthday">
        <img src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="Profile Picture" />
        <div>
          <h4>Edison De Carvalho</h4>
          <p>Write on his inbox</p>
        </div>
      </div>
      {/* Add more birthdays */}
      <h2>Upcoming Birthdays</h2>
      {/* Add upcoming birthdays */}
    </div>
  );
}

export default RightSidebar;