import React from "react";
import { Link } from "react-router-dom";
//Styling & Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailAction";

import { smallImage } from "../util";

const Game = ({ id, name, released, image }) => {
  const dispatch = useDispatch();
  const loadDetailhandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetails(id));
  };

  return (
    <StyledGame layoutId={id.toString()} onClick={loadDetailhandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${id.toString()}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${id.toString()}`}
          src={image}
          // src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
