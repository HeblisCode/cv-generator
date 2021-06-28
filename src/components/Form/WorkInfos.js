import React from "react";
import { InputElement } from "./inputElement";

class WorkInfos extends React.Component {
  render() {
    const { changeHandler, worksArray, addWork, deleteWork } = this.props;

    return (
      <div className="formSection">
        <div className="formSectionTitle">
          <h2>Work Experience</h2>
        </div>
        {worksArray.map((work, i) => {
          return (
            <div className="formSubsection" key={work.id}>
              <div className="formSubsectionTitle">
                <h3>Work Experience {i + 1}</h3>
                <span
                  className="material-icons materialButton"
                  id="test"
                  onClick={deleteWork}
                  data-id={work.id}
                >
                  clear
                </span>
              </div>
              <InputElement
                changeHandler={changeHandler}
                name="position"
                id={work.id}
              />
              <InputElement
                changeHandler={changeHandler}
                name="company"
                id={work.id}
              />
              <InputElement
                changeHandler={changeHandler}
                name="city"
                id={work.id}
              />
              <InputElement
                changeHandler={changeHandler}
                name="from"
                id={work.id}
              />
              <InputElement
                changeHandler={changeHandler}
                name="to"
                id={work.id}
              />
            </div>
          );
        })}
        <span className="material-icons materialButton" onClick={addWork}>
          add
        </span>
      </div>
    );
  }
}

export default WorkInfos;
