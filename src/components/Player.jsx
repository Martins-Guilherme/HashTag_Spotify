import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faCirclePlay,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Player = ({duration, ramdomIdFromArtist, ramdomId2FromArtist}) => {
  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${ramdomIdFromArtist}`}>
          <FontAwesomeIcon
            className="player__icon player__icon--play"
            icon={faBackwardStep}
          />
        </Link>
        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={faCirclePlay}
        />
        <Link to={`/song/${ramdomId2FromArtist}`}>
          <FontAwesomeIcon
            className="player__icon player__icon--play"
            icon={faForwardStep}
          />
        </Link>
      </div>
      <div className="player__progress">
        <p>00:00</p>
        <div className="player__bar">
          <div className="player__bar--progress"></div>
        </div>
        <p>{duration}</p>
      </div>
    </div>
  );
};

export default Player;
