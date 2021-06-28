import "./Header.css";
import React from "react";

class Header extends React.Component {
  render() {
    const { reset } = this.props;
    return (
      <header>
        <h1>CV - Generator</h1>
        <div className="buttonContainer">
          <button onClick={reset}>Reset</button>
          <button>PDF</button>
        </div>
      </header>
    );
  }
}

export default Header;
