import React from "react"
import  ReactDOM  from "react-dom/client"

    // const heading=React.createElement("h1",{id:"heading"},"Hello Foodie!")
    // const root=ReactDOM.createRoot(document.getElementById("root"))
    // root.render(heading)
    const Title=()=>{
        return (
            <div>
                React App
            </div>
        )
    }
    const heading = (<div><h1 id="head"><Title/> Hey Foodie !</h1>
    <div>How are you?</div></div> 
    )

 
    const root=ReactDOM.createRoot(document.getElementById("root"))
    root.render(heading)
