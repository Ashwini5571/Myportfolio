import './about.css';
import person1 from '../Image/Person1.jpeg';
import person2 from '../Image/Person2.jpg';
 export function Testimonial(){
    return(
        <div class="T1">
            <p class="P1 text-secondary"><b>What my clients think about me</b></p>
            <p class="P2"><b>Testimonials</b></p><br/><br/>
            
            <div class="row Cardtest" align="left">
                <div class="col-md-1"></div>
                <div class="col-md-5">
                
                    <div class="card-header " >
                        <div class="row">
                            <div class="col-md-2">
                        <img src={person1} height="60px" width="60px" class="rounded-5" />
                        </div>
                        <div class="col-md-5">
                    <span class="card-text text-light fs-4 mt-4" ><b> Jhon santhana</b>
                    <p class="card-text fs-6 text-secondary" ><b> Entrepreneur</b> </p></span>
                    <br/>
                    </div>
                    </div>
                    </div>
                    <div class="card-body1">
                        <p class="text-secondary"><b>Emma did an excellent creative job, addressing our request quikly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended.</b></p>
                        <p></p>
                    </div>
                </div> 

                {/* <div class="col-md-1"></div> */}
                <div class="col-md-5">
                
                <div class="card-header " >
                        <div class="row">
                            <div class="col-md-2">
                        <img src={person2} height="60px" width="60px" class="rounded-5" />
                        </div>
                        <div class="col-md-5">
                    <span class="card-text1 text-light fs-4 mt-4" ><b> Meria wilson</b>
                    <p class="card-text fs-6 text-secondary" ><b> Envato Customer</b> </p></span>
                    <br/>
                    </div>
                    </div>
                    </div>
                    <div class="card-body1">
                        <p class="text-secondary  text-lift fs-6"><b>Emma did an excellent creative job, addressing our request quikly, and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended.</b></p>
                        <p></p>
                    </div>
                </div> 
                </div><br/><br/>
                </div>    
    )
 }