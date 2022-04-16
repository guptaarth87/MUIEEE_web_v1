import React, { Component } from 'react'
import '../Styles/Cards.css'


export class Cards extends Component {
  render() {
    // const {events_data}=this.props; for test
    const events_data=[
      {"name":"alphaand","Date":"12-10-2002", "host":"arjun singh","venue":"zoom"},
     {"name":"alphaand","Date":"12-10-2002", "host":"arjun singh","venue":"zoom"},
     {"name":"alphaand","Date":"12-10-2002", "host":"arjun singh","venue":"zoom"},
     {"name":"alphaand","Date":"12-10-2002", "host":"arjun singh","venue":"zoom"},
     {"name":"alphaand","Date":"12-10-2002", "host":"arjun singh","venue":"zoom"},
     {"name":"alphaand","Date":"12-10-2002", "host":"arjun singh","venue":"zoom"},
     {"name":"alphaand","Date":"12-10-2002", "host":"arjun singh","venue":"zoom"}
    ]
    return <div className="row">
      {
        events_data.map((item, index) =>{
         return<>          
         <div className="events_section card col-3">
          <span className="name"><strong>{item.name}</strong></span>
          <span className="host"><strong>host :</strong> {item.host}</span>
          <span className="mobile_no"><strong>Mobile No :</strong> {item.mobileNo}</span>
          <span className="date"><strong>Date :</strong> {item.date}</span>
          <span className="venue"><strong>venue :</strong> {item.venue}</span>
         
          <hr className="line"></hr>
         </div>
         </>

        })
            
      }
    
    </div>;
  }
}

export default Cards;
