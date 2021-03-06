import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { getVideoSource } from "../actions/index";
import "../assets/styles/components/Player.scss";

const Player = (props) => {
  const [loading, setloading] = useState(true);

  const { id } = props.match.params;

  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    setloading(false);
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <Redirect to="/Video-Page/404/" />
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
