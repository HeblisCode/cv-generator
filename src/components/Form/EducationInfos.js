import React from "react";
import { InputElement } from "./inputElement";

class EducationInfos extends React.Component {
  render() {
    const { changeHandler, educationsArray, addEducation, deleteEducation } =
      this.props;

    return (
      <div className="formSection">
        <h2 className="sectionTitle">Educations</h2>
        {educationsArray.map((educ) => {
          return (
            <div className="formSubsection" key={educ.id}>
              <button onClick={deleteEducation} data-id={educ.id}>
                Delete
              </button>
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
        <button onClick={addEducation}>Add Education</button>
      </div>
    );
  }
}

export default EducationInfos;
