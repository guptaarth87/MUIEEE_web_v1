import React, { Component } from 'react'
import { Link} from 'react-router-dom';
import '../Styles/Navbar.css';


export class Navbar extends Component {
  render() {
    
    return (
      <div className="nav">
           <Link to="Contact" className="Contact btn btn-primary">Contact us</Link>
           <Link to="About" className="About btn btn-primary">About us</Link>
           
    </div>
    )
  }
}

export default Navbar