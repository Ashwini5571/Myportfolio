import './about.css'
import {DiJavascript1} from 'react-icons/di';
import {SiExpress} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {FaPenNib } from 'react-icons/fa';
import {FaBootstrap} from 'react-icons/fa';
import {SiMongodb} from 'react-icons/si';
export function Myservice(){
    return(
        <div >
            <p class="P1 mt-4 text-light">Services i offer to my clients</p>
            <p class="P2 text-light"><b>My Service</b></p><br/><br/>
           
            <div class="row mt-6" align="left">
                <div class="col-md-1"></div>
                <div class="col-md-3">
                
                    <div class="card-body C1" >
                    <FaReact class="Icon1" ></FaReact>
                    <p class="card-text text-light fs-3 mt-4" align="left"><b>Client side</b></p>
                    <p class="card-text text-light" align="left"><b >ReactJs </b>is open source javascript framework. It's used for building interactive user interfaces and web application.</p>
                    </div>
                </div> 

                <div class="col-md-1"></div>
                <div class="col-md-3">
                
                    <div class="card-body C1">
                    <SiExpress class="Icon1"></SiExpress>
                    <p class="card-text text-light fs-3 mt-4" align="left"><b>Server Side</b></p>
                    <p class="card-text text-light" align="left"><b>ExpressJs </b> is a node js web application framework that provides broad features for building web and mobile applications. </p>
                    </div>
                </div>

                <div class="col-md-1"></div>
                <div class="col-md-3">
                
                    <div class="card-body C1">
                    <SiMongodb class="Icon1"></SiMongodb>
                    <p class="card-text text-light fs-3 mt-4" align="left"><b>MongoDB</b></p>
                    <p class="card-text text-light" align="left"><b >MongoDB </b>is a non-relational document database that provides support for JSON-like storage.  </p>
                    </div><br/><br/>
                </div>
                
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-3">

                    <div class="card-body C1">
                   <FaBootstrap class="Icon1"></FaBootstrap>
                    <p class="card-text text-light fs-3 mt-4" align="left"><b>Responsive</b></p>
                    <p class="card-text text-light" align="left"><b>Bootstrap</b> is a free and open source CSS framework directed at responsive, mobile-first front-end <br/>web development. </p>
                    </div>
                    </div>

                    <div class="col-md-1"></div>
                <div class="col-md-3 ">
                
                    <div class="card-body C1 ">
                    <DiJavascript1 class="Icon1"></DiJavascript1>
                    <p class="card-text text-light fs-3 mt-4" align="left"><b>Javascript</b></p>
                    <p class="card-text text-light" align="left"><b>JavaScript </b>is powerful programming language that can add interactivity <br/>to a website and it is scripting language. </p>
                    </div>
                </div>

                <div class="col-md-1"></div>
                <div class="col-md-3">
                
                    <div class="card-body C1" >
                        <FaPenNib class="Icon1"></FaPenNib>
                    <p class="card-text text-light fs-3 mt-4" align="left"><b>Customer Service</b></p>
                    <p class="card-text text-light" align="left">
                    Listening, understanding customer's needs, thanking the customer and promoting a positive, helpful and friendly environment. </p>
                    </div>
                </div>

                </div>
                
            </div>

           
       </div>
    )   
}