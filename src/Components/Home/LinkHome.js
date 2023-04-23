import {Component} from 'react';
import './home.css';
import {FaLinkedin} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaInstagram } from 'react-icons/fa';
import {FaTwitterSquare } from 'react-icons/fa';
export class  Link extends Component{
render(){
    return(
        <div>
        <FaLinkedin className='F1'></FaLinkedin> 
        <FaFacebookSquare className='F2'></FaFacebookSquare>
        <FaGithub className="F3"></FaGithub>
        <FaInstagram className="F4"></FaInstagram>
        <FaTwitterSquare className="F5"></FaTwitterSquare>

        </div>
    );
}
}