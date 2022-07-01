import React from "react";
import Header from "./Header";

// MATERIAL ICONS
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import SongRow from "./SongRow";

const Body = ({ spotify }) => {
  const [state, dispatch] = useDataLayerValue();
  console.log(state);
  const { discover_weekly } = state;
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledWhiteIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* SONGS */}
        {discover_weekly?.tracks.items.map((item) => {
          return <SongRow track={item.track} />;
        })}
      </div>
    </div>
  );
};

export default Body;
