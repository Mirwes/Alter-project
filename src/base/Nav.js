import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import Navbar from '../component/Navbar';

export default function Nav(){
    return (
        
 <nav className='title'>
     <i>
       <a href='https://www.facebook.com/hasib.sakandary'> 
     <FaFacebook className='fa'></FaFacebook> </a>  </i>
    <h1 style={{color: 'white'}}>  Skandary's Tailoring</h1> 
     
     < Navbar/>
    </nav>

     
    )
}