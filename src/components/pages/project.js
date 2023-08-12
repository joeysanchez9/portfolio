import React from 'react';
import justanothernoteImage from '../../images/text.png';
import socialImage from '../../images/social.png';


export default function Projects() {
  
    
  return (
    <div>
      <h1>Projects</h1>
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={socialImage} className="img-fluid rounded-start" alt="social pic" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Social Thoughts</h5>
              <p className="card-text"><p>Social Thoughts is a social media application that allows users to share their thoughts and ideas about books they have read.</p>
                <a href="https://github.com/joeysanchez9/SocialThoughts" className="card-link">
                  
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={justanothernoteImage} className="img-fluid rounded-start" alt="text editor pic" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Justanothernote</h5>
              <p className="card-text">Just another note is a progressive web application that allows a user to install a web application, edit text, and save notes.</p>
              <p>
                <a href="https://github.com/joeysanchez9/justanothernote" className="card-link">
                  
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}