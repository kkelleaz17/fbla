import React from 'react';
import '../css/Faq.css'; // Importing the CSS file for the Faq component
import FaqAnswers from '../util/FaqAnswers.json'; // Importing the FaqAnswers data from a JSON file

export default function Faq() {
  return (
    <div className="faq-master-container">
      <div className="faq-container">
        <h1 className='FAQ-header'>Frequently Asked Questions</h1> {/* Displaying a heading */}
        <div className="faq-list">
          {FaqAnswers.map((item, index) => (
            <div key={index} className="faq-item active"> {/* Rendering an FAQ item */}
              <div className="faq-question-box">
                <h3 className="faq-question">{item.question}</h3> {/* Displaying the question */}
              </div>
              <div className="faq-answer-box">
                <p className="faq-answer">{item.answer}</p> {/* Displaying the answer */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}