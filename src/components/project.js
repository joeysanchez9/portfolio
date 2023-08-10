import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGlobe } from '@fortawesome/free-solid-svg-icons'; 
import textEditorImage from '../images/texteditor.png';
import bookSpeakImage from '../images/bookspeak.png';


export default function Projects() {
  
    
  return (
    <div>
      <h1>Projects</h1>
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={bookSpeakImage} className="img-fluid rounded-start" alt="text editor pic" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Social Thoughts</h5>
              <p className="card-text"><p>Social Thoughts is a social media application that allows users to share their thoughts and ideas about books they have read.</p>
                <a href="https://github.com/joeysanchez9/SocialThoughts" className="card-link">
                  <FontAwesomeIcon icon={faCode} size="xs" style={{ color: "#0ff4c6" }} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={textEditorImage} className="img-fluid rounded-start" alt="text editor pic" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Note-Taker</h5>
              <p className="card-text">Note Taker notes.</p>
              <p>
                <a href="https://github.com/joeysanchez9/Note-Taker" className="card-link">
                  <FontAwesomeIcon icon={faCode} size="xs" style={{ color: "#0ff4c6" }} />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}