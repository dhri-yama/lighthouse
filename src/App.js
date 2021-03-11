import React from 'react';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cardcontainer from "./components/Cardcontainer";
import Footer from "./components/Footer";
import Home from './components/Home';

function App() {
  const [resources, setResources] = useState([])
  
  useEffect(()=>{
    async function getData(){
      await fetch("https://api.apispreadsheets.com/data/9236/").then(res=>{
        if (res.status === 200){
          res.json().then(data=>{
            setResources(data.data)
          }).catch(err => console.log(err))
        }
        else{
          console.log("Unable to fetch the data")
        }
        })
      }
    getData();
  },[])

  return (
    <Router>
      <div className="App bg-primary">
        
        <img src={process.env.PUBLIC_URL + '/assets/background.png'} alt=""
          className="h-full object-cover "/>
        <img src={process.env.PUBLIC_URL + '/assets/background.png'} alt=""
          className="h-screen object-cover lg:hidden"/>
        

        <div className="absolute w-screen max-w-full top-0 z-10 ">
          <Header/>
          <Navbar/>
          <Switch>
            <Route exact path="/dhri-yama/lighthouse">
              <Home/>
            </Route>
            <Route path="/uigraphics">
              <Cardcontainer resources={resources} section={"uigraphics"}/>  
            </Route>
            <Route path="/fonts">
              <Cardcontainer resources={resources} section={"fonts"}/>  
            </Route>
            <Route path="/images-videos">
              <Cardcontainer resources={resources} section={"stockimagesandvideos"}/>  
            </Route>
            <Route path="/designinspiration">
              <Cardcontainer resources={resources} section={"designinspiration"}/>  
            </Route>
            <Route path="/cssanimation">
              <Cardcontainer resources={resources} section={"cssanimation"}/>  
            </Route>
            <Route path="/jsanimation">
              <Cardcontainer resources={resources} section={"jsanimation"}/>  
            </Route>
            <Route path="/templates">
              <Cardcontainer resources={resources} section={"htmlcsstemplate"}/>  
            </Route>
          </Switch>
          <Footer/>
        </div>
      </div>
    </Router> 
  );
}

export default App;
