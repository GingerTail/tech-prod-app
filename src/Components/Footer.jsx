import React,{Component} from "react";
import "../stylesheet/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends Component{


    render(){
        return(
            <div className="container-fluid footer-container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer text-center">
                            <p>Follow us on:</p>
                            <FontAwesomeIcon className="mr-3" icon={["fab", "facebook"]} size="2x" />
                            <FontAwesomeIcon className="mr-3" icon={["fab", "linkedin-in"]} size="2x" />
                            <FontAwesomeIcon  icon={["fab", "github"]} size="2x" />
                            <div className="mt-3">
                            <h5>Contact</h5>
                            <p><strong>Email: </strong> Sorace.lc@gmail.com<br/>
                            <strong>Mobile: </strong> xxx-xxx-xxx</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}