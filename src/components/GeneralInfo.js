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
        }
    }

    generalInfoSubmission = (e) => {
      e.preventDefault()
      let input = document.getElementById('generalInformationInput')
      input.classList.add('invisible')
    }

    render(){
        return(
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
                <button type="submit" onClick={this.generalInfoSubmission}>Submit</button>
                <button type="edit" className="invisible" >Edit</button>
              </form>
            </fieldset>
        )
    }
}