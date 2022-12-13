import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Header from './components/header.js';
import listData from "./assets/list_data.json";
import CardItem from './components/cardItem.js';
import personaAndStoryBoard from './components/persona'; 
import iterativeDesign from './components/iterative';
import development from './components/Development';
import responsiveRedesign from './components/responsive';



function App() {
  const[projectChanger, changeDisplay] = useState(portfolioHomePage());
  const functionList = [personaAndStoryBoard,responsiveRedesign,iterativeDesign, development,portfolioHomePage]

  function sliding(){
    return (
    <div className="slidingBox">
      <h1 className ="sHeader">Welcome To My Portfolio</h1>
      <p className="sParagraph"> 
      Something is going to be put here but I do not know what that is going to
      look like at the moment. I am probably going to go for something that is sliding
      </p>
    </div>)
  }


  function cardMapping(){
    return (
      <div className='allCards'>
      {listData.map((item, index) => ( 
        <CardItem   homework = {item.homework} 
                    title = {item.title} 
                    Date = {item.Date}
                    color = {item.color}
                    Description = {item.Description}
                    />
      ))}
      </div>
    )
  }

  function portfolioHomePage(){
    return(
      <div>
        {sliding()}
        {cardMapping()}
        {content()}
      </div>
    )
  }

function content(){
 return(
  <div className= "contentContainer"> 
    <div className="contentLeft">
      <h2 className="Introduction"> Introduction</h2>
      <div className="information1"> This is a portfolio that is built from the nonsense</div>
      <div className = "information2"> There is some more nonsense that is on the bottom, I need to figure out what I am doing here</div>
    </div>

    <div className="contentRight">
    <div className= "contentCards"><h4 class="aboutMe"> About Me</h4>
    <a className="exploreLinkContent">There is something that should be going under here</a>
    </div>

    <div className= "contentCards"> 
      <h4 class="aboutMe">Homework Submissions</h4>
      <div className="lleft">
        <a className="exploreLinkContent" onClick={() => changeDisplay(personaAndStoryBoard)}> HW1</a>
        <a className="exploreLinkContent" onClick={() => changeDisplay(responsiveRedesign)}> HW2</a>
      </div> 
      <div className="rright">
        <a className="exploreLinkContent" onClick={() => changeDisplay(iterativeDesign)}> HW4</a>
        <a className="exploreLinkContent" onClick={() => changeDisplay(development)}> HW5</a>         
      </div> 
    </div>
    <div className= "contentCards"> 
    
    <h4 class="aboutMe">Github Link</h4>
    <a className="exploreLinkContent"> GitHub Source Code</a>        
     </div>
    </div>
  </div>
 )
}





  return (
    <div className="App">
      <div className ="Main">
        <Header
        functions = {functionList}
        changer={changeDisplay}
        />
        {projectChanger}
      </div>
    </div>
  );
}



export default App;
