import React from "react";
import { setPlay } from "../redux/reducers/playerReducer";
import { useDispatch } from "react-redux";
import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Hearth from "../assets/imgs/icons/hearth.gif";
import { setFavouriteSong } from "../redux/reducers/favouriteSong";

const HomeContent = ({ data }) => {
  const dispatch = useDispatch();
  const handleClick = (el) => {
    dispatch(setPlay(el));
  };

  const handleClickFavourite = (el) => {
    dispatch(setFavouriteSong(el));
  };

  return (
    <>
      {data.slice(0, 6).map((el, i) => {
        return (
          <Container key={el.id}>
            <Col className="col text-center ">
              <Container className="position-relative overflow-hidden ">
                <img
                  className="img-fluid "
                  src={el.album.cover_medium}
                  alt={el.title}
                  onClick={() => {
                    handleClick(el);
                  }}
                />
                <img
                  src={Hearth}
                  alt="..."
                  className="favourite-btn position-absolute w-25"
                  onClick={handleClickFavourite(el)}
                />
              </Container>
              <Container className="d-flex flex-column pt-1 pb-4">
                <Link className="text-truncate" to={`/album/${el.album.id}`}>
                  {el.album.title}
                </Link>
                <Link to={`/artist/${el.artist.id}`}>{el.artist.name}</Link>
              </Container>
            </Col>
          </Container>
        );
      })}
    </>
  );
};

export default HomeContent;
