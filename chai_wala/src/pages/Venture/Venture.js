import React, { useEffect, useState } from "react";
import "./Venture.scss";
import { axiosClient } from "../../utils/axiosClient";

function Venture() {
  const [venture, setVenture] = useState([]);

  async function onLoad() {
    try {
      const response = await axiosClient.get("/venture/");
      setVenture(response.data.result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    onLoad();
  }, []);
  return (
    <>
      <div className="venture">
        <div className="top">
          <h1>{venture[0]?.title}</h1>
          <p>{venture[0]?.description}</p>
        </div>

        <div className="iTea">
          <div className="tea">
            <div className="Tea">
              <h1>{venture[1]?.title}</h1>
              <p>{venture[1]?.description}</p>
            </div>
          </div>
          <div className="tea">
            <img
              className="img"
              src={venture[1]?.imgUrl}
              alt={venture[1]?.title}
            />
          </div>
        </div>

        <div className="riddhidev">
          <div className="riddhi">
            <img src={venture[2]?.imgUrl} alt="riddhidevImg" />
          </div>
          <div className="riddhi">
            <div className="riddhiPara">
              <h1>{venture[2]?.title}</h1>
              <p>{venture[2]?.description}</p>
            </div>
          </div>
        </div>

        <div className="beans">
          <div className="darkBeans">
            <div className="beansDesc">
              {" "}
              <h1>{venture[3]?.title}</h1>
              <p>{venture[3]?.description}</p>
            </div>
          </div>
          <div className="darkBeans">
            <img src={venture[3]?.imgUrl} alt="darkBeansImg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Venture;
