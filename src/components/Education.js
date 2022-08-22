import React, { Component } from "react";

export class Education extends Component {
    constructor(){
        super()
        this.state = {
          school: '',
          field: '',
          years: '',
        }
    }

    educationSubmission = (e) => {
      e.preventDefault()
      let input = document.getElementById('educationInput')
      input.classList.add('invisible')
      let completed = document.getElementById('educationCompleted')
      completed.classList.remove('invisible')
      let submit = document.getElementById('educationSubmit')
      submit.classList.add('invisible')
      let edit = document.getElementById('educationEdit')
      edit.classList.remove('invisible')
      this.changeSchool()
      this.changeField()
      this.changeYears()
    }

    changeSchool() {
      this.setState({
        school: document.getElementById('schoolInput').value
      })
    }

    changeField() {
      this.setState({
        field: document.getElementById('programInput').value
      })
    }

    changeYears() {
      this.setState({
        years: document.getElementById('yearInput').value
      })
    }

    render(){
        return(
            <>
            <fieldset id="educationInput">
              <legend>Education</legend>
              <form>
                <div id="schoolForm">
                  <label htmlFor="schoolInput">School: 
                    <input type="text" name="schoolInput" id="schoolInput"></input>
                  </label>
                </div>
                <div id="programForm">
                  <label htmlFor="programInput">Field of Study:                 
                    <input type="text" name="programInput" id="programInput"></input>
                  </label>
                </div>
                <div id="yearForm">
                  <label htmlFor="yearInput">Year of Study: 
                    <input type="text" name="yearInput" id="yearInput"></input>
                  </label>
                </div>
                <button type="submit" id="educationSubmit" onClick={this.educationSubmission}>Submit</button>
              </form>
            </fieldset>
            <fieldset id="educationCompleted" className="invisible">
                <p>School: {this.state.school}</p>
                <p>Field of Study: {this.state.field}</p>
                <p>Year of Study: {this.state.years}</p>
                <button type="submit" id="educationEdit" className="invisible" >Edit</button>
              </fieldset>
            </>
        )
    }
}