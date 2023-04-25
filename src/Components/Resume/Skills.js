import React from "react";

export function Skill() {
  return (
    <div class="T1">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-8 text-light" align-left>
          <h4 class="text-secondary">My level of knowledge in some tools</h4>
          <h1 className=" pb=3">
            <b>My Skills</b>
          </h1>
          <br />
        </div>
      </div>
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <label class="text-light" for="file">
            HTMl/CSS /92%
          </label>
          <progress id="A1" value="95" max="100" style={{ width: "100%" }}></progress>
          <br />
          <br />
          <label class="text-light" for="file">
            Web Design /80%
          </label>
          <progress id="A1" value="80" max="100" style={{ width: "100%" }}></progress>
          <br />
          <br />
          <label class="text-light" for="file">
            Javascript /90%
          </label>
          <progress id="A1" value="90" max="100" style={{ width: "100%" }}></progress>
          <br />
          <br />
        </div>

        <div class="col-md-5">
          <label class="text-light" for="file">
            React Js /90%
          </label>
          <progress id="A1" value="90" max="100" style={{ width: "100%" }}></progress>
          <br />
          <br />
          <label class="text-light" for="file">
            Express Js /95%
          </label>
          <progress id="A1" value="80" max="100" style={{ width: "100%" }}></progress>
          <br />
          <br />
          <label class="text-light" for="file">
            Typescript /80%
          </label>
          <progress id="A1" value="90" max="100" style={{ width: "100%" }}></progress>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
