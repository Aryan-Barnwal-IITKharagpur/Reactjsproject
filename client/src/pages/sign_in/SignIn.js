import React from 'react'
import Glassmorphism from '../../Components/Glassmorphism'
import Loader from '../../Components/Loader'
import SemiContainer from '../../Components/SemiContainer'
import SignupForm from '../../Components/SignupForm'
import "./signIn.css"

export default function signIn() {
  return (
    <div className="mainBody">
      <div className="mainBodyContainer">
      <SemiContainer />
      <SignupForm />
      </div>
    </div>
  )
  }
