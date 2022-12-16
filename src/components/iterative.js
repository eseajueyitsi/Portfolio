import iterative0 from "../images/iterative0.png"
import iterative1 from "../images/iterative1.png"
import iterative2 from "../images/iterative2.png"
import iterative3 from "../images/iterative3.png"
import iterative4 from "../images/iterative4.png"
import iterative5 from "../images/iterative5.png"
import iterative6 from "../images/iterative6.png"
import iterative7 from "../images/iterative7.png"
import iterative8 from "../images/iterative8.png"
import iterative9 from "../images/iterative9.png"
import iterative10 from "../images/iterative10.png"
import iterative11 from "../images/iterative11.png"
import iterative12 from "../images/iterative12.png"
import iterative13 from "../images/iterative13.png"
import iterative14 from "../images/iterative14.png"
import iterative15 from "../images/iterative15.png"
import iterative16 from "../images/iterative16.png"
import iterative17 from "../images/iterative17.png"
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



export default function iterativeDesign(){
    let title = "Iterative Design"
    let about = "About this Project"
    let content = "We designed an interactive high-fidelity prototype of a telehealth and appointment scheduling mobile app Almond.\
    We presented some sketches that we created to brainstorm some ideas. We then moved on to the low and high fidelity prototype."
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
        {part3()}
        {part4()}
        {part5()}
    </div>)
}

function part1(){
    return(
    <div className="part1Iterative">
        <h4 className="seudoTitle">StartUp Context and Description</h4>
        <div className="iterativePart1">
        <div style={{display:"flex", alignItems:"center"}}>
            <img className= "part1Image" src={iterative17}alt="iterative17.png"></img>
        </div>
        <div className="endContainer3">
            <p className="iterativepart1content">
                <div style={{marginBottom:"0.75rem", display:"flex", flexDirection:"column"}}><strong>Start-up:</strong> Almond</div>
                <div style={{marginBottom:"0.75rem", display:"flex", flexDirection:"column"}}><strong>Description:</strong> Almond is a telehealth application for women's health. Almond makes it easy to get
                great ObGyn care fast, both at in-person offices and over telehealth</div>
                <div style={{display:"flex", flexDirection:"column"}}><strong>Context:</strong>The problem with traditional ObGyn practices is that physician time is misused, so patients
                get slow care. Almond is rebuilding back-office tech that saves physicians time and is hiring a wider range of care
                providers roles, which allows Almond to deliver better outcomes to patients and reduce the amount of time it takes to get their issues resolved.</div>
            </p>
        </div>


        </div>

    </div>
    )

}

function part2(){

    return(
        <div className="part2Iterative">
            <h4 className="seudoTitle">Sketches and Design</h4>
            <div className="iterativeTop">
                <img className= "iterativeTop0" src={iterative0}alt="iterative0.png"></img>
                <img className= "iterativeTop0" src={iterative1}alt="iterative1.png"></img>
                <img className= "iterativeTop0" src={iterative2}alt="iterative2.png"></img>
            </div>
            <div className="iterativeTop">
                <img className= "iterativeTop1" src={iterative3}alt="iterative3.png"></img>
            </div>
            <div className="iterativeTop">
                <img className= "iterativeTop1" src={iterative4}alt="iterative4.png"></img>
            </div>

            <div className="iterativeTop">
                <img className= "iterativeTop2" src={iterative5}alt="iterative5.png"></img>
                <img className= "iterativeTop2" src={iterative6}alt="iterative6.png"></img>
            </div>
            <div className="iterativeTop">
                <img className= "iterativeTop3" src={iterative7}alt="iterative7.png"></img>
            </div>
        </div>
    )
}

function part3(){

    return(
        <div className="part3Iterative">
            <h4 className="seudoTitle"> Low Fidelity WireFrames</h4>
            <div className="iterativeTop">
                        <img className= "iterativeTop0" src={iterative8}alt="iterative8.png"></img>
                        <img className= "iterativeTop0" src={iterative9}alt="iterative9.png"></img>
                        <img className= "iterativeTop0" src={iterative10}alt="iterative10.png"></img>
            </div>
            <div className="iterativeTop">
                        <img className= "iterativeTop0" src={iterative11}alt="iterative11.png"></img>
                        <img className= "iterativeTop0" src={iterative12}alt="iterative12.png"></img>
                        <img className= "iterativeTop0" src={iterative13}alt="iterative13.png"></img>
            </div>

            <div className="endContainer1"> 
            <h4 className="qheader0">Notes for Design Decisions</h4>
            <ul class = "instructions0">
              <li className="intstruction0">
              After looking at all the sets of sketches, we decided to pick the pages that demonstrate the convenience of Almond, 
              which is that users can have all the information in the app, such as looking up different. providers, setting up virtual 
              calls with their doctors and reading FAQs.
              </li>

              <li className="intstruction0">
              For the home page, along with the first video call buttons, we have the “Nearest hospitals” section right below the user’s profile.
               This way, we cover both remote and in-person appointments through the app, which we thought was appropriate for the problem we are 
               trying to solve which allows the users to get faster care.       
              </li>

              <li className="intstruction0">
              The scheduling page is meant to give the user more information about the doctor that they are scheduling with. It is formatted like a typical information page
              (about a doctor), where the user receives information about the person that they are trying to book an appointment with.        
              </li>

              <li className="intstruction0">
              The FAQ page is meant for the user to view the questions that are most commonly asked and attempt to find the questions that they may have. We formatted it like a 
              typical FAQ page where we have the question and the response to the question right below it.
              </li>
            </ul>
        </div>
        </div>
    )
}
function part4(){
    return (
        <div className="part4Iterative">
            <h4 className="seudoTitle"> Interactive Hi-Fi Mockup with Critique</h4>
                <div className="iterativeTop">
                    <img className= "iterativeTop1" src={iterative14}alt="iterative14.png"></img>
                </div>
                <div className="endContainer0">
                    <div className="contentCards0">
                        <a class="aboutMe0" href="https://www.figma.com/proto/j9vUruJJE3Um3QwMRynvPr/Almond?node-id=7%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=7%3A2"> Click here to see the Hi-Fi mockup before critiques </a> 
                    </div>
                    <div className="contentCards1">
                        <a class="aboutMe1" href="https://www.figma.com/proto/5PAOipmv5XJmI1xIPrJhWP/Almond-(2nd-version)?node-id=7%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=7%3A2"> Click here to see the Hi-Fi Mockup after critiques </a> 
                    </div>
                </div>
                <div className="endContainer1"> 
                    <h4 className="qheader0"> Summary of feedback and changes made</h4>
                    <ul class = "instructions0">
                    <li className="intstruction0">
                    Change the “calling…” button to “calling” to avoid confusion
                    </li>

                    <li className="intstruction0">
                    Make a personal page that includes “past visits” and records  
                    </li>

                    <li className="intstruction0">
                    The meeting page is going to have more details about the doctor before you join the meeting. At the moment we have 
                    the upcoming appointment button on the home screen and when you click on it, it takes you to the video call. We should
                    have something that takes us to the “meet your physician” page and then from there, the user can facetime the physician
                    </li>

                    <li className="intstruction0">
                    Make a bottom nav bar - make the middle icon a home button, me profile, providers, and FAQ to ensure consistent
                    navigation between the pages
                    </li>
                    </ul>
                </div>
                <div className="iterativeTop">
                    <img className= "iterativeTop4" src={iterative15}alt="iterative15.png"></img>
                </div>
                <div className="iterativeTop">
                    <img className= "iterativeTop4" src={iterative16}alt="iterative16.png"></img>
                </div>
        </div>
    )
}

function part5(){
    return(
        <div className="part5Iterative">
            <h4 className="seudoTitle"> User Testing Results and Analysis</h4>

            <div className="endContainer1"> 
                <h4 className="qheader0">User Testing experiment instructions</h4>
                <h4 className="iterativeHeader"> Scenario</h4>
                <p className="iterativeContent">What you will be looking at today is an interactive prototype,
                                                which means not all buttons/functionalities are clickable, but some
                                                are. If you click on the black canvas, you’d see the clickable buttons
                                                highlighted in blue. Some things may not work like expected. If something 
                                                does not work, please explain what you would expect to happen and move on. 
                                                The prototype today is for a mobile app called Almond. It is a telehealth
                                                meeting-scheduling and health application for women’s care. Almond makes it
                                                easy to get great ObGyn care quickly, both at in-person offices and over
                                                telehealth visits.</p>
                <h4 className="iterativeHeader"> Task 1</h4>
                <p className="iterativeContent">Imagine you are a patient trying to book an appointment using Almond. First,
                                                please find a way to see the list of care providers available. Second, please
                                                make an appointment with Dr. Justin Lee on January 25th at 10 a.m., and confirm 
                                                your appointment.</p>
                <p className="iterativeContent">Did you complete the task successfully? Overall, this task was: very difficult or very easy?</p>
                <p className="iterativeContent">What part of the prototype made the task easy or hard? What buttons or design
                                                choices did you like or dislike?</p>

                <h4 className="iterativeHeader"> Task 2</h4>
                <p className="iterativeContent">Imagine you've already booked an appointment with Dr. Justin Lee, and will now attend it.
                                                First, please check the list of your upcoming appointments. Second, please hop on a call 
                                                with Dr. Justin Lee to attend your scheduled virtual appointment. Third, please hang up the call.</p>
                <p className="iterativeContent">Did you complete the task successfully? Overall, this task was: very difficult or very easy?</p>
                <p className="iterativeContent">What part of the prototype made the task easy or hard? What buttons or design
                                                choices did you like or dislike?</p>

                <h4 className="iterativeHeader"> Task 3</h4>
                <p className="iterativeContent">Please spend a couple of minutes playing around and checking out other functions of the app. Note that if
                                                you are not sure what’s clickable, you can always click on the black canvas, and you’d see the clickable buttons 
                                                highlighted in blue.</p>
                <p className="iterativeContent">What functionalities did you explore? What problem does the app solve or make easier? How valuable is this solution to you?</p>
                <p className="iterativeContent">What other functionalities do you wish an app like Almond would provide? How might you benefit from using Almond?</p>
            </div>


            <div className="resultsAnalysis">
                <div className="iterativeInfo">
                    <h4 className="qheader0"> How Users Fared</h4>
                    <p>For the first task, make an appointment, two users thought it was easy, while one user found the interface unintuitive. Out of the two users who completed 
                       the task, one user said that it was not clear that when she clicked on the doctor’s name. For the second task, attend the virtual appointment, all 3 users
                       were able to complete it. </p>
                </div>

        
                <div className="iterativeInfo">
                    <h4 className="qheader0"> Errors users made</h4>
                    <p> When scheduling an appointment, one users made an error of not clicking on the “Learn more” page to navigate to the doctor’s profile page.Furthermore, the user
                        mixed up the care providers page and meeting page, and got confused since the appointment was already there.</p>
                </div>

                <div className="iterativeInfo">
                    <h4 className="qheader0"> Overall thoughts</h4>
                    <p> One of the users noted that having access to the history page was really helpful. The same user noted that the calendar icon for the upcoming appointments was really intuitive.
                        Another user noted that they liked being able to see the medication and they also liked the way that the ratings page was set up. One of the users noted, "I like how everything that you need
                        is on the home page". Two users mentioned that they can see the app being really convenient especially for the women who are not really comfortable with their situation.
                    </p>
                </div>

                <div className="iterativeInfo">
                    <h4 className="qheader0"> Features users did not like </h4>
                    <p> The first issue had to do with the vocabulary of the information that was on our page. One user mentioned that they wished the vocabulary we used was cohesive. We use multiple words to mean the 
                        same thing, which are “meeting” and “appointment”. The user wished that we only used one word to describe the same thing, so that it is less confusing on the app to find the calendar and hop in
                        a meeting with the doctor. Another user also noted that the information that we had was redundant with the navbar along with the other information</p>
                </div>
            </div>

            <div className="endContainer1">
                <h4 className="qheader0"> Thoughts for future improvments</h4>
                <ul class = "instructions0">
                    <li className="intstruction0">
                    For the care providers page, one user recommended that we included a button which specified that you wanted to book the appointment explicitly along with a button for
                    more information which would make it easier for the user. Another user wanted to see the distance of the providers, and get the option to book a consultation visit 
                    (instead of a formal one).

                    </li>

                    <li className="intstruction0">
                    We can change the color scheme of the home page so that it is easier to distinguish the hierarchy of elements and find specific elements on the page. If we change the color to 
                    have only two colors, for example, we expect it will be less confusing and overwhelming to the users on the home page.   
                    </li>

                    <li className="intstruction0">
                    We should have included more information since one of the users mentioned that the medication names are generic and not brand names which could trigger allergies within people.
                    If we had more time, we would have liked to have gotten professional help from someone who is involved with medicine or pharmacology so that we could be certain of the inforamtion that is
                    presented on our application.    
                    </li>

                    <li className="intstruction0">
                    Two users mentioned that the providers page should include more information. Such as a doctor’s approach to birth control. It’s very important, especially since politics is involved. 
                    It would also be good to have the information around abortion, plan b, iud, mamograms. This would make it easier for a woman to navigate the site and it would better cater to their needs. 
                    One user also noted that by including more information with procedures that pertain to women, it would better serve our mission of making women’s healthcare more accessible.
                    </li>
                </ul>
            </div>
        </div>
    )
}