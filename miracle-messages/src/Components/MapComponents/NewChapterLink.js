import React from "react";

import "./NewChapter.scss";

class NewChapterLink extends React.Component {
  render() {
    return (
      <div className="banner">
        <p>
          Don't see your city listed? We'd love your help bringing Miracle
          Messages to your community!
        </p>
        <a
          href="http://localhost:3000/user/newchapter"
          target="_blank"
          rel="noopener noreferrer"
        >
          GET STARTED
        </a>
      </div>
    );
  }
}

export default NewChapterLink;
