import React from "react";
import WarningIcon from "react-ionicons/lib/IosWarningOutline";

export default function ServiceCovidWarning() {
  return (
    <div className="w-melissa-musique c-services_covid-warning">
      <div className="w-melissa-musique c-services_covid-warning_icon-holder">
        <WarningIcon className="w-melissa-musique c-services_covid-warning_icon" color="current" />
      </div>
      <div className="w-melissa-musique c-services_covid-warning_text-holder">
        Pour respecter les mesures de <b>distanciation sociale</b>, les récitals seront remplacés
        cette année par un petit <b>montage vidéo</b> des différents participants.
      </div>
    </div>
  );
}
