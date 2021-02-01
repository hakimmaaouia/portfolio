import React from "react"
import WorkCard from "./WorkCard"
import "./Work.css"
const Work=()=>{
    return(
<div className="workContainer">
    <h2>My Recent Work</h2>
    <div className="project-grid">
<WorkCard/>
<WorkCard/>
<WorkCard/>
<WorkCard/>
        </div>
    </div>
    )
}
export default Work