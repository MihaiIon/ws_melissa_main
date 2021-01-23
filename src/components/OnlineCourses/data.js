import React, { Fragment } from "react";
import P from "../_base/P";

import { buildAssetUrl, formatArticleProps } from "../../helpers";

export default [
  formatArticleProps({
    content: [
      <Fragment>
        <P>
          Par les temps qui courent, votre <b>sécurité</b> et votre <b>confort</b> sont des aspects très importants pour moi.
        </P>
        <P>
          À cet effet, les cours de musique sont maintenant disponibles en ligne par l'entremise de l'application <b className="-zoom">Zoom</b>.
        </P>
      </Fragment>
    ],
    imageSource: buildAssetUrl("logo_zoom.png"),
    imageDescription: "Mélissa Bissonnette | Cours de musique à distance - Zoom",
    title: "Cours en ligne"
  }),
  formatArticleProps({
    content: [
      <Fragment>
        <P>
          Les séances de cours sont offertes via des rencontres <b>virtuelles</b> et <b>privées</b>.
        </P>
        <P>
          Pour céduler un cours,{" "}
          <a className="o-a -zoom" href="mailto:melinotes@hotmail.com">
            contactez-moi par courriel
          </a>{" "}
          pour effectuer une réservation.
        </P>
        <P>
          Un paiement par <b>virement intéract</b> sera demandé avant chaque séance de cours.
        </P>
      </Fragment>
    ],
    imageLarge: true,
    imageSource: buildAssetUrl("melissa-bissonnette_musique-en-ligne_telephone-tablette-portable.png"),
    imageDescription: "Mélissa Bissonnette | Cours de musique à distance - Téléphone, tablette et portable",
    title: "Fonctionnement"
  }),
  formatArticleProps({
    content: [
      <Fragment>
        <P>
          Le suivi des cours se fait <b>par courriel</b>. Vous y receverez <b>vos partitions</b>, ainsi que toutes les <b>notes de cours</b>.
        </P>
        <P>
          Vous aurez aussi la possiblilité de me poser des <b>questions par courriel</b> en lien avec la matière. J'y répondrais alors dans un délai
          résonnable.
        </P>
      </Fragment>
    ],
    imageSource: buildAssetUrl("logo_email.png"),
    imageDescription: "Mélissa Bissonnette | Cours de musique à distance - Suivi par courriel",
    title: "Suivi"
  })
];
