import React, { Component } from 'react'
import Navbar from '../Components/Navbar';
import { ReactComponent as Landing } from '../Assets/about us landing.svg';
import { ReactComponent as Work } from '../Assets/work with us.svg';
import { ReactComponent as Contact } from '../Assets/contact.svg';

import '../Styles/About.css'

export class About extends Component {
  render() {
    return (
      <>
     <div className="container">
       <Navbar/>
         <div className="row about_text">
             <div className="col-5 ">
                 <h2><strong>About Us</strong></h2>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, aperiam. Quas numquam sed possimus nesciunt distinctio odio architecto suscipit accusamus unde. Ipsa aut nobis necessitatibus id doloribus laboriosam totam ipsum molestias, accusantium nostrum vel suscipit atque consequuntur laudantium quibusdam ea deserunt distinctio? Consequuntur, sequi labore.
             </div>
             <Landing className="col-5 ht"></Landing>
         </div>

         <div className="row work_with">
         <Work className="col-5 ht"></Work>
             <div className="col-5 ">
                 <h2><strong>work with us</strong></h2>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, aperiam. Quas numquam sed possimus nesciunt distinctio odio architecto suscipit accusamus unde. Ipsa aut nobis necessitatibus id doloribus laboriosam totam ipsum molestias, accusantium nostrum vel suscipit atque consequuntur laudantium quibusdam ea deserunt distinctio? Consequuntur, sequi labore.
             </div>  
         </div>

         <div className="row cont">
         <Contact className="col-5 ht"></Contact>
                   <div className="col-5">
                   <h2><strong>connect to us!</strong></h2>
                   <div class="mb-3">
                 <label for="exampleFormControlInput1" class="form-label">Email address</label>
                 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
               </div>
               <div class="mb-3">
                 <label for="exampleFormControlTextarea1" class="form-label">your query!</label>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                 <br></br>
                 <button className="btn btn-primary" onClick>Submit</button>
             </div>  
         </div></div>
     </div>

       
          </>
    )
  }
}

export default About