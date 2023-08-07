import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./resume.css";

export function Education() {
  return (
    <div>
      <p class="text-secondary mt-3 text-center">
        <b>Check out my Resume</b>
      </p>
      <p class="p1 text-center">
        <b>Resume</b>
      </p>
      <br />
      <br />
      <h2 class="text-light text-center">
        <b>Education</b>
      </h2>
      <br />
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-4 bord">
          <div class="card-header" align="left">
            <p class="text-light fs-5 ">
              <b>Secondary Education</b>
            </p>
            <p class="text-secondary text">
              <b>
                State Board / 2014 - 2016 <br />
               Government pre-university college Uppunda
              </b>
            </p>
            <hr class="text-white"></hr>
          </div>

          <div class="card-header" align="left">
            <p class="text-light fs-5">
              <b>PCMCs</b>
            </p>
            <p class="text-secondary text">
              <b>
                {" "}
                State Board / 2016 - 2018 <br />
                Government pre-university college Byndoor
              </b>
            </p>
            <hr class="text-white"></hr>
          </div>

          <div class="card-header" align="left">
            <p class="text-light fs-5">
              <b>BCA </b>
            </p>
            <p class="text-secondary text">
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