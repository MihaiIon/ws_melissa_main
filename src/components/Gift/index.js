import React, { Fragment } from "react";
import { Swing as Animation } from "react-reveal";

import Article from "../Article";
import P from "../_base/P";

import { buildAssetUrl, formatArticleProps, formatClassNames as fcn } from "../../helpers";

function Gift() {
  const articleProps = formatArticleProps({
    content: [
      <Fragment>
        <P>
          Vous connaissez quelqu'un qui souhaite <b>découvrir la musique</b> et qui ne sait pas où commencer?
        </P>
        <P>
          Offrez-y 2 séances <b>à coût réduit</b> lalala lalala la la <b>cadeau youpii</b>.
        </P>
      </Fragment>
    ],
    imageSource: buildAssetUrl("melissa-bissonnette_recitals.png"),
    imageDescription: "Mélissa Bissonnette | Cours de musique à distance - Zoom",
    title: "Cours cadeau"
  });

  return (
    <section className={fcn("c-gift")}>
      <Article {...articleProps} feature />
    </section>
  );
}

export default Gift;
