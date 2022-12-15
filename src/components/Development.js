import iterative18 from "../images/iterative18.png"
export default function development(){
    return (
    
    <div>
        <div className="topPortion">
            <a className="outsideHeader">Development</a>
            <div className="aboutThisProject">
                <h4 className="aboutTitle">About this Project</h4>
                <p className="aboutContent"> A simple ecommerce react application which supported filtering and sorting. For this project
                                            I created a shoe site where the user could add and delete from the cart. This application was created
                                            from the React.js framework</p>
            </div>
        </div>

    {part1()}
    
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
        <div className="Link to the submission"></div>
    )
}