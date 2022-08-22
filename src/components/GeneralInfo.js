import React, { Component } from "react"

export class GeneralInformation extends Component {
    constructor(){
        super()
    }

    generalInfoSubmission = (e) => {
      e.preventDefault()
    }

    render(){
        return(
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
        )
    }
}