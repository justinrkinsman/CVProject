import React from "react"
import './App.css'
import { GeneralInformation } from "./components/GeneralInfo"
import { Education } from "./components/Education"
import { PracticalExperience } from "./components/PracticalExperience"

export const App = () => {

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