import React from "react";
import PropTypes from "prop-types";
import cn from "classnames-helper";

// Components
import MusicIcon from "react-ionicons/lib/IosMusicalNotes";

function AnimatedMusicNote({ className, main }) {
  return (
    <div className={cn("w-melissa-musique", "c-animated-music-note", className, ["-main", main])}>
      <MusicIcon className="w-melissa-musique c-animated-music-note_icon" color="current" />
    </div>
  );
}

AnimatedMusicNote.defaultProps = {
  main: false,
  className: ""
};

AnimatedMusicNote.propTypes = {
  main: PropTypes.bool,
  className: PropTypes.string
};

export default AnimatedMusicNote;
