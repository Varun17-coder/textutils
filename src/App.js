//----------- click on f2 whenever we want select the file name by clicking on the folder----------------
// import logo from './logo.svg';
import './App.css';
// import the Navbar or TextForm file to include in this 
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React,{useState} from 'react'
// react router is used to navigate the pages without loading the website much
// visit reactrouter.com page for best clarification
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// import About from './components/About';

// function based component
function App() {
  const [Mode,setMode] = useState('light');//Whether dark mode is enabled or not, where setMode is the state variable to change the value of Mode
 
  // alert and mode option is actually the features which are global to the website so we initialize the states of it in the app.js file only 
  const [alert,setalert] = useState(null)
  
  const showAlert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  // this is actually a function to change the mode 
  const toggleMode = ()=>{
    if(Mode=== 'light'){
      // setMode='dark' ----> we cant assign a value to setMode cause its a functon so no to "=" 
      setMode('dark')
      document.body.style.backgroundColor = '#010c18'
      showAlert("dark mode enabled","success");

      document.title ='TextUtils- Dark Mode';// this is to change the title whenver click on dark mode

      // ----------------This is to change title for some interval of time usint setInterval()---not reccommened---------------
      // setInterval(() => {
      //   document.title ='TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title ='Install TextUtils now';
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("light mode enabled","success");
      document.title ='TextUtils- Light Mode';
    }
  }
  return (
    // jsx is nothing but HTML only but class will be replaced by 'className' and for loop with 'HtmlFor'
    // and whenever we write javascript we use curly braces '{ }'
    // unterminated jsx content should not be written
     <>

{/* this is the concept of props which we write in the Navbar tag as title */}
{/* <Navbar title="TextUtils" aboutText="About Text"/> */}
{/* <Navbar /> */}
<Router>

<Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
  {/* /user ----> Component 1
  /user/home ---> ----> component 2 */}
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode}/>}/>

</Routes>
</div>
</Router>
     </>
     // if we write <Navbar> then automatically the component will be imported. written after </nav>
  );
}

export default App;
