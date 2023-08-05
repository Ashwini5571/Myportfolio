import {Component} from 'react';
import './home.css';
import {FaCentos} from 'react-icons/fa';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export class Nav extends Component{
    render(){
        return(
       
           <div id="D1">
            <ul class="nav p-3 container-fixed" >
            <li class="nav-item">
                 <a  href="/" class="nav-link text-warning   ">  <FaCentos class="f1"></FaCentos> <b>Ashwini</b> </a> 
                
            </li>
            <li class="nav-item ms-auto">
                 <a href="/about" class="nav-link text-light" > About</a>
            </li>
            <li class="nav-item ">
                 <a class="nav-link text-light" href="/resume"> Resume</a>
            </li>
            {/* <li class="nav-item ">
                 <a class="nav-link text-light" href="/portfolio"> Portfolio</a>
            </li> */}
            <li class="nav-item ">
                 <a class="nav-link text-light" href="/blog">Project</a>
            </li>
            <li class="nav-item ">
                 <a class="nav-link text-light" href="/contact"> Contact</a>
            </li>
 
            </ul>
            </div>
        )
    }
           
}