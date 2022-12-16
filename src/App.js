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
import Typewriter from 'typewriter-effect';
import flower from "./images/flower.jpeg"




function typeObject(string, pause){

  return(
    <Typewriter onInit={(typewriter) => {
      typewriter.pauseFor(pause)
      typewriter.changeDelay(40);
      typewriter.typeString(string).callFunction(() => {console.log('String typed out!');})
        .start()
        }}>

        
        </Typewriter>
  )
}


function App() {
  const[projectChanger, changeDisplay] = useState(portfolioHomePage());
  const functionList = [first,second,third, development,portfolioHomePage,typeObject]

  function sliding(){
    let header = "Welcome to my portfolio!"
    let string = "I am a Computer Science student at Brown University, and I am a student in cs1300 (UIUX). I am interested in creating interactive, interesting and beautiful digital experiences 🌸🌸🌸"
    return (
    <div className="slidingBox">
      <h1 className ="sHeader">{typeObject(header,1000)}</h1>
      <p className="sParagraph"> 
        {typeObject(string, 2500)}
      </p>
    </div>)
  }

  function first(){
    return(
      <div>
        {personaAndStoryBoard()}
      </div>
    )
  }
  function second(){
    return(
      <div>
        <div></div>
        {responsiveRedesign()}
      </div>
    )
  }
  function third(){
    return(
      <div>
        <div></div><div></div>
        {iterativeDesign()}
      </div>
    )
  }
  function fourth(){
    return(
      <div>
        {development}
      </div>
    )
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
      <h2 className="Introduction"> Checkout My Art</h2>
      <div className="information1"> “The richness I achieve comes from Nature, the source of my inspiration.”</div>
      <div className="information2"><img className= "flower" src={flower}alt="flower.png"></img></div>
      
    </div>

    <div className="contentRight">
    <div className= "contentCards"><h4 class="aboutMe"> About Me</h4>
    <a className="exploreLinkContent">I am enthralled by digital photography and the color pink</a>
    </div>

    <div className= "contentCards"> 
      <h4 class="aboutMe">Favorite Design Quote</h4>
      <a className="exploreLinkContent">"Design is intelligence made visible." -- Alina Wheeler</a>

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
