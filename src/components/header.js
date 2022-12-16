import { useState } from "react";
export default function Header({functions, changer}){
    
    "Make sure to also include the different links to the other projects in this file"
    return (
    <div className="PortfolioBox">
      <a className="header" onClick={() => changer(functions[4])}>
       {functions[5]("Portfolio",0)}
      </a>
      <div className="scrollingBar">
        <a className="scrollingcomponents" onClick={() => {changer(functions[0])}}>Persona & StoryBoard</a>
        <a className="scrollingcomponents"onClick={() => changer(functions[1])}>Responsive Redesign</a>
        <a className="scrollingcomponents" onClick={() => changer(functions[2])}>Iterative Design and Evaluation</a>
        <a className="scrollingcomponents"onClick={() => changer(functions[3])}>Development</a>
      </div>
    </div>

    );
  }

