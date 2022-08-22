import React, { Component } from 'react'

export class PracticalExperience extends Component{
    constructor(){
        super()
    }

    practicalExperienceSubmission = (e) => {
        e.preventDefault()
      }

    render(){
        return(
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
                <button type="submit" onClick={this.practicalExperienceSubmission}>Submit</button>
                <button type="edit" className="invisible" >Edit</button>
              </form>
            </fieldset>
        )
    }
}