import React from "react";
import hburger from "../images/homepage/hburger.png";
import "../css/Homepage.css"

function Homepage() {
  return (
    <>
      <div class="">
        <div class="container-fluid homebg ">
          <div class="row ">
            <div class="col-lg-6 text-white ">
              <div>
                <img src={hburger} alt="" class="img-fluid " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
