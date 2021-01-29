import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { FaFacebook } from 'react-icons/fa';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
   

      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
         <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          
        </div>
      </IconContext.Provider>
    
    </>
  );
}

export default Navbar;




























// import React, { Component } from 'react';
// import './Navbar.css';
// import { Link, Route } from 'react-router-dom';
// // import { BrowserRouter as Router, Switch } from 'react-router-dom';
// // import Home from './Home';
// import { MenuItems } from '../component/MenuItem';
// import { FaFacebook } from 'react-icons/fa';
// // import Home from '../component/Home';
// // import Contact from '../Form';

//  class Navbar extends Component {
//      state = { clicked: false }

//      handleClick = () => {
//          this.setState({ clicked: !this.state.clicked })
//      }
//     render() {
//         return (
           

         
//             <nav className='NavbarItems'>
//                 <h1 className='navbar-logo'> <i> Skandary's Custom Tailoring <a href='https://www.facebook.com/mir.safi.71/'> 
//                 <FaFacebook  style={{color: 'cornflowerblue', background: 'white'}}   size= '1.2em'/> </a>  </i></h1>
//                 <div className='menu-icon' onClick={this.handleClick}>
//                 <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
//                      ></i>
//                 </div>
//                 <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
//                     {MenuItems.map((item, index) => {
//                         return ( 
//                     <li key={index} className={item.cName}>
//                     <Link to={item.path}>
//                         {item.title}
//                         </Link>    
                    
//                     </li>
//                         )
//                     })}
//                     </ul>

//     </nav>
    
//         )
//     }
// }


// export default Navbar;