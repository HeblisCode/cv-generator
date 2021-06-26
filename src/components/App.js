import "./App.css";
import React from "react";
import Form from "./Form/Form";
import Navbar from "./Navbar";
import Preview from "./Preview/Preview";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfos: {
        name: "",
        surname: "",
        qualification: "",
        telephone: "",
        address: "",
        email: "",
      },
      works: [],
      educations: [],
    };

    this.generalInfosChange = this.generalInfosChange.bind(this);
    this.educationsChange = this.educationsChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.worksChange = this.worksChange.bind(this);
    this.addWork = this.addWork.bind(this);
    this.deleteWork = this.deleteWork.bind(this);
  }

  generalInfosChange(e) {
    this.setState({
      generalInfos: {
        ...this.state.generalInfos,
        [e.target.name]: e.target.value,
      },
    });
  }

  //EDUCATION EVENT HANDLERS************************************************
  educationsChange(e) {
    this.setState({
      educations: this.state.educations.map((educ) => {
        if (educ.id === e.target.dataset.id) {
          return {
            ...educ,
            [e.target.name]: e.target.value,
          };
        }
        return educ;
      }),
    });
  }

  addEducation() {
    this.setState({
      educations: [
        ...this.state.educations,
        {
          university: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
          id: "educID" + Math.floor(Math.random() * 99999).toString(),
        },
      ],
    });
  }

  deleteEducation(e) {
    this.setState({
      educations: this.state.educations.filter((educ) => {
        return educ.id !== e.target.dataset.id;
      }),
    });
  }

  //WORKS EVENT HANDLERS************************************************
  addWork() {
    this.setState({
      works: [
        ...this.state.works,
        {
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
          id: "workID" + Math.floor(Math.random() * 99999).toString(),
        },
      ],
    });
  }

  deleteWork(e) {
    this.setState({
      works: this.state.works.filter((work) => {
        return work.id !== e.target.dataset.id;
      }),
    });
  }

  worksChange(e) {
    this.setState({
      works: this.state.works.map((work) => {
        if (work.id === e.target.dataset.id) {
          return {
            ...work,
            [e.target.name]: e.target.value,
          };
        }
        return work;
      }),
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Form
          generalInfoChangeHandler={this.generalInfosChange}
          educationsChange={this.educationsChange}
          educationsArray={this.state.educations}
          addEducation={this.addEducation}
          deleteEducation={this.deleteEducation}
          worksArray={this.state.works}
          worksChange={this.worksChange}
          addWork={this.addWork}
          deleteWork={this.deleteWork}
        />
        <Preview
          generalInfos={this.state.generalInfos}
          educations={this.state.educations}
          works={this.state.works}
        />
      </div>
    );
  }
}

export default App;
