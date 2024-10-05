import React from "react";
import Herosection from "./Layouts/Hero";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header"
import Navbar from "./Layouts/Navbar"
import Body from "./component/body"
import Service from "./component/services"
import GoogleReview from "./component/excellent"
import Cards from "./component/cards"

const App=()=>{
 return (
  <>
  <div>
     
     <Header/>
    <Navbar/>
    <Herosection/>
    {/* <Body/> */}
    {/* <Service/> */}
    <GoogleReview/>
    <Cards/>


    {/* <Excellent/> */}
    {/* <Cards/> */}
    {/* <Appointment/> */}
    {/* <LearnMore/> */}
    {/* <DonateUs/> */}
    <Footer/>
    
  </div> 
</>

 )
}

export default App;