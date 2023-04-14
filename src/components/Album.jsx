import React from "react";
import "../assets/App.css";
import Sidebar from "./Sidebar";
import Player from "./Player";
import Topbar from "./Topbar";

const Album = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-12 col-md-9 offset-md-3 mainPage">
            <Topbar />

            <div className="row">
              <div
                className="col-md-3 pt-5 text-center"
                id="img-container"
              ></div>

              <div className="col-md-8 p-5">
                <div className="row">
                  <div className="col-md-10 mb-5" id="trackList"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Player />
    </>
  );
};

export default Album;
