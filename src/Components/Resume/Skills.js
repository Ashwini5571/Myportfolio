import React from "react";

export function Skill() {
  return (
    <div >
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-8 text-light" align-left>
          <p class="text-light mt-1">My level of knowledge in some tools</p>
          <h1 className=" pb=3">
            <b>My Skills</b>
          </h1>
          <br />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <label class="text-light" for="file">
            HTML - 85%
          </label>
          <progress id="A1" value="85" max="100" style={{ width: "100%" }}></progress>
          <br />
          <br />
          <label class="text-light" for="file">
            CSS - 80%
          </label>
          <progress id="A1" value="80" max="100" style={{ width: "100%" }}></progress>
          <br />
          <br />
          <label class="text-light" for="file">
            Bootstrap - 70%
          </label>
          <progress id="A1" value="70" max="100" style={{ width: "100%" }}></progress>
          <br />
          <br />
          <label class="text-light" for="file">
            Javascript - 65%
          </label>
          <progress id="A1" value="65" max="100" style={{ width: "100%" }}></progress>
          <br />
          <br />
          <label class="text-light" for="file">
            Java - 40%
          </label>
          <progress id="A1" value="40" max="100" style={{ width: "100%" }}></progress>
          <br />
          <br />
        </div>

        <div class="col-md-5">
          <label class="text-light" for="file">
            React Js - 82%
          </label>
          <progress id="A1" value="82" max="100" style={{ width: "100%" }}></progress>
          <br />
          <br />
          <label class="text-light" for="file">
            Express Js - 75%
          </label>
          <progress id="A1" value="75" max="100" style={{ width: "100%" }}></progress>
          <br />
          <br />
          <label class="text-light" for="file">
          NodeJs - 60%
          </label>
          <progress id="A1" value="60" max="100" style={{ width: "100%" }}></progress>
          <br />
          <br />
          <label class="text-light" for="file">
          MongoDB - 60%
          </label>
          <progress id="A1" value="60" max="100" style={{ width: "100%" }}></progress>
          <br />
          <br />
          <label class="text-light" for="file">
          python - 50%
          </label>
          <progress id="A1" value="50" max="100" style={{ width: "100%" }}></progress>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
