import React, { Component } from "react"
import './App.css'

export class App extends Component {
  constructor(){
    super()

    /*this.state goes here*/
  }

  /*functions go here */

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
                  <label htmlFor="nameInput">Name: </label>
                  <input type="text" name="nameInput" id="nameInput"></input>
                </div>
                <div id="emailForm">
                  <label htmlFor="emailInput">Email: </label>
                  <input type="text" name="emailInput" id="emailInput"></input>
                </div>
                <div id="phoneForm">
                  <label htmlFor="phoneInput">Phone: </label>
                  <input type="text" name="phoneInput" id="phoneInput"></input>
                </div>
                <button type="submit">Submit</button>
                <button type="edit" className="invisible" >Edit</button>
              </form>
            </fieldset>
            <fieldset>
              <legend>Education</legend>
              <form>
                <div id="schoolForm">
                  <label htmlFor="schoolInput">School: </label>
                  <input type="text" name="schoolInput" id="schoolInput"></input>
                </div>
                <div id="programForm">
                  <label htmlFor="programInput">Area of Study: </label>
                  <input type="text" name="programInput" id="programInput"></input>
                </div>
                <div id="yearForm">
                  <label htmlFor="yearInput">Year of Study: </label>
                  <input type="text" name="yearInput" id="yearInput"></input>
                </div>
                <button type="submit">Submit</button>
                <button type="edit" className="invisible" >Edit</button>
              </form>
            </fieldset>
            <fieldset>
              <legend>Practical Experience</legend>
              <form>
                <div id="companyForm">
                  <label htmlFor="companyInput">Company: </label>
                  <input type="text" name="companyInput" id="companyInput"></input>
                </div>
                <div id="titleForm">
                  <label htmlFor="titleInput">Job Title: </label>
                  <input type="text" name="titleInput" id="titleInput"></input>
                </div>
                <div id="tasksForm">
                  <label htmlFor="tasksInput">Job Tasks: </label>
                  <input type="text" name="tasksInput" id="tasksInput"></input>
                </div>
                <div id="dateForm">
                  <label htmlFor="dateInput">Years Employed: </label>
                  <input type="text" name="dateInput" id="dateInput"></input>
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