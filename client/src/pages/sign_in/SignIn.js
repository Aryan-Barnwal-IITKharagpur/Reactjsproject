import React from 'react'
import Glassmorphism from '../../Components/Glassmorphism'
import Loader from '../../Components/Loader'
import SemiContainer from '../../Components/SemiContainer'
import SignupForm from '../../Components/SignupForm'
import "./SignIn.css"

export default function signIn() {
  return (
    <div className="mainBody">
      <div className="container">
      <SemiContainer />
      <SignupForm />
      </div>
    </div>
  )
}
