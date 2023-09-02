import React from "react";
import "./Gallery.scss";
import gallery from "../../Assets/Gallery/Gallery-20-1-jpg.webp";

function Gallery() {
  return (
    <>
      <div className="gallery">
        <img src={gallery} alt="galleryImg" />
      </div>
      <div className="desc">
        <h3>
          Memorable Moments: A Visual Journey Through Our Delicious Adventures
        </h3>
        <p>
          Step into our world of memories, where every dish, every drink, and
          every moment is crafted to perfection. Embark on a visual journey from
          the delicious food to the beverages crafted with flair. Take a stroll
          through our outlets in various cities and feel the vibrant energy of
          each location captured in our snapshots. Catch a glimpse of the
          celebrations we’ve had for our achievements along the way. Let each
          photo transport you to a moment in time, and experience the magic that
          we create every day.
        </p>
      </div>
    </>
  );
}

export default Gallery;
