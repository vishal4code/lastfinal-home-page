import React from 'react';
import './LeftSidebar.css';

function LeftSidebar() {
  return (
    <div className="leftSidebar">
      <ul>
        <li>
          <i className="fas fa-home"></i>
          <a href="https://investorshub.netlify.app/"><span>HOME</span></a>
        </li>
        <li>
          <i className="fas fa-envelope"></i>
          <a href="https://openaicompany.netlify.app/"><span>COMPANIES</span></a>
          
        </li>
        <li>
          <i className="fas fa-bell"></i>
          <a href="https://companiespage.netlify.app/"><span>INVESTORS</span></a>
        </li>
        <li>
          <i className="fas fa-bell"></i>
          <a href="https://kagaarchatbox.netlify.app/"><span>CHATS</span></a>
        </li>
        <li>
          <i className="fas fa-envelope"></i>
          <a href="https://investorhubblog.netlify.app/"><span>BLOG</span></a>
        </li>
        <li>
          <i className="fas fa-bell"></i>
          <a href="https://cool-creponne-f6b6d4.netlify.app/"><span>JOB PILOT</span></a>
        </li>
        <li>
          <i className="fas fa-envelope"></i>
          <a href="https://investorprofilepage.netlify.app/"><span>PROFILE</span></a>

        </li>
        <li>
          <i className="fas fa-envelope"></i>
          <a href="your-link-here"><span>SETTINGS</span></a>

        </li>
        <li>
          <i className="fas fa-envelope"></i>
          <a href="your-link-here"><span>SIGN OUT</span></a>

        </li>
 
 
        {/* Add more items as needed */}
      </ul>
    </div>
  );
}

export default LeftSidebar;