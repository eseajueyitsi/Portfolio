import iterative18 from "../images/iterative18.png"
import Typewriter from 'typewriter-effect';
import sneakers from "../images/sneakers.png"

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

export default function development(){
    let title = "Development"
    let about = "About this Project"
    let content = "This is a simple ecommerce react application which supported filtering and sorting. For this project\
    I created a shoe site where the user could add and delete from the cart. This application was created from the React.js framework"
    return (
    
    <div>
        <div className="topPortion">
            <a className="outsideHeader">{typeObject(title,0)}</a>
            <div className="aboutThisProject">
                <h4 className="aboutTitle">{typeObject(about,1500)}</h4>
                <p className="aboutContent"> {typeObject(content,3000)}</p>
            </div>
        </div>

    {part1()}
    {part2()}
    </div>
    )
}


function part1(){
    return(
        <div className="part1Development">
            <h4 className="seudoTitle">StartUp Context and Description</h4>
                <div className="iterativePart1">
                <div style={{display:"flex", alignItems:"center", flexDirection: "row"}}>
                    <img className= "part1Image" src={iterative18}alt="iterative18.png"></img>
                </div>
                <div className="endContainer3">
                    <p className="iterativepart1content">
                        <div style={{marginBottom:"0%", display:"flex", flexDirection:"column"}}><strong>Goal and Functionality:</strong> The goal of this application is to help users select and keep track of the shoes from a set of shoes. The user is also able to keep track of all the shoes that they selected, 
                        and there is an aggregator/total on the top which keeps track of the total price of all the shoes that they selected. The user could also filter the shoes based on the price range and the brand. Additionally, the user could sort the shoes from high to low and low to high based on the price.</div>
                    </p>
                </div>
            </div>
        </div>
        )
}

function part2(){
    return (
        <div className="Link to the submission">
            <h4 className="seudoTitle" style={{marginBottom:"0%", paddingBottom:"0%"}}>Sneaker Junkies Website</h4>
            <h5 style={{margin:"0%}"}}> Click on the Link Below to View The Full Website  </h5>
            <a href="https://tiredcheetah112.github.io/Development">
                <img src={sneakers} className="flower"></img>
            </a>
        </div>

    )
}