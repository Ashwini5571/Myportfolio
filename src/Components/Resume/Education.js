import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./resume.css";

export function Education() {
  return (
    <div>
      <p class="text-light mt-5 text-center">
        Check out my Resume
      </p>
      <p class="text-center resume" >
        <b>Resume</b>
      </p>
      <br />
      <br />
      <h2 class="text-light mt-2 text-center">
        <b>Education</b>
      </h2>
      <br />
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-4 bord">
          <div class="card-header" >
            <p class="text-light fs-5 resume ">
              <b>Secondary Education</b>
            </p>
            <p class="text-secondary text fs-6">
              <b>
                State Board / 2014 - 2016 <br />
               Government pre-university college Uppunda
              </b>
            </p>
            <hr class="text-white"></hr>
          </div>

          <div class="card-header " >
            <p class="text-light fs-5 resume">
              <b>PCMCs</b>
            </p>
            <p class="text-secondary text fs-6">
              <b>
                {" "}
                State Board / 2016 - 2018 <br />
                Government pre-university college Byndoor
              </b>
            </p>
            <hr class="text-white"></hr>
          </div>

          <div class="card-header" >
            <p class="text-light fs-5 resume">
              <b>BCA </b>
            </p>
            <p class="text-secondary text fs-6">
              <b>
                Mangalore University / 2019 - 2022 <br />
                Dr. B B Hegde First Grade College Kundapura.
              </b>
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
