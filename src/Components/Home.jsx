import React from 'react'
import '../Styles/Home.css';
import Cards from '../Components/Cards';
import Navbar from '../Components/Navbar';
import Carousel from '../Components/Carousel';
import Subscribe from '../Components/Subscribe';

function Home() {
  return (
      <>    
      <Navbar/>
   <div className="x">
       <Carousel/>
    
   <br></br>
      <div className="row container">
          <div className='col-1'></div>
          <div className="col-5 mid-text">
           <h3>MUIEE</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea commodi repudiandae quae repellendus, reiciendis sint expedita quibusdam tempore numquam voluptatem necessitatibus ad doloremque autem blanditiis libero aliquid dolores nam fugiat odio accusamus quaerat. Similique molestiae dicta ex aliquid obcaecati quo sed odio, ullam sit.</p>
          </div>
          <div className="col-5">
           <img  className='col-12 mid-img' src={require('../Assets/work1.png')}></img>
          </div>
      </div>
      <br/><br/><br/>
      <div className="container events">
       <h1><strong>Events</strong></h1>
       <Cards/>
     
      </div>
     
         <br/><br/><br/>
        <div className="footer">  
        <div className="row">
          <div className='col-1'></div>
          <div className="col-5">
           <h3>Connect to us!</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea commodi repudiandae quae repellendus, reiciendis sint expedita quibusdam tempore numquam voluptatem necessitatibus ad doloremque autem blanditiis libero aliquid dolores nam fugiat odio accusamus quaerat. Similique molestiae dicta ex aliquid obcaecati quo sed odio, ullam sit.</p>
          </div>
          <div className="col-5">
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
          </div>
      </div>
        
        </div>
      </div>
   <br></br>
      </>
    
   
 
  )
}

export default Home