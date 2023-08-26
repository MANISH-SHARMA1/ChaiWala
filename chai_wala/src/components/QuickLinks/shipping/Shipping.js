import React from "react";
import Footer from "../../Footer/Footer";

function Shipping() {
  return (
    <>
      <div className="shipping" style={{ margin: "15vh 0 0" }}>
        <h1
          style={{
            color: "#ff1493",
            backgroundColor: "yellow",
            width: "100%",
            padding: "2% 0",
            textAlign: "center",
            fontWeight: "900",
            fontSize: "2.4em",
          }}
        >
          Shipping & Delivery Policy
        </h1>
        <div className="body" style={{ margin: "10vh 10vw" }}>
          <p style={{ color: "rgb(139, 133, 133)", fontSize: "1.2em" }}>
            For International buyers, orders are shipped and delivered through
            registered international courier companies and/or International
            speed post only. For domestic buyers, orders are shipped through
            registered domestic courier companies and /or speed post only.
            Orders are shipped within 6-8 days or as per the delivery date
            agreed at the time of order confirmation and delivering of the
            shipment subject to Courier Company / post office norms.{" "}
            <b> MBA CHAI WALA PRIVATE LIMITED </b>is not liable for any delay in
            delivery by the courier company / postal authorities and only
            guarantees to hand over the consignment to the courier company or
            postal authorities within 6-8 days from the date of the order and
            payment or as per the delivery date agreed at the time of order
            confirmation. Delivery of all orders will be to the address provided
            by the buyer. Delivery of our services will be confirmed on your
            mail ID as specified during registration. For any issues in
            utilizing our services you may contact our helpdesk on{" "}
            <b> 7222905222 </b>or <b> support@mbachaiwala.com</b>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shipping;
