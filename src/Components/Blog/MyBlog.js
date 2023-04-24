import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import photograph from '../Image/photo.jpeg'
import Office from '../Image/office.jpeg'
import Designer from '../Image/designer.jpeg'
import Perform from '../Image/perform.jpeg'
import work from '../Image/work.jpeg'
import Business from '../Image/business .webp'


import './blog.css';
import { Nav } from '../Home/NavHome';
export function Myblog(){
    return(
        <div>
            <Nav />
            <p class="text-secondary mt-3 text-center"><b>Check out my latest blog posts</b></p>
            <p class="p1 text-center"><b>My Blog</b></p><br/><br/>
            <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-3">
                <div class="card-header">
                <img src={photograph} height="200px" width="300px" class="img"/>
              
                </div><br/>
                <div class="card-body" align="left">
                    <p  class="text-light "><b>Top tools for Photographers</b></p>
                    <p class="text-secondary text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                    
                </div>

            </div>

            <div class="col-md-3">
                <div class="card-header">
                <img src={Office} height="200px" width="300px"  />
                </div><br/>
                <div class="card-body" align="left">
                    <p  class="text-light "><b>Take a tour of my office</b></p>
                    <p class="text-secondary text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                </div>

            </div>


            <div class="col-md-3">
                <div class="card-header">
                <img src={Designer} height="200px" width="300px"  />
                </div><br/>
                <div class="card-body" align="left">
                    <p  class="text-light "><b>How i became a Web Designer </b></p>
                    <p class="text-secondary text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                </div>

            </div>
             </div><br/><br/>


            <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-3">
                <div class="card-header">
                <img src={Perform} height="200px" width="300px"  />
                </div><br/>
                <div class="card-body" align="left">
                    <p  class="text-light "><b>How to improve work performance</b></p>
                    <p class="text-secondary text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                </div>

            </div>

            <div class="col-md-3">
                <div class="card-header">
                <img src={work} height="200px" width="300px"  />
                </div><br/>
                <div class="card-body" align="left">
                    <p  class="text-light "><b>How to work from home</b></p>
                    <p class="text-secondary text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                </div>

            </div>


            <div class="col-md-3">
                <div class="card-header">
                <img src={Business} height="200px" width="300px"  />
                </div><br/>
                <div class="card-body" align="left">
                    <p  class="text-light "><b>How to enjoy your business trip</b></p>
                    <p class="text-secondary text text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, porro rem quod illo quam, eum alias id, repellendus magni, quas.</p>
                </div>

            </div>
         </div>
        </div>
    )
}