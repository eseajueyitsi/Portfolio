import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import listData from "./assets/list_data.json";
import CardItem from './components/cardItem.js';
function App() {
  return (
    <div className="App">
      <Header/>
      {sliding()}
      {cardMapping()}
      {content()}
    </div>
  );
}

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
    There is something that should be going under here
    </div>

    <div className= "contentCards"> 
      <h4 class="aboutMe">Homework Submissions</h4>
      <div className="lleft">
        <a className="exploreLinkContent"> HW1</a>
        <a className="exploreLinkContent"> HW2</a>
      </div> 
      <div className="rright">
        <a className="exploreLinkContent"> HW4</a>
        <a className="exploreLinkContent"> HW5</a>         
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


export default App;
