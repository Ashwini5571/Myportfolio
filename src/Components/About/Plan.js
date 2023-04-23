import './about.css'
import {FaPenNib } from 'react-icons/fa';
import {FaBullseye } from 'react-icons/fa';
import {FaEgg } from 'react-icons/fa';
export function MyPlan(){
    return(
        <div>
            <p class="P11 text-secondary"><b>Get started with my services</b></p>
            <p class="P21"><b>Choose a Plan</b></p><br/><br/>
            <div class="row">
            <div class="col-md-1"></div>
                <div class="col-md-3 Card1" >
                
                    <div class="card-body1 " >
                    <FaEgg class="Icon2"></FaEgg>
                    <p class="card-text text-light fs-2 mt-4" ><b>Standard</b></p>
                    <h3 class="card-title text-light c1">$10/ <span class="text-light">month</span></h3><br/>
                    <p class="card-text text-secondary para" ><b>Mobile App Design <br/><br/>Responsive Design <br/><br/>Database Development <br/><br/>Web Design <br/><br/>24/7 Support </b></p>
                    <button type="button" class="btn btn-success btn-lg rounded-5" >Get Standard</button>
                    </div>
                </div> 

                <div class="col-md-3 Card1" >
                
                    <div class="card-body1 " >
                    <FaPenNib class="Icon2"></FaPenNib>
                    <p class="card-text text-light fs-2 mt-4" ><b>Proffesional</b></p>
                    <h3 class="card-title text-light c1">$29/ <span class="text-light">month</span></h3><br/>
                    <p class="card-text  para text-secondary" ><b>Mobile App Design <br/><br/>Responsive Design <br/><br/>Database Development <br/><br/>Web Design <br/><br/>24/7 Support </b></p>
                    <button type="button" class="btn btn-success btn-lg rounded-5" >Get Pro</button>
                    </div>
                </div> 

                <div class="col-md-3 Card1" >
                
                    <div class="card-body1 " >
                    <FaBullseye class="Icon2"></FaBullseye>
                    <p class="card-text text-light fs-2 mt-4" ><b>Business</b></p>
                    <h3 class="card-title text-light c1">$39/ <span class="text-light">month</span></h3><br/>
                    <p class="card-text text-secondary para" ><b>Mobile App Design <br/><br/>Responsive Design <br/><br/>Database Development <br/><br/>Web Design <br/><br/>24/7 Support </b></p>
                    <button type="button" class="btn btn-success btn-lg rounded-5" >Get Business</button>
                    </div>
                </div> 
            </div>
        </div>
    )
}