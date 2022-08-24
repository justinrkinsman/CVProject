import React, { useState } from "react";

export function Education() {
    const [school, setSchool] = useState('')

    const changeSchool = () => {
      setSchool(document.getElementById('schoolInput').value)
    }

    const [field, setField] = useState('')

    const changeField = () => {
      setField(document.getElementById('fieldInput').value)
    }

    const [years, setYears] = useState('') 
    
    const changeYears = () => {
      setYears(document.getElementById('yearsInput').value)
    }

    const educationSubmission = (e) => {
      e.preventDefault()
      let input = document.getElementById('educationInput')
      input.classList.add('invisible')
      let completed = document.getElementById('educationCompleted')
      completed.classList.remove('invisible')
      let submit = document.getElementById('educationSubmit')
      submit.classList.add('invisible')
      let edit = document.getElementById('educationEdit')
      edit.classList.remove('invisible')
      changeSchool()
      changeField()
      changeYears()
    }

    const educationEdit = (e) => {
      e.preventDefault()
      let input = document.getElementById('educationInput')
      input.classList.remove('invisible')
      let completed = document.getElementById('educationCompleted')
      completed.classList.add('invisible')
      let submit = document.getElementById('educationSubmit')
      submit.classList.remove('invisible')
      let edit = document.getElementById('educationEdit')
      edit.classList.add('invisible')
      changeSchool()
      changeField()
      changeYears()
    }

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
            <button type="submit" id="educationSubmit" onClick={educationSubmission}>Submit</button>
          </form>
        </fieldset>
        <fieldset id="educationCompleted" className="invisible">
            <p>School: {school}</p>
            <p>Field of Study: {field}</p>
            <p>Year of Study: {years}</p>
            <button type="submit" id="educationEdit" className="invisible" onClick={educationEdit}>Edit</button>
          </fieldset>
        </>
    )
}