import React, { useEffect, useState } from "react";
import "./IndiaChai.scss";
import { axiosClient } from "../../../utils/axiosClient";

function IndiaChai() {
  const [data, setData] = useState([]);

  async function onLoad() {
    const response = await axiosClient.get("/blog/");
    setData(response.data.result);
  }

  useEffect(() => {
    onLoad();
  }, []);
  return (
    <>
      <div className="indiaChai">
        <h1>
          {data[0]?.heading}
        </h1>
        <p>by Swarnika Porwal | May 2, 2023 | Chai</p>
        <img src={data[0]?.imgUrl} alt="chaiImg" />
        <p>
          <div className="gap">
            India is known for its love affair with tea, especially the milky
            and spiced chai. It’s a common sight to see people sipping chai at
            every nook and corner of the country. One could say that{" "}
            <span>India runs on chai.</span> <br />
          </div>{" "}
          <div className="gap">
            In this blog, we’ll explore the cultural significance of chai in
            India and why it’s more than just a beverage. <br />
          </div>{" "}
          <div className="gap">
            Chai has been a <span>part of Indian culture for centuries.</span>{" "}
            It’s believed to have originated in the eastern regions of the
            country and was originally used for medicinal purposes. However, it
            didn’t take long for chai to become a popular beverage in Indian
            households. <br />
          </div>{" "}
          <div className="gap">
            Chai is a<span>social lubricant</span> in India. It’s a beverage
            that brings people together and helps them bond over conversations.
            It’s often served to guests as a{" "}
            <span>symbol of hospitality and warmth.</span> Chai is a must-have
            beverage in most social gatherings. <br />
          </div>{" "}
          <div className="gap">
            Chai also plays an important role in India’s economy. It’s estimated
            that{" "}
            <span>
              India produces over a billion kilograms of tea every year,
            </span>{" "}
            making it one of the{" "}
            <span>largest tea producers in the world.</span> The tea industry
            provides employment to millions of people across the country, from
            tea plantation workers to tea stall owners. <br />
          </div>{" "}
          <div className="gap">
            Chai has also inspired a whole industry of street vendors and tea
            stall owners. These vendors set up shops on busy streets and serve
            freshly brewed chai to passersby. Moreover, chai has also influenced
            Indian cuisine. In fact, the concept of chai and snacks is so
            popular that it has given rise to a whole culture of tea-time
            rituals. <br />
          </div>{" "}
          <div className="gap">
            But chai isn’t just a cultural phenomenon in India. It’s also a
            drink that has <span>many health benefits.</span> As we discussed in
            the previous blog, chai contains antioxidants and anti-inflammatory
            properties that boost the immune system, improve digestion, and
            reduce stress levels. <br />
          </div>{" "}
          <div className="gap">
            In conclusion, chai is
            <span>more than just a beverage</span> in India. It’s a cultural
            symbol, a social lubricant, and a significant part of the country’s
            economy. It’s a drink that has brought people together for centuries
            and will continue to do so for many years to come. So, the next time
            you’re in India, don’t forget to sip on a steaming cup of chai and
            experience the cultural significance of this beloved beverage.
          </div>
        </p>
      </div>
    </>
  );
}

export default IndiaChai;
