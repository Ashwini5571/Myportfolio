import {Component} from 'react';
import './about.css';
import {FaCentos} from 'react-icons/fa';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export class Nav extends Component{
    render(){
        return(
       
           <div id="D1">
            <ul class="nav p-3 container-fixed" >
            <li class="nav-item">
                 <a class="nav-link text-warning  ">  <FaCentos class="f1"></FaCentos> <b>Bootstrap</b> </a> 
                
            </li>
            <li class="nav-item ms-auto">
                 <a href="/about" class="nav-link text-light"> About</a>
            </li>
            <li class="nav-item ">
                 <a class="nav-link text-light"> Resume</a>
            </li>
            <li class="nav-item ">
                 <a class="nav-link text-light"> Portfolio</a>
            </li>
            <li class="nav-item ">
                 <a class="nav-link text-light"> Blog</a>
            </li>
            <li class="nav-item ">
                 <a class="nav-link text-light"> Contact</a>
            </li>
 
            </ul>
            </div>
        )
    }
           
}