import React from "react";

// Components
import MusicIcon from "react-ionicons/lib/IosMusicalNotes";

function Footer() {
  return (
    <footer className="c-footer">
      <MusicIcon className="c-footer_music" color="current" />
      <p className="c-footer_copyright">Mélissa Bissonnette © 2019 | melissa@melmusique.com</p>
    </footer>
  );
}

export default Footer;
