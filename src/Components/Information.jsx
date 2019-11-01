import React,{Component} from "react"
import "../stylesheet/information.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Information extends Component{

    render(){
        return(
            <>
            <div className="container-fluid info-container">
                <div className="row align-items-center">
                    <div className="col-sm-5">
                    <div data-aos="zoom-in"
                      data-aos-easing="ease"
                      data-aos-duration="500" >
                <img src="http://www.comune.torino.it/pass/informadisabile/files/2017/10/network-web-generic-02.png" className="img-fluid img-info"/>
                    </div>
                    </div>
                    <div className="col-sm-7 mt-4 mt-md-0">
                    <div className="cust-toast">
                    <FontAwesomeIcon icon="user" size="2x" />
                    <div className="info-text d-inline">
                        <h3>Subtitle 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe rerum eum qui incidunt facere consequatur ab amet fugit assumenda?</p>
                    </div>
                    </div>
                    <div className="cust-toast">
                    <FontAwesomeIcon icon="tv" size="2x" />
                    <div className="info-text d-inline">
                        <h3>Subtitle 2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe rerum eum qui incidunt facere consequatur ab amet fugit assumenda?</p>
                    </div>
                    </div>
                    <div className="cust-toast">
                         <FontAwesomeIcon icon="phone-alt" size="2x" />
                         <div className="info-text d-inline">
                        <h3>Subtitle 3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe rerum eum qui incidunt facere consequatur ab amet fugit assumenda?</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
                </>
        )
    }
}