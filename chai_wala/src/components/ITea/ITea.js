import React, { useEffect, useState } from "react";
import "./ITea.scss";
import { axiosClient } from "../../utils/axiosClient";

import { useNavigate } from "react-router";
function ITea() {
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
      <div className="tea">
        <h1>i-TEA</h1>
        <h6>By MBA CHAI WALA</h6>
        <div className="horizontal"></div>
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
              <h4>₹{e.price}</h4>
              <p>Read more</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ITea;
