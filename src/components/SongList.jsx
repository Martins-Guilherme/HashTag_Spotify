import { useState } from "react";
import SongItem from "./SongItem";

const SongList = ({ songsArray }) => {
  // let items = 5;
  // items += 5;
  const [items, setItems] = useState(5);
  // console.log(items);
  const [buttonText, setButtonText] = useState("Ver mais");

  function displayHidden() {
    if (items === 5) {
      setItems(items + 5);
      setButtonText("Ver menos");
    } else {
      setItems(5);
      setButtonText("Ver mais");
    }
  }

  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}
      <p className="song-list__see-more" onClick={() => displayHidden()}>
        {buttonText}
      </p>
    </div>
  );
};

export default SongList;
