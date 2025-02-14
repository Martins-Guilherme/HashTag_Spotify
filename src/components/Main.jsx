import ItemList from "./ItemList.jsx";
import { artistArray } from "../assets/database/artists.js";
import { songsArray } from "../assets/database/songs.js";

const Main = ({ type }) => {
  console.log(type);
  return (
    <div className="main">
      {/* Item Lista de Artistas */}
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={5}
          itemsArray={artistArray}
          path="/artists"
          idPath="artist"
        />
      ) : (
        <></>
      )}
      {/* Item Lista de Músicas */}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={10}
          itemsArray={songsArray}
          path="/songs"
          idPath="song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
