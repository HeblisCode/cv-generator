import React from "react";
import { InputElement } from "./inputElement";

class GeneralInfos extends React.Component {
  bindClick() {
    const inputElement = document.querySelector(".photoButton");
    inputElement.click();
  }

  render() {
    const { changeHandler, addPhoto } = this.props;

    return (
      <div className="formSection">
        <div className="formSectionTitle">
          <h2>General Infos</h2>
          <input
            type="file"
            className="photoButton"
            onChange={addPhoto}
            accept=".jpg, .jpeg, .png"
          ></input>
          <button onClick={this.bindClick}>Add Photo</button>
        </div>
        <div className="formSubsection">
          <InputElement changeHandler={changeHandler} name="name" />
          <InputElement changeHandler={changeHandler} name="surname" />
          <InputElement changeHandler={changeHandler} name="qualification" />
          <InputElement changeHandler={changeHandler} name="address" />
          <InputElement changeHandler={changeHandler} name="email" />
          <InputElement changeHandler={changeHandler} name="telephone" />
        </div>
      </div>
    );
  }
}

export default GeneralInfos;
