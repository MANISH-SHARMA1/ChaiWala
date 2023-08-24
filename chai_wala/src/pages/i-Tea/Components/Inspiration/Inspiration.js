import React, { useEffect, useState } from "react";
import "./Inspiration.scss";
import { useNavigate } from "react-router";
import { axiosClient } from "../../../../utils/axiosClient";

function Inspiration() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  async function onLoad() {
    try {
      const data = await axiosClient.get("/flavors/");
      const result = data.data.result;
      setData(result);
    } catch (error) {
      console.log("error from axios:", error);
    }
  }

  useEffect(() => {
    onLoad();
  }, []);
  return (
    <>
      <div className="inspiration">
        <h1 className="first">ARTISTRY OF</h1>
        <h1 className="second">i-NSPIRATION</h1>
        <div className="iframe">
          <iframe
            className="yt"
            src="https://www.youtube.com/embed/4Bkdty4rQa0"
            title="Get ready to ignite your inspiration with i-TEA | MBA CHAI WALA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flavors">
          <h1>
            <span>FLAVORS OF</span> i-TEA
          </h1>
          {data?.map((e, index) => (
            <div
              key={index}
              className="imgContainer"
              style={{ backgroundImage: `url(${e.imgUrl})` }}
              onClick={() => {
                navigate(`/product/${e._id}`);
              }}
            >
              <div className="content">
                <h4 id="name">{e.name}</h4>
                <h4>{e.price}</h4>
                <p>Read more</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Inspiration;
