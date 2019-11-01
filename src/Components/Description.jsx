import React,{Component} from "react"
import "../stylesheet/description.css"
import { Badge } from 'reactstrap';

export default class Description extends Component{


    render(){
        return(
            <div className="container-fluid description-container">
                <div className="row">
                    <div className="col-sm-4 left-description">
                        <div className="description-intro">
                        <h3>A little title introduction</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dignissimos impedit facere nisi assumenda necessitatibus laboriosam, id libero rem, minus eius iste accusamus recusandae labore, quasi autem eaque iusto voluptatem!</p>
                        </div>
                    </div>
                    <div className="col-sm-8 pt-5 pb-5">
                        <h1>How it works</h1>
                        <div className="row mt-5"> 
                    <div className="col-md-6">
                   <h5><Badge color="info">1</Badge> Step One </h5>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia placeat earum ullam officiis quasi cum odio id incidunt ex facilis!</p>
                    </div>
                    <div className="col-md-6">
                   <h5><Badge color="info">2</Badge> Step Two </h5>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia placeat earum ullam officiis quasi cum odio id incidunt ex facilis!</p>
                    </div>
                    <div className="col-md-6">
                   <h5><Badge color="info">3</Badge> Step Three </h5>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia placeat earum ullam officiis quasi cum odio id incidunt ex facilis!</p>
                    </div>
                    <div className="col-md-6">
                   <h5><Badge color="info">4</Badge> Step Four </h5>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia placeat earum ullam officiis quasi cum odio id incidunt ex facilis!</p>
                    </div>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}