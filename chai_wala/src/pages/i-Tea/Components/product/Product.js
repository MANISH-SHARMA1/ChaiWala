import React, { useEffect, useState } from "react";
import "./Product.scss";
import Footer from "../../../../components/Footer/Footer";
import { axiosClient } from "../../../../utils/axiosClient";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../redux/cartSlice";

function Product() {
  const [description, setDescription] = useState(true);
  const [information, setInformation] = useState(false);
  const [reviews, setReviews] = useState(false);
  const [dataa, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [review, setReview] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartSlice.cart);
  const quantity = cart.find((item) => item._id === params.id)?.quantity;

  const handleClick = (e) => {
    if (e === "desc") {
      setInformation(false);
      setReviews(false);
      setDescription(true);
    } else if (e === "info") {
      setDescription(false);
      setReviews(false);
      setInformation(true);
    } else {
      setInformation(false);
      setDescription(false);
      setReviews(true);
    }
  };

  async function onLoad() {
    try {
      const data = await axiosClient.get(`/flavors/${params.id}`);
      const result = data.data.result;
      setData(result);

      const response = await axiosClient.get("/flavors/");
      const product = response.data.result;
      setProducts(product.filter((item) => item._id != params.id));
    } catch (error) {
      console.log("error from axios:", error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axiosClient.post("/reviewFlavor/", {
      review,
      name,
      email,
    });
  }

  useEffect(() => {
    onLoad();
  }, [params]);

  return (
    <>
      <div className="product">
        {dataa?.map((e) => (
          <>
            <div className="img">
              <img src={e?.imgUrl} alt="img" />
            </div>
            <div className="description">
              <h1>{e?.name}</h1>
              <h2>₹{e?.price}</h2>
              <p id="para">{e?.description}</p>
              <div className="cart-btn">
                <p id="number">{quantity}</p>
                <div
                  className="bttn"
                  onClick={() => {
                    dispatch(addToCart(dataa));
                  }}
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
          </>
        ))}
      </div>
      <div className="table">
        <div className="btns">
          <button onClick={() => handleClick("desc")}>Description</button>
          <button onClick={() => handleClick("info")}>
            Additional Information
          </button>
          <button onClick={() => handleClick("review")}>Reviews</button>
        </div>
        {description && (
          <p>
            Indulge in the rich and aromatic taste of i-Tea Premium - a premium
            tea blend made from the finest ingredients. Savor each sip and
            experience the perfect balance of flavor and aroma in every cup.
          </p>
        )}
        {information && (
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
        )}
        {reviews && (
          <div>
            <h1>Reviews</h1>
            <p>
              Be the first to review "i-Tea Premium" <br /> Your email address
              will not be published. Required fields are marked.*
            </p>
            <form onSubmit={handleSubmit} className="form">
              <div className="input">
                <textarea
                  name="review"
                  id="review"
                  placeholder="Your review *"
                  onChange={(e) => setReview(e.target.value)}
                ></textarea>
                <input
                  type="text"
                  placeholder="Name *"
                  id="input"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email *"
                  id="input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input type="submit" className="bottom btn" />
            </form>
          </div>
        )}
      </div>
      <div className="Container">
        {products?.map((e, index) => (
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
      <Footer />
    </>
  );
}

export default Product;
