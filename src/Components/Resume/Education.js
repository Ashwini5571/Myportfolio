import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './resume.css';

export function Education(){
    return(
        <div>
            <p class="text-secondary mt-3"><b>Check out my Resume</b></p>
            <p class="p1"><b>Resume</b></p><br/><br/>
            <h2 class="text-light"><b>Education</b></h2><br/><br/>
            <div class="row">
                
                <div class="col-md-3"></div>
                 <div class="col-md-4 bord">
          
                 <div class="card-body" align="left">
                    <p  class="text-light fs-5 "><b>Secondary Education</b></p>
                    <p class="text-secondary text"><b>State Board / 2014 - 2016 <br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</b></p>
                    <hr class="text-white"></hr>
                </div><br/>

                   <div class="card-body" align="left">
                    <p  class="text-light fs-5"><b>Computer Science</b></p>
                    <p class="text-secondary text"><b> State Board / 2016 - 2018 <br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</b></p>
                    <hr class="text-white"></hr>
                </div> <br/>

                <div class="card-body" align="left">
                    <p  class="text-light fs-5"><b>Computer Science</b></p>
                    <p class="text-secondary text"><b>Mangalore University / 2019 - 2022 <br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.</b></p>
                    <hr class="text-white"></hr>
                </div>
                </div>
            </div><br/><br/>
        </div>
    )
}