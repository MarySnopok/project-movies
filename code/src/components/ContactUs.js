import React from "react";

// thought to be fun to have one extra page to "fake" navbar

export const ContactUs = () => {
  return (
    <div className="contact-us">
      <a className="github-link" href="https://github.com/MarySnopok" target="_blank" rel="noopener noreferrer">
        <span>Mary Snopok</span>
      </a>
      <span>&</span>
      <a className="github-link" href="https://github.com/madeleinesvensson" target="_blank" rel="noopener noreferrer">
        <span>Madeleine Svensson</span>
      </a>
    </div>
  );
};
