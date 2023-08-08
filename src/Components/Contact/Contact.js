import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {FaBullseye} from 'react-icons/fa';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {FaPhoneAlt} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import './contact.css'

export function Contact(){
    return(
        <div>
            <p class="text-secondary text-center mt-5"><b>Feel free to contact me anytime</b></p>
            <p class="p1 text-center"><b>Get in Touch</b></p><br/><br/>
            <div class="row mt-5" >
                <div class="col-md-1"></div>
                <div class="col-md-6" align="left">
                    <h3 class="text-light"><b>Message Me</b></h3><br/>
                    <input type="text " placeholder='Name'/>
                    <input type="text" class="ms-5" placeholder='Email'/><br/><br/>
                    <input class="input1" type="text " placeholder='Subject'/><br/><br/>
                    <textarea type="text" placeholder='Message'></textarea><br/><br/>
                    <button type="button" class="btn btn-success btn-lg rounded-5">Send Message</button>
                </div>

                <div class="col-md-4" align="left">
                <h3 class="text-light"><b>Contact Info</b></h3><br/>
                <p class=" ff1">Always available for work if the right project comes along, Feel free to contact me!</p><br/>
                <div class="row">
                    <div class="col-md-2">
                    <FaBullseye class="Icon"></FaBullseye><br/><br/>
                    <FaMapMarkerAlt class="Icon mt-3"></FaMapMarkerAlt><br/><br/>
                    <FaPhoneAlt class="Icon mt-3"></FaPhoneAlt><br/><br/>
                    <FaEnvelope class="Icon mt-3"></FaEnvelope>
                    <vr class="text-red"></vr>
                   
                     </div>
                     <div class="col-md-5">
                        <h6 class="text-light"><b>Name</b></h6>
                        <h6 class="text-secondary">Ashwini R H</h6><br/>
                        <h6 class="text-light"><b>Location</b></h6>
                        <h6 class="text-secondary">Bangalore, India</h6><br/>
                        <h6 class="text-light"><b>Call Me</b></h6>
                        <h6 class="text-secondary">9632625571</h6><br/>
                        <h6 class="text-light"><b>Email Me</b></h6>
                        <h6 class="text-secondary">ashwinirkharvi778@gmail.com</h6><br/>

                     </div>
                </div>
                </div>
            </div>
        </div>
    )
}