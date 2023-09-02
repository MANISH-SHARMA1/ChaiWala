import React from "react";

function Cancellation() {
  return (
    <>
      <div className="cancellation" style={{ margin: "15vh 10vw" }}>
        <h1>No Results Found</h1>
        <p>
          The page you requested could not be found. Try refining your search,
          or use the navigation above to locate the post.
        </p>
        <hr />
        <h3>Recent Posts</h3>
        <p>
          India Runs on Chai:
          <span style={{ color: "rgb(139, 133, 133)" }}>
            {" "}
            The Cultural Significance of India's Beloved Beverage
          </span>{" "}
          <br />
          <br /> Sipping on Good Health:
          <span style={{ color: "rgb(139, 133, 133)" }}>
            Exploring the benefits of CHAI
          </span>{" "}
        </p>
      </div>
    </>
  );
}

export default Cancellation;
