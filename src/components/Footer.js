import React from "react";

// Components
import MusicIcon from "react-ionicons/lib/IosMusicalNotes";

function Footer() {
  return (
    <footer className="c-footer">
      <div className="c-footer_music">
        <MusicIcon className="c-footer_music_icon" color="current" />
      </div>
      <p className="c-footer_copyright">Mélissa Bissonnette © 2019 | melissa@melmusique.com</p>
    </footer>
  );
}

export default Footer;
