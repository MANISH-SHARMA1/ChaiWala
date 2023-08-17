import React, { useState } from "react";
import "./Product.scss";
import { AiOutlineStar } from "react-icons/ai";
import Footer from "../../../../components/Footer/Footer";
import ElaichiTea from "../../../../Assets/iTea/iTea-Elaichi.jpg";
import PremiumTea from "../../../../Assets/iTea/mbaTea.webp";
import RegularTea from "../../../../Assets/iTea/i-Tea-Regular.webp";

function Product() {
  const image = [
    { img: ElaichiTea, name: "i-Tea Cardamom", price: "₹160.00" },
    { img: PremiumTea, name: "i-Tea Premium", price: "₹130.00 - ₹495.00" },
    { img: RegularTea, name: "i-TEA Regular", price: "₹85.00 - ₹160.00" },
  ];
  const [description, setDescription] = useState(true);
  const [information, setInformation] = useState(false);
  const [review, setReview] = useState(false);
  const handleClick = (e) => {
    console.log("clicked");
    console.log(`${e}`);
    if (e === "desc") {
      if (information === true || review === true || description === false) {
        setInformation(false);
        setReview(false);
        setDescription(true);
      }
    }
    if (e === "info") {
      if (description === true || review === true || information === false) {
        setDescription(false);
        setReview(false);
        setInformation(true);
      }
    }
    if (e === "review") {
      if (information === true || description === true || review === false) {
        setInformation(false);
        setDescription(false);
        setReview(true);
      }
    }
  };
 

  return (
    <>
      <div className="product">
        <div className="img">
          <img src={PremiumTea} alt="img" />
        </div>
        <div className="description">
          <h1>i-Tea Premium</h1>
          <h2>₹130.00 – ₹495.00</h2>
          <p id="para">
            Elevate your tea-drinking experience with i-Tea Premium. Handpicked
            and expertly blended, this exquisite tea offers a smooth and
            refreshing taste that will soothe your senses and uplift your mood.
            Enjoy a moment of pure bliss with every brew.
          </p>
          <div className="input">
            <label htmlFor="weight">Weight</label>
            <select name="" id="weight">
              <option value="" selected>
                Choose an option
              </option>
              <option value="250gm">250 gm</option>
              <option value="500gm">500 gm</option>
              <option value="1kg">1 kg</option>
            </select>
          </div>
          <div className="cart">
            <input id="number" type="number" />
            <div
              className="bttn"
            >
              <p>Add to cart</p>
            </div>
          </div>
          <hr />
          <p id="para">
            SKU: N/A/Category:{" "}
            <span style={{ color: "skyblue", cursor: "pointer" }}>Tea</span>
          </p>
        </div>
      </div>
      <div className="table">
        <div className="btns">
          <button onClick={() => handleClick("desc")}>Description</button>
          <button onClick={() => handleClick("info")}>
            Additional Information
          </button>
          <button onClick={() => handleClick("review")}>Reviews(0)</button>
        </div>
        {description ? (
          <p>
            Indulge in the rich and aromatic taste of i-Tea Premium - a premium
            tea blend made from the finest ingredients. Savor each sip and
            experience the perfect balance of flavor and aroma in every cup.
          </p>
        ) : (
          <div></div>
        )}
        {information ? (
          <div id="table">
            <h1>Additional information</h1>
            <table>
              <tr>
                <th>Weight</th>
                <td>0.25 kg</td>
              </tr>
              <tr>
                <th>Weight</th>
                <td>250 Gm, 500 Gm, 1 kg</td>
              </tr>
            </table>
          </div>
        ) : (
          <div></div>
        )}
        {review ? (
          <div>
            <h1>Reviews</h1>
            <p>
              There are no review yet. <br /> Be the first to review "i-Tea
              Premium" <br /> Your email address will not be published. Required
              fields are marked.*
            </p>
            <div className="star">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <form action="" className="form">
              <div className="input">
                <textarea
                  name="review"
                  id="review"
                  placeholder="Your review *"
                ></textarea>
                <input type="text" placeholder="Name *" id="input" />
                <input type="email" placeholder="Email *" id="input" />
              </div>
              <div className="bottom checkbox">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>
              <input type="button" value="Submit" className="bottom btn" />
            </form>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="Container">
        <h1>Related Products</h1>

        {image.map((e, index) => (
          <div
            key={index}
            className="imgContainer"
            style={{ backgroundImage: `url(${e.img})` }}
          >
            <div className="content">
              <h4 id="name">{e.name}</h4>
              <h4>{e.price}</h4>
              <p>Read more</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Product;
