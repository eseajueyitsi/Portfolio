import accessibilty from "../images/accessibility.png"
import desktopwebsitebottom from "../images/desktopwebsitebottom.png"
import desktopwebsitetop from "../images/desktopwebsitetop.png"
import highfidelitydesktop from "../images/highfidelitydesktop.png"
import highfidelitysmartphone from "../images/highfidelitysmartphone.png"
import highfidelitytablet from "../images/highfidelitytablet.png"
import ipadWebsite from "../images/ipad website.png"
import iphoneWebsite from "../images/iphonewebsite.png"
import lowfidelitydesktop from "../images/lowfidelitydesktop.png"
import lowfidelitysmartphone from "../images/lowfidelitysmartphone.png"
import lowfidelitytablet from "../images/lowfidelitytablet.png"
import uistyleguide from "../images/uistyleguide.png"
import usability from "../images/usability.png"
import Typewriter from 'typewriter-effect';

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
export default function responsiveRedesign(){
  let ntitle = "Responsive Redesign"
  console.log("I am here in the new function, why is it not updating a new one")
  let about = "About this Project"
  let content = "We were tasked with redesigning a website so that it is more usable and efficient. This assignment allowed us to practice working with\
   HTML and CSS and it gave us more experience in identifying and fixing flaws in interfaces. I chose to redesign D&B Pharmacy, a pharmaceutical company which allows the users to buy prescription drugs."
  return (
  
  <div>
    <div className="topPortion">
        <a className="outsideHeader">{typeObject(ntitle,0)}</a>
        <div className="aboutThisProject">
            <h4 className="aboutTitle">{typeObject(about,1500)}</h4>
            <p className="aboutContent"> {typeObject(content,3000)}</p>
        </div>
    </div>

    {part1()}
    {part2()}
    {part3()}
    </div>)
}



function part1(){
  return(
  
  <div className="part1Redesign"> 
    <h4 className="seudoTitle">Identifying Usability Problems</h4>
    <div className="usabilityProblems">
      
      <img className= "redesignTop0" src={usability}alt="usability.png"></img>
      <img className= "redesignTop1" src={accessibilty}alt="usability.png"></img>  
    </div>
  </div>
  )
}
function part2(){
  let color =  "#eeb6bb"
  return(
  
  <div className="part2Redesign"> 
    <h4 className="seudoTitle">Visual Redesign</h4>

    <div className="group3">
      <div><img className= "redesignTop4" src={lowfidelitydesktop}alt="lowfidelitydesktop.png"></img></div>
      <div class="redesigncol0">
        <img className= "redesignTop2" src={lowfidelitytablet}alt="lowfidelitytablet.png"></img>
        <img className= "redesignTop3" src={lowfidelitysmartphone}alt="lowfidelityphone.png"></img>  
      </div>
    </div>


    <div className="group3">
      <div><img className= "redesignTop4" src={highfidelitydesktop}alt="highfidelitydesktop.png"></img></div>
      <div class="redesigncol0">
        <img className= "redesignTop2" src={highfidelitytablet}alt="highfidelitytablet.png"></img>
        <img className= "redesignTop3" src={highfidelitysmartphone}alt="highfidelityphone.png"></img>  
      </div>
    </div>

    <div><img className= "redesignTop4" src={uistyleguide}alt="uistyleguide.png"></img></div>

  </div>
  )

}
function part3(){

  return(
    <div className="part3Redesign"> 
      <h4 className="seudoTitle">Responsive Redesign</h4>
      <div className="endContainer">

        <div className="endContainer0">
          <div className="contentCards0">
            <a class="aboutMe0" href="http://www.dbpharmacy.com"> Click here to see the original website </a> 
          </div>
          <div className="contentCards1">
            <a class="aboutMe1" href="https://tiredcheetah112.github.io/WebsiteResponsiveRedesign/"> Click here to see the redesigned website </a> 
          </div>
        </div>

        <div className="endContainer1"> 
          <h4 className="qheader0">Interactive Components of the Website</h4>
            <ul class = "instructions0">
              <li className="intstruction0">
              When you shrink the screen to that of an iphone, the image to the right disappears and the text moves under the buttons.
              Also the contact us section in the bottom right also disappears. Both of these decisions were made so that the iphone
              version looked as minimalistic as possible.
              </li>

              <li className="intstruction0">
              Take a look at the menu like bar at the top that includes home, about us, and the other options, if you shrink the screen, 
              the specials and the contact us will go under the home about us and services. This setting is for the smartphone screens so 
              the menu does not look too crowded on a smaller phone              
              </li>

              <li className="intstruction0">
              You can hover over the menu tabs and it will turn into a different color              
              </li>

              <li className="intstruction0">
              You can also hover over the buttons on the bottom left portion of the screen and they will turn into another color.
              </li>
            </ul>
        </div>
      </div>
    </div>
    )
}
