import React, { useState } from "react";
import cn from "classnames-helper";

// Components
import ServicesSlide from "./components/ServicesSlide";

// Constants
import { ITEMS } from "./core/data";

function Services() {
  const [hoveredSlideIndex, set] = useState(null);
  return (
    <section className="w-melissa-musique c-services">
      <div className="w-melissa-musique c-services_list" onMouseLeave={() => set(null)}>
        {ITEMS.map(({ id, title, description, url }, index) => (
          <div
            key={id}
            onFocus={() => set(index)}
            onMouseEnter={() => set(index)}
            className={cn("w-melissa-musique", "c-services_item", [
              "-active",
              index === hoveredSlideIndex
            ])}
          >
            <ServicesSlide
              id={id}
              show={index === hoveredSlideIndex}
              title={title}
              description={description}
              imageUrl={url}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
