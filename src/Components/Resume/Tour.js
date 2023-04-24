import React from 'react';
import Tour1 from '../Vedio/video.mp4'
export function Tour(){
    return(
        <div class="row mt-5">
            <div class="col-md-1"></div>
           <div class="col-md-5">
            <p class="fs-1 text-light"><b>Take a tour of my office</b></p>
            <p class="text-secondary"><b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia cum quasi assumenda culpa praesentium consectetur voluptatibus expedita. Voluptatem tempore, aspernatur rem facilis, distinctio nemo! Odio velit, nemo dolorem voluptas!</b></p>
            <p class="text-secondary"><b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium qui aspernatur unde mollitia, in laborum.</b></p>
            </div> 
            <div class="col-md-1"></div>
            <div class="col-md-5">
                <video src={Tour1} height="300px" width="440px"/>
            </div>
        </div>
    )
}