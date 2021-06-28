import React from "react";
import { InputElement } from "./inputElement";

class EducationInfos extends React.Component {
  render() {
    const { changeHandler, educationsArray, addEducation, deleteEducation } =
      this.props;

    return (
      <div className="formSection">
        <div className="formSectionTitle">
          <h2>Education</h2>
        </div>
        {educationsArray.map((educ, i) => {
          return (
            <div className="formSubsection" key={educ.id}>
              <div className="formSubsectionTitle">
                <h3>Education {i + 1}</h3>
                <span
                  className="material-icons materialButton"
                  onClick={deleteEducation}
                  data-id={educ.id}
                >
                  clear
                </span>
              </div>
              <InputElement
                changeHandler={changeHandler}
                name="university"
                id={educ.id}
              />
              <InputElement
                changeHandler={changeHandler}
                name="degree"
                id={educ.id}
              />
              <InputElement
                changeHandler={changeHandler}
                name="subject"
                id={educ.id}
              />
              <InputElement
                changeHandler={changeHandler}
                name="from"
                id={educ.id}
              />
              <InputElement
                changeHandler={changeHandler}
                name="to"
                id={educ.id}
              />
            </div>
          );
        })}
        <span className="material-icons materialButton" onClick={addEducation}>
          add
        </span>
      </div>
    );
  }
}

export default EducationInfos;
