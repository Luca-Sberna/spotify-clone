import React, { useEffect, useState } from "react";
import "../assets/App.css";
import Sidebar from "./Sidebar";
import Player from "./Player";
import Topbar from "./Topbar";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Album = () => {
  const params = useParams();
  const [album, setAlbum] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAlbumContent = async (albumId) => {
    setIsLoading(true);
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${params.albumId}`,
      );

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setAlbum(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbumContent();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-12 col-md-9 offset-md-3 mainPage">
            <Topbar />

            {/* album */}
            {isLoading && (
              <div className="d-flex justify-content-center align-items-center pt-5 mt-5">
                <Spinner className="" variant="primary"></Spinner>
              </div>
            )}
            {!isLoading && (
              <div className="row">
                <div className="col-md-3 pt-5 text-center" id="img-container">
                  {album && (
                    <>
                      <img
                        src={album.cover_big}
                        className="card-img"
                        alt="album-cover"
                      />
                      <div className="mt-4 text-center">
                        <p className="album-title">{album.title}</p>
                      </div>
                      <div className="text-center">
                        <p className="artist-name">{album.artist.name}</p>
                      </div>
                    </>
                  )}
                </div>
                {/* tracklist */}
                <div className="col-md-8 p-5">
                  <div className="row">
                    <div className="col-md-10 mb-5" id="trackList">
                      {album &&
                        album.tracks.data.map((track) => {
                          return (
                            <div className="py-3 trackHover" key={track.id}>
                              <a
                                href="#"
                                className="card-title trackHover px-3"
                                style={{ color: "white" }}
                              >
                                {track.title}
                              </a>
                              <small
                                className="duration"
                                style={{ color: "white" }}
                              >
                                {track.duration}
                              </small>
                            </div>
                          );
                        })}
                      ;
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Player />
    </>
  );
};

export default Album;
