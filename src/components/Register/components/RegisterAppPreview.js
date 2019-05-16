import React from "react";
import PropTypes from "prop-types";
import cn from "classnames-helper";

function Block({ height, blue, green }) {
  return (
    <div
      className={cn(
        "w-melissa-musique",
        "c-register_app-preview_block",
        ["-blue", blue],
        ["-green", green && !blue]
      )}
      style={{ height }}
    />
  );
}

Block.defaultProps = {
  blue: false,
  green: false
};

Block.propTypes = {
  blue: PropTypes.bool,
  green: PropTypes.bool,
  height: PropTypes.string.isRequired
};

function RegisterAppPreview() {
  return (
    <div className="w-melissa-musique c-register_app-preview">
      <div className="w-melissa-musique c-register_app-preview_window">
        <div className="w-melissa-musique c-register_app-preview_header">
          <span className="w-melissa-musique c-register_app-preview_btn -red" />
          <span className="w-melissa-musique c-register_app-preview_btn -yellow" />
          <span className="w-melissa-musique c-register_app-preview_btn -green" />
        </div>
        <div className="w-melissa-musique c-register_app-preview_body">
          <div className="o-layout -gutter-small">
            <div className="o-layout_item u-1/3">
              <Block height="80%" blue />
              <Block height="10%" />
            </div>
            <div className="o-layout_item u-1/3">
              <Block height="20%" blue />
              <Block height="30%" />
              <Block height="40%" green />
            </div>
            <div className="o-layout_item u-1/3">
              <Block height="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterAppPreview;
