import React,{Component} from "react"
import "../stylesheet/thankyou.css"

export default class Thankyou extends Component{

    render(){
        return(
            <>
            <div className="thank-container">
                <h2>Thank you for signup</h2>
                <p>We are sending a notification email for registration<br/>
                Stay tuned with our latest news</p>
                <p className="d-inline">go back to: </p>
                <a  href="/"> Home</a>
            </div>
            </>
        )
    }
}