import React, { Component } from "react"
import './App.css'
import { GeneralInformation } from "./components/GeneralInfo"
import { Education } from "./components/Education"
import { PracticalExperience } from "./components/PracticalExperience"

export class App extends Component {
  constructor(){
    super()

    /*this.state goes here*/
  }

  //functions goes here

  render() {
    return (
      <>
        <div id="fullApp">
          <h1>CV Application</h1>
          <fieldset id="outerLayer">
            <GeneralInformation />
            <Education />
            <PracticalExperience />
          </fieldset>
        </div>
      </>
    )
  }
}