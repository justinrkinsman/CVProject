import React, { Component } from 'react'

export class PracticalExperience extends Component{
    constructor(){
        super()
        this.state = {
            company: '',
            title: '',
            task: '',
            years: '',
          }
    }

    practicalExperienceSubmission = (e) => {
      e.preventDefault()
      let input = document.getElementById('practicalExperienceInput')
      input.classList.add('invisible')
      let completed = document.getElementById('practicalExperienceCompleted')
      completed.classList.remove('invisible')
      let submit = document.getElementById('practicalExperienceSubmit')
      submit.classList.add('invisible')
      let edit = document.getElementById('practicalExperienceEdit')
      edit.classList.remove('invisible')
      this.changeCompany()
      this.changeTitle()
      this.changeTask()
      this.changeYears()
      }

      practicalExperienceEdit = (e) => {
        e.preventDefault()
        let input = document.getElementById('practicalExperienceInput')
        input.classList.remove('invisible')
        let completed = document.getElementById('practicalExperienceCompleted')
        completed.classList.add('invisible')
        let submit = document.getElementById('practicalExperienceSubmit')
        submit.classList.remove('invisible')
        let edit = document.getElementById('practicalExperienceEdit')
        edit.classList.add('invisible')
        this.changeCompany()
        this.changeTitle()
        this.changeTask()
        this.changeYears()
        }

      changeCompany() {
        this.setState({
          company: document.getElementById('companyInput').value
        })
      }
  
      changeTitle() {
        this.setState({
          title: document.getElementById('titleInput').value
        })
      }
  
      changeTask() {
        this.setState({
            task: document.getElementById('tasksInput').value
        })
      }

      changeYears() {
        this.setState({
          years: document.getElementById('dateInput').value
        })
      }

    render(){
        return(
            <>
            <fieldset id="practicalExperienceInput">
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
                <button type="submit" id="practicalExperienceSubmit" onClick={this.practicalExperienceSubmission}>Submit</button>
              </form>
            </fieldset>
            <fieldset id="practicalExperienceCompleted" className='invisible'>
                <p>Company: {this.state.company}</p>
                <p>Job Title: {this.state.title}</p>
                <p>Job Tasks: {this.state.task}</p>
                <p>Years Employed: {this.state.years}</p>
                <button type="submit" id="practicalExperienceEdit" className="invisible" onClick={this.practicalExperienceEdit}>Edit</button>
            </fieldset>
            </>
        )
    }
}