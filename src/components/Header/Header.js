import "./Header.css";
import React from "react";
import ReactToPrint from "react-to-print";

class Header extends React.Component {
  render() {
    const { reset, content } = this.props;

    return (
      <header>
        <h1>CV - Generator</h1>
        <div className="buttonContainer">
          <button onClick={reset}>Reset</button>
          <ReactToPrint
            trigger={() => {
              return <button>PDF</button>;
            }}
            documentTitle="CV"
            content={content}
            copyStyles="true"
          />
          <form action="https://github.com/HeblisCode/cv-generator">
            <button>GitHub</button>
          </form>
        </div>
      </header>
    );
  }
}

export default Header;
