import React from 'react'
import '../Styles/Contact.css'
import Navbar from '../Components/Navbar';
import { ReactComponent as Contact1 } from '../Assets/contact.svg';

//https://goo.gl/maps/iUy9oU72vM23fHHw9
function Contact() {
  return (
    <>
    <Navbar/>
    <div>Contact</div>
    <section className="container card main ">
       <div className="row">
           <div className="col-6">
               <Contact1 className="col-12" ></Contact1>
           </div>
           
           <div className=" col-6">
           <br/>
           <br/>
         <div className="mb-3">
             <label for="exampleFormControlInput1" class="form-label">Email address</label>
             <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
           </div>
           <div class="mb-3">
             <label for="exampleFormControlTextarea1" class="form-label">Your query</label>
             <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
             <br></br>
                 <button className="btn btn-primary" onClick>Submit</button>
           </div>
           </div>
       </div>
    </section>
    </>
  )
}

export default Contact