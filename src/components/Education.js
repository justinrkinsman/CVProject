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
    }

    render(){
        return(
            <fieldset id="educationInput">
              <legend>Education</legend>
              <form>
                <div id="schoolForm">
                  <label htmlFor="schoolInput">School: 
                    <input type="text" name="schoolInput" id="schoolInput"></input>
                  </label>
                </div>
                <div id="programForm">
                  <label htmlFor="programInput">Area of Study:                 
                    <input type="text" name="programInput" id="programInput"></input>
                  </label>
                </div>
                <div id="yearForm">
                  <label htmlFor="yearInput">Year of Study: 
                    <input type="text" name="yearInput" id="yearInput"></input>
                  </label>
                </div>
                <button type="submit" onClick={this.educationSubmission}>Submit</button>
                <button type="edit" className="invisible" >Edit</button>
              </form>
            </fieldset>
        )
    }
}