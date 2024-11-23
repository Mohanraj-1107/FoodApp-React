import React from 'react'
import "./Feedback.css";
export const Feedback = () => {
  return (
    <div>
        <center><h5 style={{color:"royalblue"}}>Feedback Form</h5></center>
        <form action="">
            <label htmlFor="name">Name
              <input type="text" required/>
            </label>
              <br></br>
             <label htmlFor="email">Email
              <input type="email" required/>
             </label>
             <br/>
              <label htmlFor="Rating">Feedback
                <input type="textarea" required/>
              </label>
              <button>Submit</button>
              <br/>
        </form>
    </div>
  )
}
