import React, { Component } from "react"
import { useState } from 'react'
import * as ReactDOM from 'react-dom'

export class GeneralInformation extends Component {
    constructor(){
        super()
        this.state = {
          name: '',
          email: '',
          phone: '',
        };

        this.setState = this.setState.bind(this)
    }

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
                  <button type="submit" id="generalInfoEdit" className="invisible" >Edit</button>
                </form>
              </fieldset>
              <fieldset id="generalInformationCompleted" className="invisible">
                <p>Name: {this.state.name}</p>
                <p>Phone: {this.state.phone}</p>
                <p>Email: {this.state.email}</p>
              </fieldset>
            </>
        )
    }
}