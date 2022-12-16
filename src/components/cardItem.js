export default function CardItem({homework,title, Date, color, Description}){
    "Make sure to also include the different links to the other projects in this file"
    return (
        <div className="listBox">
        <div className="leftBox">
        <strong style={{color}}>{homework}</strong>
        <h3 className="cardTitle">{title}</h3>
        <div className="cardDate">{Date}</div>
        <p className= "Description">{Description}</p>
        </div>
        <div className="rightBox"></div>
        <a className="exploreLink" > See More</a>
        </div>
    );
  }