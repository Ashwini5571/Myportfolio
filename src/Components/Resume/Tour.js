import React from "react";
import Tour1 from "../Vedio/video.mp4";
export function Tour() {
  return (
    <div class="row mt-5">
      <div class="col-md-1"></div>
      <div class="col-md-5 mt-5" align="left">
        <p class="fs-1 text-light">
          <b>Take a tour of Ethnus</b>
        </p>
        <p class="text-secondary">
          <b>
            Ethnus provides Good proffesional teaching of soft spoken skills and good place for training .Ethnus is one of the best platform and a training centre to learn, grow knowledge and enhance our skills. It helps the students to get jobs in various companies which include MNC's as well. The whole Ethnus team are much supportive throughout the training till we get placed.
          </b>
        </p>
        <p class="text-secondary">
          <b>
          The entire training sessions were much interesting, helpful, effective and easily understandable.
          </b>
        </p>
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-5 mt-5">
        <video controls autoPlay height={"300px"} width={"440px"}>
          <source src={Tour1} />
        </video>
      </div>
    </div>
  );
}
