import { Link, useParams } from "react-router-dom";
import Player from "../components/Player";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id, songId } = useParams();
  const { image, name, duration, artist } = songsArray.filter(
    (currentSongtObj) => currentSongtObj.id === Number(id)
  )[0];
  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];
  console.log("SongId" + songId + "Id" + id);

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist
  );
  // console.log(songsArrayFromArtist);

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );
  const randomIndex2 = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const ramdomIdFromArtist = songsArrayFromArtist[randomIndex].id;
  const ramdomId2FromArtist = songsArrayFromArtist[randomIndex2].id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`imagem do artista ${name}`}></img>
        </div>
      </div>
      <div className="song__bar">
        <div className="song__artist-image">
          <Link to={`/artist/${artistObj.id}`}>
            <img
              style={{ width: "75px", height: "75px" }}
              src={`${artistObj.image}`}
              alt={`imagem do artista ${artist}`}
            />
          </Link>
        </div>

        <Player
          duration={duration}
          ramdomIdFromArtist={ramdomIdFromArtist}
          ramdomId2FromArtist={ramdomId2FromArtist}
        />
        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
