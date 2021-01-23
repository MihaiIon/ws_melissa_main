import React, { Fragment } from "react";
import PropTypes from "prop-types";

function ServiceDetails({ halfhourFine, hourFine }) {
  return (
    <Fragment>
      <b>1 heure</b> | {hourFine}$
      <br />
      <b>30 minutes</b> | {halfhourFine}$
      <br />
      <span style={{ fontSize: 13 }}>
        <em>*</em> Tous les cours sont offerts à mon domicile et/ou en ligne.
      </span>
    </Fragment>
  );
}

ServiceDetails.propTypes = {
  halfhourFine: PropTypes.number.isRequired,
  hourFine: PropTypes.number.isRequired
};

export default ServiceDetails;
