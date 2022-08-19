import React, { Component } from "react"
import './App.css'

export class App extends Component {
  constructor(){
    super()

    /*this.state goes here*/
  }

  generalInfoSubmission = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <>
        <div id="fullApp">
          <h1>CV Application</h1>
          <fieldset id="outerLayer">
            <fieldset>
              <legend>General Information</legend>
              <form id="generalInfo">
                <div id="nameForm">
                  <label htmlFor="nameInput">Name:
                    <input type="text" name="nameInput" id="nameInput"></input>
                  </label>                
                </div>
                <div id="emailForm">
                  <label htmlFor="emailInput">Email: 
                    <input type="text" name="emailInput" id="emailInput"></input>
                  </label>
                </div>
                <div id="phoneForm">
                  <label htmlFor="phoneInput">Phone: 
                    <input type="text" name="phoneInput" id="phoneInput"></input>
                  </label>
                </div>
                <button type="submit" onClick={this.generalInfoSubmission}>Submit</button>
                <button type="edit" className="invisible" >Edit</button>
              </form>
            </fieldset>
            <fieldset>
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
                <button type="submit">Submit</button>
                <button type="edit" className="invisible" >Edit</button>
              </form>
            </fieldset>
            <fieldset>
              <legend>Practical Experience</legend>
              <form>
                <div id="companyForm">
                  <label htmlFor="companyInput">Company: 
                    <input type="text" name="companyInput" id="companyInput"></input>
                  </label>                
                </div>
                <div id="titleForm">
                  <label htmlFor="titleInput">Job Title: 
                    <input type="text" name="titleInput" id="titleInput"></input>
                  </label>                
                </div>
                <div id="tasksForm">
                  <label htmlFor="tasksInput">Job Tasks: 
                    <input type="text" name="tasksInput" id="tasksInput"></input>
                  </label>                
                </div>
                <div id="dateForm">
                  <label htmlFor="dateInput">Years Employed: 
                    <input type="text" name="dateInput" id="dateInput"></input>
                  </label>                
                </div>
                <button type="submit">Submit</button>
                <button type="edit" className="invisible" >Edit</button>
              </form>
            </fieldset>
          </fieldset>
        </div>
      </>
    )
  }
}