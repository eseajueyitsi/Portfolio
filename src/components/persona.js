import part1im from "../images/part1.png"
import persona1 from "../images/boywhothinks.png"
import persona2 from "../images/girlwhothinks.png"
import storyBoard from "../images/storyboard.png"
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

export default function personaAndStoryBoard(){
    let title = "Persona & StoryBoard"
    let about = "About this Project"
    let content = "I observed real users interacting with an interface and created a persona for these users\
    and illustrated a storyboard for one of the users"
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
        {part3and4()}



    </div>)
}

function part1(){
 return (
    <div className="part1Persona">
        <h4 className="seudoTitle">Preperation</h4>
        <div className="questionsAndImage">
            <div className="questionsandHeader">
            <h4 className="qheader0">Interview Questions</h4>
                <ul class = "questions0">
                    <li className="ques">
                    How easy was it for you to locate the kiosk?
                    </li>

                    <li className="ques">
                    How did you feel while you were navigating the options that were available to you
                    </li>

                    <li className="ques">
                    How content are you with the payment interface, and do you think there can be improvements?
                    </li>

                    <li className="ques">
                    How content are you with your overall experience with ordering your drink?
                    </li>
                </ul>
            </div>
            <div>
            <img class="image0" src={part1im}alt="part1"></img>
            </div>
        </div>
    </div>
 )
}

function part2(){
 return(
    <div className="part2Persona">
        <h4 className="seudoTitle">Recording Observations</h4>
        <div className="gridofQuestions">

            <div className="gridItem0">
                <h4 className="qheader0"> How easy was it for you to locate the Kiosk</h4>
                    <ul className="infoBox">
                        <li>
                        Most people said that when they first walked into the store, that they
                        had a little bit of trouble locating the kiosk. More specifically, someone
                        said that it does not make sense for the place where you pay to be in the back of 
                        the store.
                        </li>

                        <li>
                        A lot of the people that I interviewed said that they had to ask an employee where 
                        to order and pay for a drink since they did not even know that a kiosk was available. 
                        </li>

                        <li>
                        Most people said that they would have liked for the kiosk to have been somewhere in the 
                        middle (a lot of people said that it should have been like a McDonalds store).
                        </li>

                        <li>
                        People also noted that they wish for the kiosk to have been larger in size since it would
                        make it more noticeable, convenient, and easier to utilize
                        </li>
                    </ul>
            </div>

            <div className="gridItem0">
                <h4 className="qheader0"> How did you feel about navigating the options that were available to you</h4>
                <ul className="infoBox">
                    <li>
                    Most people were content with the interface as they said that it was easy to navigate, and it was
                    intuitive enough for them. One thing that someone noted is that they should try to place the items 
                    that are sold out at the bottom so that it makes it easier to see what is available to buy.
                    </li>

                    <li>
                    A lot of people said that the interface was aesthetically pleasing as well. Some people were confused
                    about some of the logos that were on the screen , as someone questioned what one of the logos were for.
                    </li>

                    <li>
                    Other people wished for nutritional details for some of the drinks, as one of them was lactose intolerant, and 
                    was concerned about whether the mango slushy he was ordering had dairy in it. He assumed that it did not have dairy, and
                    by the time that he got his order, he asked the employee whether or not it had dairy in it, and the employee said yes, and
                    then proceeded to offer him an option with lactaid free milk. He said that it would have been nice to know whether or not 
                    the drink was made with dairy. He also said that it would have been nice to have the lactaid free option whilst he was ordering
                    his drink. 
                    </li>
                </ul>
            </div>


            <div className="gridItem0">
                <h4 className="qheader0"> How content were you with the payment interface, and do you think that there can be improvements?</h4>
                <ul className="infoBox">
                    <li>
                    A lot of people struggled with the payment interface,and paying with the kiosk. 
                    </li>

                    <li>
                    One of the people I observed was trying to pay with their card, but had a lot of trouble aligning their card into the card reading 
                    machine. They noted that it would have been nice for there to have been clear instructions on which direction they are supposed to 
                    swipe their card as she spent nearly a minute trying to figure it out. This person had to call someone over to help them pay since 
                    they struggled so much
                    </li>

                    <li>
                    Another person was trying to use Apple Pay as a means for paying for their drink, and they had some trouble paying for their drink 
                    as well. Like the person who was trying to pay with their card, they said that it would have been nice for there to have been clear
                    instructions about where and how they were supposed to utilize their phone to pay for their drink. 
                    </li>

                </ul>
            </div>

            <div className="gridItem0">
                <h4 className="qheader0"> How content were you with your overall experience for ordering your drink?</h4>
                <ul className="infoBox">
                    <li>
                    In spite of the minor qualms and difficulties, most people seemed to have been content with their service. Once they were done paying, 
                    they had to wait around 5 minutes for their drink.
                    </li>

                    <li>
                    One person noted that they would have liked for there to have been more clarity about whether or not cash was accepted at the kiosk or
                    not, as they had to ask one of the workers where they could pay with cash.
                    </li>
                </ul>
            </div>
        </div>
    </div>
 )
}

function part3and4(){

    return(
        <div>
        <div className="part3Persona">
            <h4 className="seudoTitle">Personas</h4>

            <div className="personaImages">
            <img class="personaImage1" src={persona1}alt="personaImage"></img>
            <img class="personaImage2" src={persona2}alt="personaImage"></img>
            </div>
        </div>
        <div className="part4Persona">
            <h4 className="seudoTitle">StoryBoard</h4>
            <img class="storyBoard" src={storyBoard}alt="storyBoard"></img>
        </div>
        </div>

    )
  


}