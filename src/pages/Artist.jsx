import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";

import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
const Artist = () => {
  const { id, songId } = useParams();

  const { name, banner } = artistArray.filter(
    (currentArtistObj) => currentArtistObj.id === id
  );

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === name
  );

  let ramdomIdFromArtist;
  
  if (songsArrayFromArtist.lenth > 0){
    const randomIndex = Math.floor(
      Math.random() * (songsArrayFromArtist.length - 1)
    );
    songsArrayFromArtist[randomIndex].id;
  }
  
  
  console.log("Ramdom id from artist "+ramdomIdFromArtist);
  // console.log(ramdomIdFromArtist);
  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})`,
        }}
      >
        <h2 className="artist__title">{name}</h2>
      </div>
      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songsArrayFromArtist} />
      </div>

      <Link to={`/song/${ramdomIdFromArtist}`}>
        <FontAwesomeIcon
          className="single-item__icon--artist single-item__icon"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
