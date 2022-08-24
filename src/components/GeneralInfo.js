import React, { useState } from "react"

export function GeneralInformation() {
    const [name, setName] = useState('')
    
    const changeName = () => {
      setName(document.getElementById('nameInput').value)
    }

    const [email, setEmail] = useState('')

    const changeEmail = () => {
      setEmail(document.getElementById('emailInput').value)
    }

    const [phone, setPhone] = useState('')

    const changePhone = () => {
      setPhone(document.getElementById('phoneInput').value)
    }

    const generalInfoSubmission = (e) => {
      e.preventDefault()
      let input = document.getElementById('generalInformationInput')
      input.classList.add('invisible')
      let completed = document.getElementById('generalInformationCompleted')
      completed.classList.remove('invisible')
      let submit = document.getElementById('generalInfoSubmit')
      submit.classList.add('invisible')
      let edit = document.getElementById('generalInfoEdit')
      edit.classList.remove('invisible')
      changeName()
      changeEmail()
      changePhone()
    }

    const generalInfoEdit = (e) => {
      let input = document.getElementById('generalInformationInput')
      input.classList.remove('invisible')
      let completed = document.getElementById('generalInformationCompleted')
      completed.classList.add('invisible')
      let submit = document.getElementById('generalInfoSubmit')
      submit.classList.remove('invisible')
      let edit = document.getElementById('generalInfoEdit')
      edit.classList.add('invisible')
    }

    return(
        <>
          <fieldset id="generalInformationInput">
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
              <button type="submit" id="generalInfoSubmit" onClick={generalInfoSubmission}>Submit</button>
            </form>
          </fieldset>
          <fieldset id="generalInformationCompleted" className="invisible">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <button type="submit" id="generalInfoEdit" className="invisible" onClick={generalInfoEdit}>Edit</button>
          </fieldset>
        </>
    )
  }

/* Class Component
export class GeneralInformation extends Component {
    state = {
      name: '',
      email: '',
      phone: '',
    };

    generalInfoSubmission = (e) => {
      e.preventDefault()
      let input = document.getElementById('generalInformationInput')
      input.classList.add('invisible')
      let completed = document.getElementById('generalInformationCompleted')
      completed.classList.remove('invisible')
      let submit = document.getElementById('generalInfoSubmit')
      submit.classList.add('invisible')
      let edit = document.getElementById('generalInfoEdit')
      edit.classList.remove('invisible')
      this.changeName()
      this.changeEmail()
      this.changePhone()
    }

    generalInfoEdit = (e) => {
      let input = document.getElementById('generalInformationInput')
      input.classList.remove('invisible')
      let completed = document.getElementById('generalInformationCompleted')
      completed.classList.add('invisible')
      let submit = document.getElementById('generalInfoSubmit')
      submit.classList.remove('invisible')
      let edit = document.getElementById('generalInfoEdit')
      edit.classList.add('invisible')
    }

    changeName() {
      this.setState({
        name: document.getElementById('nameInput').value
      })
    }

    changeEmail() {
      this.setState({
        email: document.getElementById('emailInput').value
      })
    }

    changePhone() {
      this.setState({
        phone: document.getElementById('phoneInput').value
      })
    }

    render(){
        return(
            <>
              <fieldset id="generalInformationInput">
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
                  <button type="submit" id="generalInfoSubmit" onClick={this.generalInfoSubmission}>Submit</button>
                </form>
              </fieldset>
              <fieldset id="generalInformationCompleted" className="invisible">
                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
                <p>Phone: {this.state.phone}</p>
                <button type="submit" id="generalInfoEdit" className="invisible" onClick={this.generalInfoEdit}>Edit</button>
              </fieldset>
            </>
        )
    }
}
*/