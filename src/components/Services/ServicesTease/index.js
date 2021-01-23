import React, { useState } from "react";
import { formatClassNames as fcn } from "../../../helpers";

// Components
import ServicesTeaseSlide from "./components/ServicesTeaseSlide";

// Constants
import { ITEMS } from "./core/data";

function ServicesTease() {
  const [hoveredSlideIndex, set] = useState(null);
  return (
    <section className={fcn("c-services-tease")}>
      <div className={fcn("c-services-tease_list")} onMouseLeave={() => set(null)}>
        {ITEMS.map(({ id, title, description, url }, index) => (
          <div
            key={id}
            onFocus={() => set(index)}
            onMouseEnter={() => set(index)}
            className={fcn("c-services-tease_item", ["-active", index === hoveredSlideIndex])}
          >
            <ServicesTeaseSlide id={id} show={index === hoveredSlideIndex} title={title} description={description} imageUrl={url} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesTease;
