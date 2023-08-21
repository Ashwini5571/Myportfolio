import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import calculator from '../Image/calculator.jpg'
import Color from '../Image/colorpicker.png'
import Table from '../Image/Table.png'
// ==


import './blog.css';
import { Nav } from '../Home/NavHome';
export function Myblog(){
    return(
        <div>
            <Nav />
            <p class="text-light post text-center">Check out my latest protect posts</p>
            <p class="p1 text-center"><b>My Project</b></p><br/><br/>
            <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-3">
                <div class="card-header">
                    <a href='https://ashwini5571.github.io/Calculator/' target='_blank'>
                <img src={calculator} height="200px" width="300px" class="img"/>
                </a>
                </div><br/>
                <div class="card-body" align="left">
                    <p  class="text-light blog "><b class="fs-3">Simple Calculator</b></p>
                    
                </div>

            </div>

            <div class="col-md-3">
                <div class="card-header">
                    <a href='https://ashwini5571.github.io/Color-Picker/' target='_blank'>
                <img src={Color} height="200px" width="300px"  />
                </a>
                </div><br/>
                <div class="card-body" align="left">
                    <p  class="text-light blog "><b class="fs-3">Color Picker</b></p>
                    {/* <p class="text-light text">This is Simple Reactjs project</p> */}
                </div>

            </div>


            <div class="col-md-3">
                <div class="card-header">
                <img src={Table} height="200px" width="300px"  />
                </div><br/>
                <div class="card-body" align="left">
                    <p  class="text-light blog"><b class="fs-3">Student Form</b></p>
                    {/* <p class="text-light text">It is one of the NodeJs project. <br/>It can store the Student information. database also used</p> */}
                </div>

            </div>
             </div>
         </div>
    )
}