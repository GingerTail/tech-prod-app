import React,{Component} from "react";
import Navbar from "./Navbar";
import "../stylesheet/structure.css"
import JumbHeader from "./JumbHeader";
import Introduction from "./Introduction";
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import { fab, faFacebook } from '@fortawesome/free-brands-svg-icons'
import Information from "./Information";
import Description from "./Description";
import SubmitForm from "./SubmitForm";
import Footer from "./Footer";  
import Thankyou from "./Thankyou";

library.add(fas, fab, faFacebook)

export default class LandingPage extends Component{


    render(){
        return(
            <>
           <Navbar/>
            <JumbHeader/>
            <Information/>
            <Introduction/>
            <Description/>
            <SubmitForm/>
            <Footer/> 
           {/*  <Thankyou/> */}
            </>

        )
    }
}