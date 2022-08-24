import React, { useState } from "react"

export function PracticalExperience() {
    const [company, setCompany] = useState('')

    const changeCompany = () => {
      setCompany(document.getElementById('companyInput').value)
    }

    const [title, setTitle] = useState('')

    const changeTitle = () => {
      setTitle(document.getElementById('titleInput').value)
    }

    const [task, setTask] = useState('')

    const changeTask = () => {
      setTask(document.getElementById('tasksInput').value)
    }

    const [years, setYears] = useState('')

    const changeYears = () => {
      setYears(document.getElementById('dateInput').value)
    }

    const practicalExperienceSubmission = (e) => {
      e.preventDefault()
      let input = document.getElementById('practicalExperienceInput')
      input.classList.add('invisible')
      let completed = document.getElementById('practicalExperienceCompleted')
      completed.classList.remove('invisible')
      let submit = document.getElementById('practicalExperienceSubmit')
      submit.classList.add('invisible')
      let edit = document.getElementById('practicalExperienceEdit')
      edit.classList.remove('invisible')
      changeCompany()
      changeTitle()
      changeTask()
      changeYears()
    }

    const practicalExperienceEdit = (e) => {
      e.preventDefault()
      let input = document.getElementById('practicalExperienceInput')
      input.classList.remove('invisible')
      let completed = document.getElementById('practicalExperienceCompleted')
      completed.classList.add('invisible')
      let submit = document.getElementById('practicalExperienceSubmit')
      submit.classList.remove('invisible')
      let edit = document.getElementById('practicalExperienceEdit')
      edit.classList.add('invisible')
      changeCompany()
      changeTitle()
      changeTask()
      changeYears()
    }

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
            <button type="submit" id="practicalExperienceSubmit" onClick={practicalExperienceSubmission}>Submit</button>
          </form>
        </fieldset>
        <fieldset id="practicalExperienceCompleted" className='invisible'>
            <p>Company: {company}</p>
            <p>Job Title: {title}</p>
            <p>Job Tasks: {task}</p>
            <p>Years Employed: {years}</p>
            <button type="submit" id="practicalExperienceEdit" className="invisible" onClick={practicalExperienceEdit}>Edit</button>
        </fieldset>
        </>
    )
}