import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './about.css';
import { Nav } from '../Home/NavHome';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';




import ashwini from '../Image/Ashwini.jpg'
export function Aboutme(){
    return(
        <div>
            <Nav />
            <p class="text-light mt-3 text-center" >Get to me Know</p>
            <p class="p1 text-center"><b>About me</b></p>
            <div class="row mt-5">
                <div class="col-md-4">
                    <img src={ashwini} height="500px" width="400px"/>
                </div>
                <div class="col-md-8" align="left">
                    <h4 class="text-success iam">Who am i?</h4>
                    <p class="text-white fs-3"><b>I'm  Ashwini R H, I am ReactJs Developer<br/> </b></p>
                    <p class=" p3">I am frontend reactjs developer. I am create a attractive web pages. And i am done <br/>three Simple projects based on HTML,CSS,Bootstrap, Javascript, and ReactJs.  </p>
                    <hr class="text-white"/>
                    <div class="row ">
                        <div class="col-md-4 mt-3 text-light">
                            <p>Name:  <span class="text-secondary"><b>Ashwini</b></span> </p>
                            {/* <p>Age: <span class="text-secondary"><b>22</b></span></p> */}
                        </div>
                        <div class="col-md-5 mt-3 text-light">
                            <p>Email: <spn class="text-success"><b>ashwinirkharvi778@gmail.com</b></spn></p>
                            <p>From: <span class="text-secondary"><b>Bangalore, India</b></span></p>
                        </div>
                        <div class="row mt-5">
                            <div class="col-md-7">
                            <button type="button" class="btn btn-success btn-lg rounded-5" >Download CV</button>
                            <span className='mx-4 text-secondary' style={{whiteSpace:"pre",textDecorationLine:"line-through"}}>                </span>
                            
                        
                            <MdEmail className="logo1 text-light"></MdEmail>
                            <FaLinkedin className="logo text-light"></FaLinkedin> 
                            <FaGithub className="logo text-light"></FaGithub>
                            
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}