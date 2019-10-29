import React,{Component} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../stylesheet/introduction.css"

export default class Introduction extends Component{


    render(){
        return(
            <>
            <div className="container-fluid mt-4" id="introduction">
                <div className="text-center mb-5">
            <h1>INTRODUCTION</h1>
                </div>
                <div className="row">
                    <div className="col-sm-4 text-center">
                        <div data-aos="fade-down"
                            data-aos-easing="ease"
                            data-aos-duration="500">
                                  <FontAwesomeIcon icon="eye" size="4x" />
                                  <h3>subtitle</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="col-sm-4 text-center">
                        <div data-aos="fade-down"
                            data-aos-easing="ease"
                            data-aos-duration="700">
                                  <FontAwesomeIcon icon="code-branch" size="4x" />
                                <h3>subtitle</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="col-sm-4 text-center">
                        <div data-aos="fade-down"
                            data-aos-easing="ease"
                            data-aos-duration="900">
                                  <FontAwesomeIcon icon="globe" size="4x" />
                                  <h3>subtitle</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div>
                   
            </div>
            </div>
            </>
        )
    }
}