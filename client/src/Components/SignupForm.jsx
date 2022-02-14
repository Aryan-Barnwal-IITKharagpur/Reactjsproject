import React from 'react'
import "../Styles/SignupForm.css"

function SignupForm() {
    return (
        <div className="formbody mx-5">
            <h3 className='mx-3 formHeading' ><strong>SIGN-UP </strong></h3>
           
            <form className='signUpform'>
            <div className="form-group m-3">
                <label for="exampleInputEmail1"><strong>Email address</strong></label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">Use the credentials provided by CDC.</small>
            </div>
            <div className="form-group m-3">
                <label for="exampleInputPassword1"><strong>Password</strong></label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-outline-primary m-3">Submit</button>
        </form>
        </div>


    )
}
export default SignupForm;