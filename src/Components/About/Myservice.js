import './about.css'
import {FaExpandArrowsAlt} from 'react-icons/fa';
import {FaImages} from 'react-icons/fa';
import {FaCss3Alt} from 'react-icons/fa';
import {FaPenNib } from 'react-icons/fa';
import {FaWordpressSimple} from 'react-icons/fa';
import {FaBullseye} from 'react-icons/fa';
export function Myservice(){
    return(
        <div class="T1">
            <p class="P1 text-secondary"><b>Services i offer to my clients</b></p>
            <p class="P2 text-light"><b>My Service</b></p><br/><br/>
           
            <div class="row mt-5" align="left">
                <div class="col-md-1"></div>
                <div class="col-md-3">
                
                    <div class="card-body " >
                    <FaCss3Alt class="Icon1" ></FaCss3Alt>
                    <p class="card-text text-light fs-3 mt-4" align="left"><b>Design Trends</b></p>
                    <p class="card-text text-light" align="left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </div>
                </div> 

                <div class="col-md-1"></div>
                <div class="col-md-3">
                
                    <div class="card-body ">
                    <FaImages class="Icon1"></FaImages>
                    <p class="card-text text-light fs-3 mt-4" align="left"><b>PSD Design</b></p>
                    <p class="card-text text-light" align="left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </div>
                </div>

                <div class="col-md-1"></div>
                <div class="col-md-3">
                
                    <div class="card-body">
                    <FaBullseye class="Icon1"></FaBullseye>
                    <p class="card-text text-light fs-3 mt-4" align="left"><b>Customer Support</b></p>
                    <p class="card-text text-light" align="left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </div><br/><br/>
                </div>
                
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-3">

                    <div class="card-body">
                   <FaWordpressSimple class="Icon1"></FaWordpressSimple>
                    <p class="card-text text-light fs-3 mt-4" align="left"><b>Web Development</b></p>
                    <p class="card-text text-light" align="left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </div>
                    </div>

                    <div class="col-md-1"></div>
                <div class="col-md-3 ">
                
                    <div class="card-body ">
                    <FaExpandArrowsAlt class="Icon1"></FaExpandArrowsAlt>
                    <p class="card-text text-light fs-3 mt-4" align="left"><b>Fully Responsive</b></p>
                    <p class="card-text text-light" align="left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </div>
                </div>

                <div class="col-md-1"></div>
                <div class="col-md-3">
                
                    <div class="card-body">
                        <FaPenNib class="Icon1"></FaPenNib>
                    <p class="card-text text-light fs-3 mt-4" align="left"><b>Branding</b></p>
                    <p class="card-text text-light" align="left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </div>
                </div>

                </div>
                
            </div>

           
       </div>
    )   
}