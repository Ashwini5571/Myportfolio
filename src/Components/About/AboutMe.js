import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './about.css';
import { Nav } from '../Home/NavHome';
import {FaLinkedin} from 'react-icons/fa';
import {FaTwitterSquare } from 'react-icons/fa';
import {FaInstagram } from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';




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
                    <h4 class="text-success">who am i?</h4>
                    <p class="text-white fs-3"><b>I'm  Ashwini R H, a visual UX/UI Designer and<br/> Web Developer</b></p>
                    <p class=" p3">I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
                    <hr class="text-white"/>
                    <div class="row">
                        <div class="col-md-4 text-light">
                            <p>Name:  <span class="text-secondary"><b>Ashwini</b></span> </p>
                            <p>Age: <span class="text-secondary"><b>22</b></span></p>
                        </div>
                        <div class="col-md-5 text-light">
                            <p>Email: <spn class="text-success"><b>ashwinirkharvi778@gmail.com</b></spn></p>
                            <p>From: <span class="text-secondary"><b>Bangalore, India</b></span></p>
                        </div>
                        <div class="row">
                            <div class="col-md-7">
                            <button type="button" class="btn btn-success btn-lg rounded-5" >Download CV</button>
                            <span className='mx-4 text-secondary' style={{whiteSpace:"pre",textDecorationLine:"line-through"}}>                </span>
                            
                            <FaTwitterSquare class="logo text-light"></FaTwitterSquare>
                            <FaInstagram class="logo text-light"></FaInstagram>
                            <FaLinkedin className="logo text-light"></FaLinkedin> 
                            <FaGithub className="logo text-light"></FaGithub>
                            <FaFacebookSquare className='logo text-light'></FaFacebookSquare>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}