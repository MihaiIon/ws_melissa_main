import React from "react";

// Components
import { Fade } from "react-reveal";
import Link from "../Link";
import RegisterAppPreview from "./components/RegisterAppPreview";

function Register() {
  return (
    <section id="register" className="w-melissa-musique c-register o-wrapper o-section">
      <div className="w-melissa-musique o-layout -gutter">
        <div className="w-melissa-musique o-layout_item u-1/2">
          <Fade up>
            <RegisterAppPreview />
          </Fade>
        </div>
        <div className="w-melissa-musique o-layout_item u-1/2">
          <h1 className="w-melissa-musique o-h1">Rendez-vous</h1>
          <h2 className="w-melissa-musique o-h2">Plateforme en ligne</h2>
          <p className="w-melissa-musique o-p">
            Une plateforme en ligne sera bientôt disponible pour simplifier la prise de rendez-vous
          </p>
          <p className="w-melissa-musique o-p">
            En attendant, vous pouvez communiquer avec moi à l'aide de l'adresse courriel suivante:
          </p>
          <p className="w-melissa-musique o-p">
            <b>melissa@melmusique.com</b>
          </p>
          <Link to="/todo" feature disabled>
            Bientôt disponible
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Register;
