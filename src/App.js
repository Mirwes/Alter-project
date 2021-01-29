import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// import Form from "./Form";
// import Navbar from './component/Navbar';
// import Home from './component/Home';
import Contact from './Form';
import Nav from './base/Nav';
import Home from './base/Carousel';
import Carousel from './base/Carousel';
// import Carousel from './base/Carousel';

function App() {
  return (
   
    <div className="App">
       <Router>
         <Nav />
         {/* <Home /> */}
    
     
     <Switch>
      <Route exact path='/'  component={Carousel}    />
      <Route path='/Form' component={Contact} />
     </Switch>
     
     </Router>
    </div>
    
  );
}

export default App;
