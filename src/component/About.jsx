
import { useState } from "react"

import UserClass from "./UserClass"
const About = () => {
  const[Like,setLike]=useState(0);
  const incre=()=>{
    setLike((preLike)=>preLike+1);
  }
  
  return (
    <div>we are the api thief company ,use Another company API, and get config Driven UI with the Help of that data 
      <h2>Author Details</h2>
     
      <UserClass name={"Harsh@Raj"}/>
      <button className="Like-btn" onClick={incre}>Like:{Like}</button>
    </div>
  )
}

export default About
