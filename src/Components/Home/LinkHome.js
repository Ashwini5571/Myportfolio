import {Component} from 'react';
import './home.css';
import {FaLinkedin} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {FaGithub} from 'react-icons/fa';

export class  Link extends Component{
render(){
    return(
        <div>
        <FaLinkedin className='F1'></FaLinkedin> 
        <MdEmail className='F2'></MdEmail>
        <FaGithub className="F3"></FaGithub>
     </div>
    );
}
}