import React from "react";
import { setPlay } from "../redux/reducers/playerReducer";
import { useDispatch } from "react-redux";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Play from "../assets/imgs/playerbuttons/Play.png";

const HomeContent = ({ data }) => {
  const dispatch = useDispatch();
  const handleClick = (el) => {
    dispatch(setPlay(el));
  };

  return (
    <>
      {data.slice(0, 6).map((el, i) => {
        return (
          <Col className="col text-center " key={el.id}>
            <img
              className="img-fluid "
              src={el.album.cover_medium}
              alt={el.title}
              onClick={() => {
                handleClick(el);
              }}
            />
            <div className="d-flex flex-column pt-1 pb-4">
              <Link className="text-truncate" to={`/album/${el.album.id}`}>
                {el.album.title}
              </Link>
              <Link to={`/artist/${el.artist.id}`}>{el.artist.name}</Link>
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default HomeContent;
