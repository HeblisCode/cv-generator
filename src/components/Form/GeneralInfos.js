import React from "react";
import { InputElement } from "./inputElement";

class GeneralInfos extends React.Component {
  render() {
    const { changeHandler } = this.props;

    return (
      <div className="formSection">
        <h2 className="sectionTitle">General Infos</h2>
        <InputElement changeHandler={changeHandler} name="name" />
        <InputElement changeHandler={changeHandler} name="surname" />
        <InputElement changeHandler={changeHandler} name="address" />
        <InputElement changeHandler={changeHandler} name="email" />
        <InputElement changeHandler={changeHandler} name="telephone" />
        <InputElement changeHandler={changeHandler} name="qualification" />
      </div>
    );
  }
}

export default GeneralInfos;
